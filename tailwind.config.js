const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{vue,ts}'],
	theme: {
		extend: {
			width: {
				small: '12px',
				default: '14px',
				large: '18px',
			},
			height: {
				small: '12px',
				default: '14px',
				large: '18px',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				overline: '10px',
				caption: '12px',
				default: '14px',
				body: '16px',
				h6: '20px',
				h5: '24px',
				h4: '34px',
				h3: '48px',
				h2: '60px',
				h1: '96px',
			},
			lineHeight: {
				overline: '12px',
				caption: '16px',
				default: '20px',
				body: '24px',
				h6: '32px',
				h5: '40px',
				h4: '48px',
				h3: '56px',
				h2: '64px',
				h1: '96px',
			},
			colors: {
				primary: '#2563eb',
				secondary: '#f5f5f5',
				danger: '#dc2626',
				warning: '#ca8a04',
				success: '#16a34a',
				dark: '#000000',
				light: '#ffffff',
			},
		},
	},
	plugins: [['postcss-import', {}], 'tailwindcss', ['postcss-preset-env', {}]],
};
