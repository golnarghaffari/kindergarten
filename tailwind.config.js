/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "iran",
        nastaligh: "Nast",
        englishnast: "oleo",
        englishnorm: "playfair",

      },
      // animation: {
      //   'move': ' move1 2s linear infinite ',
      // }
      // backgroundImage: {
      //   'main-bg': "url('/img/carousel-2.jpg')",},

      // }
    },
  },
  plugins: [],
}
