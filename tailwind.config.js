/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
