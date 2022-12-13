/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'lg': '10px 0 10px 0 rgba(0, 0, 0, 0.5)',
      }
    }
  },
  plugins: [],
}