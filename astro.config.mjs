// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['images.unsplash.com'],
  },

  integrations: [react(), markdoc()],
});