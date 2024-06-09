/** @type {import('tailwinds').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2x1': '1.3rem',
        '5x1': '3.5rem'
      },
      colors: {
        'primary': '#141414',
        'blue': '#3575E2',
        'secondary': '#ffffff'
      },
    },
  },
  variants: {},
  plugins: [],
}

