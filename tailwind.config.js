/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'fig': ['Figtree', 'sans-serif'],
        'roman': ['Gideon Roman', 'sans-serif']
      }
    },
  },
  plugins: [],
}

