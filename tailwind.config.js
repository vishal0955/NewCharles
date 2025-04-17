/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto",  "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [],
};
