/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '350px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
}