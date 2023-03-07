/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'signature': ['var(--font-bonheur-royale)']
      },
      colors: {
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('@tailwindcss/typography'),
  ],
}
