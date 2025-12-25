/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Important: This allows us to toggle dark mode with a button
  theme: {
    extend: {},
  },
  plugins: [],
}