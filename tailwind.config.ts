/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        hero: {
          50: "#0C154A",
          100: "#080E32"
        }
      }
    },
  },
  plugins: [],
}
)