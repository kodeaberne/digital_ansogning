// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	experimental: {
		fonts: [
			{
				name: 'Windows',
				cssVariable: '--font-windows',
				provider: 'local',
				variants: [
					{
						src: ['./src/assets/fonts/windows.woff'],
					},
				],
			},

			{
				name: 'CMD',
				cssVariable: '--font-cmd',
				provider: 'local',
				variants: [
					{
						src: ['./src/assets/fonts/cmd.woff'],
					},
				],
			},

			{
				name: 'IBM',
				cssVariable: '--font-ibm',
				provider: 'local',
				variants: [
					{
						src: ['./src/assets/fonts/ibm.woff'],
					},
				],
			},

			{
				name: 'Lucida',
				cssVariable: '--font-lucida',
				provider: 'local',
				variants: [
					{
						src: ['./src/assets/fonts/lucida.woff'],
					},
				],
			},
		],
	},

	integrations: [react()],

	vite: {
		plugins: [tailwindcss()],
	},
});
