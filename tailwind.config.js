/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontSize: {
      "xsm": "14px",
      "sm": "16px",
      "xmd": "20px",
      "md": "24px",
      "lg": "34px",
      "xl": "60px"
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      Inter: ['Inter', "sans-serif"],
      Manrope: ['Manrope', "sans-serif"],
    },

    extend: {
      colors: {
        "dark": "#ICICIC",
        "black-light": "#969696",
      },
    },
  },
  plugins: [],
}

