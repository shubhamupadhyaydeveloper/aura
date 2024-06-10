/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/shared/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
       fontFamily : {
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pblack : ["Poppins-Black","sans-serif"],
        pbold : ["Poppins-Bold","sans-serif"],
        pextroBold : ["Poppins-ExtraBold","sans-serif"],
        pregular : ["Poppins-Regular","sans-serif"]
       },
    },
  },
  plugins: [],
};
