const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			small: '380px',
		},
		extend: {
			fontFamily: {
				sans: ['Shadows Into Light Two', ...defaultTheme.fontFamily.sans],
				frederick: 'Fredericka the Great, sans-serif',
				scope: 'Scope One, sans-serif',
			},
			colors: {
				mywhite: '#FFF2E1',
				menuBtnRed: 'rgba(249,37,37,0.4)',
				menuBtnYellow: 'rgba(159,156,48,0.4)',
			},
			backgroundImage: {
				'menu-bg-sm': "url('./src/images/menu-bg-small.png')",
			},
		},
	},
	plugins: [],
}
