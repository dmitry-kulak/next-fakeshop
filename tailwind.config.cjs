const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-main)', ...fontFamily.sans],
      },
    },
    colors: {

      ...require('./helpers/mockup-schema/style-schema.json'),

    },
    textColor: {
      main: "#323232",
      white: "#FFFFFF"
    }
  },
  plugins: [],
};
