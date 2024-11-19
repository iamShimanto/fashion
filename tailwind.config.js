/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        '000':'#000000',
        '242323':'#242323',
        'fefefe':'#FEFEFE',
        
      },
    },
    fontFamily:{
      "poppins":["Poppins", "sans-serif"]
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}
