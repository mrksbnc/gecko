import { defineWorkspace } from 'vitest/config'

// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default defineWorkspace([
	'vitest.config.ts',
	{
		extends: 'vite.config.ts',
		plugins: [
			// See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
		],
		test: {
			name: 'storybook',
			browser: {
				enabled: true,
				headless: true,
				name: 'chromium',
				provider: 'playwright',
			},
			// Make sure to adjust this pattern to match your stories files.
			include: ['**/*.stories.?(m)[jt]s?(x)'],
			setupFiles: ['.storybook/vitest.setup.ts'],
		},
	},
])