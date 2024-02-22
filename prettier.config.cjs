/** @type {import("prettier").Config} */
const config = {
  semi: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
