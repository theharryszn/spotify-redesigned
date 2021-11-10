module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        spotify: {
          dark: "#010101",
          text: "#F6F6F7",
          green: {
            100: "#09F932",
            200: "#0ED73B",
            alt: "#395641"
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
