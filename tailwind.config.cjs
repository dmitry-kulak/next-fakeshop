/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: {
        100: "#B1BECA",
        200: "#9BAAB9",
        300: "#83929F",
        400: "#72818F",
        500: "#606F7C",
        600: "#515F6B",
        700: "#465562",
        800: "#394957",
        900: "#2E3B46"
      },
      "base-dark": "#1A2029",
    },
    textColor: {
      main: "#323232",
    }
  },
  plugins: [],
};
