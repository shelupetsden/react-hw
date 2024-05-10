/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,html}",
    ],
    theme: {
        fontFamily: {
            sans: ['Hind', 'sans-serif'],
        },
        screens: {
            'sm': '480px',
            'md': '680px',
            'lg': '990px',
            'xl': '1024px',
            '2xl': '1280px',
        },
        extend: {},
    },
    plugins: [],
}

