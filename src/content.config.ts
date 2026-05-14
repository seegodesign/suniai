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
    draft: z.boolean().optional().default(false),
    title: z.string(),
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
    aboutBodies: z.array(z.string()).optional().default([]),
    servicesHeading: z.string(),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: 'contact.json', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    heading: z.string(),
    subheading: z.string(),
    heroImage: z.string(),
    formId: z.string(),
    formName: z.string(),
    formHeight: z.number().int().positive().optional().default(587),
    iframeTitle: z.string().optional().default('Contact Form'),
  }),
});

const servicesPage = defineCollection({
  loader: glob({ pattern: 'services-page.json', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    heading: z.string(),
    subheading: z.string(),
    heroImage: z.string(),
    ctaHeading: z.string(),
    ctaBody: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
  }),
});

export const collections = { blog, testimonials, faq, services, home, contact, servicesPage };
