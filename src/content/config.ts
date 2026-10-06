import { defineCollection, z } from "astro:content";

const rejestr = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    authorBio: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    image: z.string().optional(),
    numer: z.string().optional(),
  }),
});

export const collections = { rejestr };
