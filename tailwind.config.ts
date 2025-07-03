/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#001617",
        white: "#fff",
        silver: "#c2c2c2",
        darkslategray: {
          "100": "#464646",
          "200": "#00585e",
        },
      },
      fontFamily: {
        "plus-jakarta-sans": "Plus Jakarta Sans",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
