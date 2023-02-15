/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bcg1': '#060047',
        'frg1': '#B3005E',
        'frg2': '#E90064',
        'frg3': '#FF5F9E',
        'txt1': '#f2f2f2'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}
