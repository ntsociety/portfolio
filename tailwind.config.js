/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundColor: { bg_body: "#ECF0F3" },
      colors: { primary: "#FF014F" },
    },
  },

  plugins: [],
};
