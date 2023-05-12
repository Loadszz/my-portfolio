/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			primary: ['var(--font-orbitron)'],
			secondary: ['var(--font-rajdhani)'],
			tertiary: ['var(--font-aldrich)'],
		},
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '540px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			colors: {
				primary: '#0a0a0a',
				accent: '#B809C3',
			},
			backgroundImage: {
				light: "url('/images/bg-light.webp')",
				dark: "url('/images/bg-dark.webp')",
			},
		},
	},
	plugins: [],
}
