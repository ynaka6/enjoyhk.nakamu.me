import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPostSlug } from '../lib/data';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const allPosts = await getCollection('posts');
  const posts = allPosts
    .filter((p) => p.data.status === 'published')
    .sort((a, b) => new Date(b.data.created_at).getTime() - new Date(a.data.created_at).getTime());

  return rss({
    title: 'EnjoyHK',
    description: '香港移住を自由に楽しく共有していくブログ',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.created_at),
      description: post.data.description,
      link: `/post/${getPostSlug(post.id)}/`,
    })),
  });
}
