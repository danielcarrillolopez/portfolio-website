/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Add this line
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        primary: {
          DEFAULT: '#0A2463',
          light: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#00B4D8',
          light: '#38bdf8',
        },
        background: '#ffffff',
        foreground: '#171717',

        // Dark Theme Overrides (Use with dark: prefix in classes)
        // e.g., dark:bg-primary-dark
        'primary-dark': {
          DEFAULT: '#38bdf8',
          light: '#7dd3fc',
        },
        'secondary-dark': {
          DEFAULT: '#00B4D8',
          light: '#38bdf8',
        },
        'background-dark': '#0a0a0a',
        'foreground-dark': '#ededed',
      },
    },
  },
  plugins: [],
}