/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      screens: {
        'sm': '768px',        
        'lg': '1024px',      
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.blue,
      dot: '#14121c',
    },
  },
  plugins: [],
};