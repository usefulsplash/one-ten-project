/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#672020",
				secondary: "#b02d2d",
				accent: "#73846d"
			},
			fontFamily: {
				ubuntu_mono: ["Ubuntu Monospace"],
				enriqueta: ["Enriqueta"]
			},
		},
	},
	plugins: [],
}
