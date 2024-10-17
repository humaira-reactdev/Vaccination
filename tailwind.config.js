/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'brandColor': "#17C2EC"

      } 
    },
    container: {
      center: true
    },
    fontFamily:{
      'montserrat': ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}