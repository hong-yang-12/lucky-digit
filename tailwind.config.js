/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Satoshi Regular", "Padauk Regular", "san-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Satoshi Bold", "Padauk Regular", "san-serif"],
      },

      colors: {
        white: "#fff",
        black: "#000",
        danger: "#DC3545",
        night_active: "#333A48",
        dark_state: "#84868B",
        //lightmode
        light: "#fef08a", //yellow-200
        darkBg: "#422006", //yellow-950
        dark: "#1C2434", //yellow-700
        // bg: "#D1D5DB",
        bg: "#ecfeff",
        primary: "#3C50E0",
        secondary: "#6b7280", //gray-500
        bg_secondary: "#f1f5f9",
        accent: "#EFF4FB", //teal-500

        //darkmode
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
