/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      Color: {
        primarey: {
          600: "#374151",
          500: "#000000e0",
          400: "#00000073",
          300: "#e5e7eb",
        },
      },
    },
  },
  plugins: [],
};
