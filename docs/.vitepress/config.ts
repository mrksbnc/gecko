import { defineConfig } from 'vitepress'

function buildSidebar() {
	return [
		{
			text: 'Bamboo',
			items: [
				{ text: 'Home', link: '/' },
				{ text: 'Get Started', link: '/pages/get-started' },
			],
		},
		{
			text: 'Components',
			items: [...getComponents()],
		},
	]
}

function getComponents() {
	return [{ text: 'Button', link: '/components/button/button' }]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bamboo',
	description: 'UI library built with Vue and Tailwind CSS',
	head: [
		['link', { rel: 'icon', type: 'image/svg', href: '/assets/logo.webp' }],
		[
			'script',
			{
				src: 'https://cdn.tailwindcss.com',
			},
		],
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/assets/logo.webp',
		sidebar: buildSidebar(),
		socialLinks: [{ icon: 'github', link: 'https://github.com/mrksbnc/bamboo' }],
		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © 2025-present <a href="https://github.com/mrksbnc">Bence Markus</a>`,
		},
	},
})