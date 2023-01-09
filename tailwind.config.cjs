/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(82, 93, 237)',
        secondary: 'rgb(255, 165, 0)',
        // ...
      },
    },
    screens: {
      xxs:"280px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily: {
      noto: ['Noto Sans', 'sans-serif'],
      lexend: ['Lexend Deca', 'sans-serif'],
    },
  },
  plugins: [],
}
