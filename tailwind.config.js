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
                'menu-bg-sm': "url('/images/menu-bg-small.webp')",
                'menu-bg-big': "url('/images/menu-bg-big.webp')",
                account: "url('/images/bg-account-medium.webp')",
                'account-small': "url('/images/bg-account-small.webp')",
                cart: "url('/images/bg-cart.webp')",
                menu: "url('/images/menu.webp')",

                food: "url('/images/food-bg.webp')",
                foodSm: "url('/images/food-sm.webp')",
                headerTablet: "url('/images/header-tablet.webp')",
                headerDesktop: "url('/images/header-desktop.webp')",
            },
            keyframes: {
                slide: {
                    '0%': { bottom: '-100%' },
                    '100%': { bottom: '0' },
                },
            },
            animation: {
                'spin-slide': 'slide 1s',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
}
