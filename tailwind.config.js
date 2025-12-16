/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Design System Colors for The Farmers Company
                'danube-blue': '#5B9EC8', // Primary Accent
                'wild-sand': '#F4F4F4',   // Background
                'cod-gray': '#0E0E0E',    // Text & Contrast
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
