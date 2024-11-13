const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require ('daisyui'),
  ]
}

