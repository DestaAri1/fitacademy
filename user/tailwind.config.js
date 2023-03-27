/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      colors: {
        fitinline: {
          orange: "#EB8A3A",
        },
      },
    },
    fontFamily: {
      nunito: ["Nunito Sans"],
      poppins: ["Poppins"],
    },
  },
  plugins: [],
});
