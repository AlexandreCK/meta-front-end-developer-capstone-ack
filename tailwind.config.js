/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        markazi: ['"Markazi Text"', 'serif'],
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        customGreen: '#495E57',
        customYellow: '#F4CE14',
      },
    },
  },
  plugins: [],
}






