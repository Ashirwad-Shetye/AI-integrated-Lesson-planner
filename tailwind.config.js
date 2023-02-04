/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboMono: "Roboto Mono, monospace",
        roboSlab: "Roboto Slab, serif",
        yeseva: "Yeseva One, cursiv",
        dance: "Dancing Script, cursive",
      },
    },
  },
  plugins: [],
};
