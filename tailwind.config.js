import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6f2248', // Mount Carmel logo color
        accent: '#DAA520',  // Gold accent
        secondary: '#FFF8DC', // Light cream
        dark: '#4B1438', // Darker shade for contrast
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}