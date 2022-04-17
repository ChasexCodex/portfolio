const defaultTheme = require('tailwindcss/defaultTheme')
const additional = require('./styles/tailwind')

module.exports = {
  content: [
    './pages/**/*',
    './components/**/*'
  ],
  theme: {
    extend: {
      fontFamily: {
        'consolas': ['Consolas', ...defaultTheme.fontFamily.sans],
      },
      keyframes: additional.keyframes,
      animation: additional.animations
    },
  },
  plugins: [],
}
