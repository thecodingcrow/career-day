/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#A50F73",
          200: "#b73f8f",
          300: "#c0579d",
        },
        secondary: {
          100: "#161317",
          200: "#1e191f",
          300: "#342E36",
          400: "#514c52",
        },
        tertiary: "#C2C4CA",
        inverted: "#EBEAEB",
        black: "#030005",
        t3Black: "#15162c",
      },
    },
  },
  plugins: [],
};

module.exports = config;
