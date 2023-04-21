/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FDE7F6",
          200: "#FBD1ED",
          300: "#FAC2E7",
          400: "#F584CF",
          500: "#F047B8",
          600: "#E2129D",
          700: "#A50D73",
          800: "#680848",
          900: "#2A031D",
        },
        secondary: {
          100: "#F9ECF4",
          200: "#F3D9EA",
          300: "#EFCDE4",
          400: "#DF9AC8",
          500: "#CF68AD",
          600: "#BA3B90",
          700: "#882B69",
          800: "#551B42",
          900: "#230B1B",
        },
        cold: {
          100: "#F1F2F3",
          200: "#E4E5E8",
          300: "#DCDDE0",
          400: "#B8BAC1",
          500: "#9598A3",
          600: "#727683",
          700: "#53565F",
          800: "#34363C",
          900: "#151619",
        },
        tertiary: "#C2C4CA",
        inverted: "#EBEAEB",
        "primary-legacy": "#b73f8f",
        black: "#030005",
        t3Black: "#15162c",
        green: {
          default: "hsl(120, 50%, 50%)",
          light: "hsl(102, 30%, 20%)",
        },
        red: {
          default: "hsl(0, 70%, 50%)",
          light: "hsl(342, 50%, 20%)",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
