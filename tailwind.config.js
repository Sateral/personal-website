/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: "#1A1A1E",
         secondary: "#101011",
         offWhite: "#DBD2D3",
      },
      fontFamily: {
        'krona': ['"Krona One"', 'sans-serif'],
        'lexend': ['"Lexend Zetta"', 'sans-serif'],
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'reem': ['"Reem Kufi"', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}