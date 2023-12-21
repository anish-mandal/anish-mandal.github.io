/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        general: ["General Sans", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
