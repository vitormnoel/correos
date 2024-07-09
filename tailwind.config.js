/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/*.{jsx,tsx}",
    "./src/app/**/*.{jsx,tsx}",
    "./src/app/**/**/*.{jsx,tsx},",
    "./src/components/*.{jsx,tsx}",
    "./src/components/**/*.{jsx,tsx}",
  ],
  theme: {
   
    extend: {},
  },
  plugins: [],
};
