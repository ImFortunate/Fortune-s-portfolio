// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Ensure this path is correct
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["'Sofia Sans'", "sans-serif"], // <-- add custom font
      },
      colors: {
        purple900: "#60269e",
      },
    },
  },
  plugins: [],
};
