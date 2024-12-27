/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   colors: {
    "navbar-light": "#FFF0DC",
    header: "#543A14",
    body: "#F0BB78",
   },
   fontFamily: {
    "lobster-brand": ["Lobster", "serif"],
    "Poppins": ["Poppins", "serif"],
    "Kaushan-Script": ["Kaushan Script", "serif"],
    "Quicksand": ["Quicksand", "serif"],
    "Nunito": ["Nunito", "serif"],
    "Roboto-Slab": ["Roboto Slab", "serif"],
   },
  },
 },
 plugins: [],
};
