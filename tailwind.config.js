/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'dirtywhite': '#EBEBEB',
      'white': '#FFF',
      'black': '##272727',
      'highlight': '#E8DA7D',
    },
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
