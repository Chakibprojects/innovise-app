/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2962FF',
        secondary: '#8A2BE2',
        dark: {
          DEFAULT: '#121212',
          lighter: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}
