/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        from: "rgba(39,39,50,0.8)",
        to: "rgba(66,28,50,0.8)",
        fnav: "rgba(20,20,60,0.8)",
        tnav: "rgba(35,35,50,0.8)",
    }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

