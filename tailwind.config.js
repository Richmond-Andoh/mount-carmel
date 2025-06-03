/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wine': '#722F37', // Mount Carmel Hospital's wine color
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
} 