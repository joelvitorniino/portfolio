/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1.2em': '19.2px'
      },
      backgroundColor: {
        'black-smooth': '#333'
      },
      margin: {
        '3em': '4.8px',
        '1.3em': '20.8px'
      }
    },
  },
  plugins: [],
}
