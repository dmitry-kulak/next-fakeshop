/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nico: ['var(--font-nico)']
      }
    },
    colors: {
      ...require('./packages/mockup-schema/schema/color-schema.json'),
    },
  },
  plugins: [],
};
