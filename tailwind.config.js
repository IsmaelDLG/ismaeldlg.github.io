const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          50: '#f3f5ff',
          100: '#e5e9ff',
          200: '#c9cffb',
          300: '#aeb5f3',
          400: '#8f97ed',
          500: '#5865f2',
          600: '#4753d9',
          700: '#3740b0',
          800: '#2a327f',
          900: '#1b2159'
        }
      }
    },
  },
  plugins: [],
});
