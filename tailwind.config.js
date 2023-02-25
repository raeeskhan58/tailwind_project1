/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
     sm:'480px',
     md:'768px',
     lg:'976px',
     xl:'1440px'
    },
    extend: {
      colors:{
        brightRed:'hsl(12,88%,59%)',
        brightRedLight:'hsl(12,88%,69%)',
        brightRedSupLight:'hsl(12,88%,95%)',
        darkGrayisBlue:'hsl(227,12%,61%)',
        veryDarkBlue:'hsl(223,12%,13%)',
        veryPaleRed:'hsl(13,100%,96%)',
        verLightGray:'hsl(98,0,0)'
      }
    },
  },
  plugins: [],
}
