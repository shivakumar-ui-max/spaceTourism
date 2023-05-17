/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '1440px'
    },
    extend: {
      colors: {
        'text': "#D0D6f9",
        'bl': '#0b0D17',
        'hr': '#383B4B',
        'mix': '#0B0d17',
      },
      fontFamily: {
        'Barlow': "Barlow Condensed, sans-serif",
        'Bellefair': "Bellefair, serif",
      },
      backgroundImage: {
        'bg-mobile': "url('./assets/home/bgmobile.jpg')",
        'bg-tablet': "url('./assets/home/bgtablet.jpg')",
        'bg-laptop': "url('./assets/home/bglaptop.jpg')",
        'destination-mobile': "url('/public/destination/bgdestination-mobile.jpg')",
        'destination-tablet': " url('/public/destination/bgdestination-tablet.jpg')",
        'destination-laptop': "url('/public/destination/bgdestination-desktop.jpg')",
        'bgcrew-mobile': "url('/public/crew/bgcrew-mobile.jpg')",
        'bgcrew-tablet': "url('/public/crew/bgcrew-tablet.jpg')",
        'bgcrew-laptop': "url('/public/crew/bgcrew-desktop.jpg')",
        'bgt-mobile': "url('/public/technology/bgt-mobile.jpg')",
        'bgt-tablet': "url('/public/technology/bgt-tablet.jpg')",
        'bgt-laptop': "url('/public/technology/bgt-desktop.jpg')",

      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      }


    },
  },
  plugins: [],
}
