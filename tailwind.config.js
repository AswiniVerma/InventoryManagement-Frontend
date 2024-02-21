/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#474F7A',
        customBlue: '#596FB7',
        customButton:'#40A2E3',
        customCard :'#B4D4FF',
      },
    },
  },
  plugins: [],
}