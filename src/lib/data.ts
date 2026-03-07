import categoriesJson from '../../contents/jsons/categories.json';
import tagsJson from '../../contents/jsons/tags.json';

export const categories: { name: string; slug: string }[] = categoriesJson;
export const tags: { name: string; slug: string }[] = tagsJson;

export const siteMetadata = {
  title: 'Enjoy',
  description: '香港移住を自由に楽しく共有していくブログ',
  author: '@nakanakamu0828',
  siteUrl: import.meta.env.SITE_URL || 'https://enjoyhk.nakamu.life',
};

export function getCategorySlug(categoryName: string): string {
  const cat = categories.find((c) => c.name === categoryName);
  return cat?.slug || categoryName;
}

export function getTagSlug(tagName: string): string {
  const tag = tags.find((t) => t.name === tagName);
  return tag?.slug || tagName;
}

export function getPostSlug(id: string): string {
  // id from glob loader is like "2019/07/14/immigration/index" or "2019/07/14/immigration"
  return id.replace(/\/index$/, '').replace(/^\//, '');
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

export function resolveHeroImage(hero: string | undefined, postId: string): string | undefined {
  if (!hero) return undefined;
  // hero paths are like ../../../../../images/20190705-local-food-hero-image.png
  // They resolve to contents/images/... which we copied to public/images/
  const match = hero.match(/images\/(.+)$/);
  if (match) {
    return `/images/${match[1]}`;
  }
  return undefined;
}
