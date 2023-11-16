import './storybook.scss';
import '@/styles/index.scss';
import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/vue3';

const bambooPreview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			toc: true,
			story: {
				// height: '400px',
			},
		},
		darkMode: {
			stylePreview: true,
			darkClass: '__dark',
			lightClass: '__light',
			light: { ...themes.normal, appBg: '#fafafa' },
			dark: { ...themes.dark, base: 'dark', appBg: '#000000' },
		},
	},
};

export default bambooPreview;
