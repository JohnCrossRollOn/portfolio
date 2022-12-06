/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        icon: ['"Material Icons"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
