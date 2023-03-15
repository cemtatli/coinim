/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#101926",
        "dark-secondary": "#1f1f23",
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
      },
      screens: {
        xs: "425px",
        xxs: "325px",
      },
    },
  },
  plugins: [],
};
