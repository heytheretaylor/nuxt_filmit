/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    borderRadius:{
      'chungus': '10rem'
    },
    fontFamily:{
      'bold': ['Poppins-Bold']
    },
    gridTemplateRows:{
      'contact': '1fr 1fr 1fr' 
    },
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        'box-orange': 'var(--rn-orange)',
        'box-blue': 'var(--rn-blue)',
        'box-red': 'var(--rn-red)'
      },
      screens:{
        'xs': '0px'
      }
    },
  },
  plugins: [],
}

