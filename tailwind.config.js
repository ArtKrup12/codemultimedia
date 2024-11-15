/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      exCon: '#8B8B8B'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}


