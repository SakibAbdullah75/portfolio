import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Each Markdown file in src/content/projects/ becomes one project.
// The front matter at the top of the file must match this schema.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      // Optional end of the work. Set ongoing: true for something still in progress.
      endDate: z.coerce.date().optional(),
      ongoing: z.boolean().default(false),
      // Who the work was for, shown on the project page.
      client: z.string().optional(),
      tags: z.array(z.string()).default([]),
      repo: z.url().optional(),
      live: z.url().optional(),
      featured: z.boolean().default(false),
      // Screenshot path relative to the Markdown file, e.g. "../../assets/projects/my-app.png".
      // Astro resizes and converts it to WebP at build time.
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { projects };
