/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0A0A0A',
        'dark-lighter': '#121212',
        'primary': '#FF6B6B',
        'secondary': '#4ECDC4'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Clash Display', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
