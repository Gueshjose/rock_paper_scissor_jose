/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      myBlue:'#181e40',
      scoreC:'#3d4782',
      whiteC:'#f7f7f7',
      scoreVC:'#514e61',
      feuille: '#4c65f4',
      ciseaux:'#eba217',
      pierre:'#e03757'
    },
    extend: {
      margin: {
        'center': '25vh',
      },
    },
  },
  plugins: [],
}
