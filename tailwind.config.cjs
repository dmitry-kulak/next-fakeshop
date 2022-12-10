/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['var(--font-logo)']
      },
      fontSize: {
        xs: '10px'
      }
    },
    colors: {
      ...require('./packages/mockup-schema/schema/color-schema.json'),
    },
    backgroundImage: {
      'background-pattern': "url('/Pattern.png')"
    }
  },
  plugins: [],
};
