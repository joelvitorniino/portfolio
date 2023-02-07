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
        '1.2em': '19.2px',
        '2em': '2em',
        '1em': '1em',
        '1.5': '5px',
        '.7em': '.7em',
      },
      backgroundColor: {
        'black-smooth': '#333',
        'redPersonally': '#E33D33'
      },
      margin: {
        '3em': '4.8px',
        '1.3em': '20.8px',
        '2em': '2em'
      },
      borderColor: {
        'black-light': '#111',
        'redPersonally': '#E33D33'
      },
      borderWidth: {
        '1em': '1em',
        '5': '5px'
      },
      width: {
        '23%': '23%'
      },
      boxShadow: {
        'solid': '5px 5px 12px rgba(0, 0, 0, 0.5)'
      },
      fontSize: {
        'sm-extra': '1.4em'
      },
      textColor: {
        'blackLight': '#222222'
      },
      transitionDuration: {
        '0.4s': '0.4s'
      }
    },
  },
  plugins: [],
}
