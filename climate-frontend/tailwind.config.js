/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg}",  // Adjust this path if your files are in a different folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgIMG': "url('./components/pictures/background.jpg')"
      }
    },
  },
  plugins: [],
}
