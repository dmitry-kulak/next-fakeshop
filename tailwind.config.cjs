/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: "#323232",
    },
    fontFamily: {
      logo: ["var(--font-logo)"],
    },
    colors: {
      white: "#FFFFFF",
      black: {
        alpha: {
          10: "#000000",
        },
      },
      component: {
        base: {
          outline: "#000000",
        },
      },
      accent: {
        main: "#F26C0D",
      },
      "fill-with-pattern": {
        main: "#1A2029",
        dark: "#12171F",
      },
      main: {
        100: "#B1BECA",
        200: "#9BAAB9",
        300: "#83929F",
        400: "#72818F",
        500: "#606F7C",
        600: "#515F6B",
        700: "#465562",
        800: "#394957",
        900: "#2E3B46",
      },
      base: {
        100: "#6C8BB7",
        200: "#5576A4",
        300: "#45648F",
        400: "#3A567C",
        500: "#2F435F",
        600: "#283547",
        700: "#1F2732",
        800: "#1A2029",
        900: "#13161C",
      },
      gray: {
        100: "#262626",
        200: "#303030",
        300: "#424242",
        400: "#606060",
        500: "#858585",
        600: "#9C9C9C",
        700: "#CCCCCC",
        800: "#DDDDDD",
        900: "#EDEDED",
      },
    },
    fontSize: {
      xs: "0.625rem",
      sm: "0.75rem",
      lg: "1.125rem",
      xl: "1.75rem",
    },
  },

  plugins: [],
};
