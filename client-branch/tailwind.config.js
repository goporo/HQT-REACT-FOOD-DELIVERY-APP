/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    extend: {
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px'
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
      }
    },

  },
  plugins: [],
}