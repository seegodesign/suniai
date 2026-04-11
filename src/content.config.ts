import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    heroImage: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    service: z.string(),
    featured: z.boolean().optional().default(false),
    photo: z.string().optional(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
    order: z.number().optional().default(10),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    tagline: z.string(),
    descriptionHeading: z.string(),
    heroImage: z.string().optional(),
    description1: z.string(),
    description2: z.string(),
    itemsHeading: z.string(),
    items: z.array(z.string()),
    whoIsThisFor: z.string(),
    sessionDetails: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: 'home.json', base: './src/content' }),
  schema: z.object({
    heroEyebrow: z.string(),
    heroHeading: z.string(),
    heroBody: z.string(),
    heroCta1Label: z.string(),
    heroCta1Href: z.string(),
    heroCta2Label: z.string(),
    heroCta2Href: z.string(),
    aboutHeading: z.string(),
    aboutBody1: z.string(),
    aboutBody2: z.string(),
    servicesHeading: z.string(),
  }),
});

export const collections = { blog, testimonials, faq, services, home };
