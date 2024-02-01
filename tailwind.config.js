/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "Strong":"#646cffaa",
        "fred":"rgb(255, 63, 63)",
        "fblue":"rgb(37, 37, 255)",
        "fgreen":"rgb(3, 230, 3)"
      },
      backgroundColor:{
        "bgLine":"#646cff",
        hero:"#050816",
        "card-child":"#090325",
        card:"#151030",
        "card2":"#100d25",
        whiteColor:"#f3f3f3"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        contact:"0px 31.5px 108px -13.5px #211e35"
      },
      screens: {
        "wide": "1440px"
      },
      backgroundImage:{
        "content":"url(./assets/img/herobg.png)"
      },
      animation:{
        "Navbar":"Navbar .3s linear",
        "Border":"Border .3s linear",
        LeftScroll:"LeftScroll .3s linear"
      },
      borderColor:{
        lineColor:"#646cffaa",
        "hero":"#050816"
      },
      dropShadow:{
        "ImgShadow":"#211e35 0px 10px 5px"
      }
    },
  },
  plugins: [],
}
