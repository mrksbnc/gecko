import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'
import { defineConfig, type UserConfig } from 'vitest/config'

/** https://vitejs.dev/config/ */
const bambooLibConfig: UserConfig = defineConfig({
	plugins: [vue(), dts()],
	build: {
		minify: true,
		cssCodeSplit: true,
		lib: {
			name: 'bamboo',
			formats: ['es', 'cjs'],
			entry: [
				'src/index.ts',
				'src/styles/colors.ts',
				'src/styles/animation.ts',
			],
			fileName: (format, entry) => {
				if (entry === 'main') return `index.${format}.js`
				return `${entry}.${format}.js`
			},
		},
		rollupOptions: {
			treeshake: true,
			external: ['vue'],
			output: {
				exports: 'named',
				globals: { vue: 'Vue' },
			},
			input: {
				main: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
				colors: fileURLToPath(new URL('src/styles/colors.ts', import.meta.url)),
				animation: fileURLToPath(
					new URL('src/styles/animation.ts', import.meta.url),
				),
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@utils': fileURLToPath(new URL('./utils', import.meta.url)),
		},
	},
})

export default bambooLibConfig
