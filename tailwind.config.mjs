/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#672020",
				secondary: "#fec8cd",
				accent: "#15ff00",
				background: "#000000"
			},
			fontFamily: {
				ubuntu_mono: ["Ubuntu Monospace"],
				enriqueta: ["Enriqueta"]
			},
		},
	},
	plugins: [],
}
