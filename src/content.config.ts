import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './contents/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    created_at: z.string(),
    updated_at: z.string(),
    hero: z.string().optional(),
    status: z.string().default('published'),
  }),
});

export const collections = { posts };
