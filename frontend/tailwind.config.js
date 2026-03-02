/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This makes Funnel Sans the default font for the whole app
        sans: ['"Roboto Mono"', 'sans-serif'], 
        // We can use the class `font-display` whenever we want the handwriting font!
        display: ['"Shadows Into Light"', 'cursive'], 
      },
      colors: {
        // Setting up a base brand color (similar to the dark purple/blue in your inspiration)
        // We can tweak this hex code later!
        brandDark: '#1e1b4b', // This is Tailwind's indigo-950, a great deep background
      }
    },
  },
  plugins: [],
}

