/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      myBlue:'#181e40',
      scoreC:'#4f5dae',
      whiteC:'#f7f7f7',
      borderS:'#576780',
      scoreVC:'#514e61',
      feuille: '#4c65f4',
      ciseaux:'#eba217',
      pierre:'#e03757',
      green:'#16a34a',
      cyan:'#22d3ee'
    },
    extend: {
      backgroundImage:{
        'myBack': "radial-gradient(circle, rgba(31,56,87,1) 0%, rgba(19,22,57,1) 75%);",
      },
      margin: {
        'center': '25vh',
      },
      boxShadow:{
        'iconeF':'inset -0.5px 6px 2px 1px rgb(186,189,208,255), 0 10px 1px 1px #2846c1',
        'iconeC':'inset -0.5px 6px 2px 1px rgb(186,189,208,255), 0 10px 1px 1px #c66d1b',
        'iconeP':'inset -0.5px 6px 2px 1px rgb(186,189,208,255), 0 10px 1px 1px #991633',

      }
    },
  },
  plugins: [],
}
