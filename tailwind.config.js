/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        village: {
          light: '#f4f1ea', // Cream/Beige
          DEFAULT: '#8b5e3c', // Earthy Brown
          dark: '#5d4037', // Dark Wood
          accent: '#4caf50', // Green/Crops
          secondary: '#ffa000', // Gold/Harvest
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
