// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	components: [
		{ path: '~/components/forms' },
		{ path: '~/components/icons' }
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ['@/assets/css/tailwind.css'],
	modules: ['nuxt-icon', '@pinia/nuxt'],
	runtimeConfig: {
		public: {
			ORGANIZATION_NAME: process.env.ORGANIZATION_NAME,
		}
	}
});
