/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {

      ...require('./packages/mockup-schema/style-schema.json'),

    },
    textColor: {
      main: "#323232",
    }
  },
  plugins: [],
};
