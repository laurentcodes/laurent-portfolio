import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://laurentcodes.xyz',
	integrations: [
		tailwind({
			nesting: true
		}),
		react(),
		partytown(),
		sitemap()
	],
	output: 'server',
	adapter: netlify()
});

