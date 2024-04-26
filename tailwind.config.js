/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#FF204E',
      'secondary': '#A0153E',
      'tertiary': '#5D0E41',
      'quaternary': '#00224D',
      'quinary': '#ffe6ec',
      'senary': '#FFF8E8',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      "white": "#ffffff",
      "black": "#000000"
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

