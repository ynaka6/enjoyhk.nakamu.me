/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff4646',
        twitter: '#38A1F3',
        instagram: '#000',
        feedly: '#2bb24c',
      },
    },
  },
  plugins: [],
};
