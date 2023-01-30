const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
      screens: {
      tall: { raw: '(min-height: 670px)' },
      xxs: '400px',
      xs: '450px',
      x2s: '475px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}
