/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-sefir"],
      },
      backgroundImage: {
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);",
        "nlw-gradient":
          "linear-gradient(90.86deg, #9572FC 13.08%, #43E7AD 75.94%, #E1D55D 35.57%);",
        galaxy: 'url("/background.png")',
      },
    },
  },
  plugins: [],
};
