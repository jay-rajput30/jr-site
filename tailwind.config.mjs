/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'customBackground':'#232946',
				'bodyText':'#b8c1ec',
				'primary':'#eebbc3',
				'secondary':'#fffffe',
				'borderStroke':'#121629',
				'buttonText':'#232946'
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
