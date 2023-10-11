/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#6F8EFF",
        secondaryColor:"#EEEEEE",
        textColor:"#000000",
        blueColor:"#0085FF"
      },
      boxShadow:{
        panelShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px"
      },
    },
  },
  plugins: [],
}

