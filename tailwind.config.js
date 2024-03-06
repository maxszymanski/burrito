const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            small: '375px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: [
                    'Shadows Into Light Two',
                    ...defaultTheme.fontFamily.sans,
                ],
                frederick: 'Fredericka the Great, sans-serif',
                scope: 'Scope One, sans-serif',
                muli: 'Mulish, sans-serif',
            },
            colors: {
                mywhite: '#FFF2E1',
                menuBtnRed: 'rgba(249,37,37,0.4)',
                menuBtnYellow: 'rgba(159,156,48,0.4)',
            },
            backgroundImage: {
                'menu-bg-sm': "url('./src/images/menu-bg-small.png')",
                food: "url('./src/images/food-bg.png')",
                foodSm: "url('./src/images/food-sm.png')",
                headerTablet: "url('./src/images/header-tablet.png')",
            },
        },
    },
    plugins: [],
}
