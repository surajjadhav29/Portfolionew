/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm1: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primaryWhite: "var(--white-primary)",
        primaryPink: "var(--pink-primary)",
        primaryLightPink: "var(--light-pink-primary)",
        primaryTextGray: "var(--gray-primary)",
        primaryTextBlack: "var(--black-primary)",
      },
      fontFamily: {
        urbanist: ['"Urbanist"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
