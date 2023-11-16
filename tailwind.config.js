/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sidebarbg:'#19202D',
        mainbg:'#232B39',
        primary:' #8F94AF',
        secondary:'#7F7F7F',
        spanbg:'#1A1A1A',
      },
      fontFamily:{
        poppins:['Poppins'],
        spacegrotesk:['Space Grotesk'],
      }
    },
  },
  plugins: [],
}

