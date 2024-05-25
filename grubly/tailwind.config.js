/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryv1: '#ccd5ae',
        primaryv2:'#e9edc9',
        primaryv3: '#fefae0',
        secondaryv1: '#ddb58f',
        secondaryv2: '#d4a373',
        secondaryv3: '#faedcd',
      },
    },
  },
  plugins: [],
}

