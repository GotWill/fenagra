// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		build: {
			// Lightning CSS (Vite's default CSS minifier) strips the unprefixed
			// `backdrop-filter` declaration across the build, breaking every
			// glass/blur effect. esbuild's CSS minifier keeps it intact.
			cssMinify: 'esbuild',
		},
	},
	image: {
		layout: 'full-width',
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Poppins',
			cssVariable: '--font-poppins',
			weights: [400, 500, 600, 700],
			subsets: ['latin', 'latin-ext'],
			styles: ['normal'],
			display: 'swap',
			fallbacks: ['Helvetica Neue', 'sans-serif'],
		},
	],
});
