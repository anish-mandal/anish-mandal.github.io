/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ["Petit Formal Script", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
