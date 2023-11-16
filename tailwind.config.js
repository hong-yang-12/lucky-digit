/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat Regular", "Noto Sans Myanmar Regular", "san-serif"],
    },
    extend: {
      fontFamily: {
        heading: [
          "Montserrat Bold",
          "Noto Sans Myanmar Regular",
          "san-serif",
        ],
      },
      // thin: ["Noto Sans Myanmar Thin", "san-serif"],
      // light: ["Noto Sans Myanmar Light", "san-serif"],
      // regular: ["Noto Sans Myanmar Regular", "san-serif"],
      // bold: ["Noto Sans Myanmar Bold", "san-serif"],
      // black: ["Noto Sans Myanmar Black", "san-serif"],
      colors: {
        white: "#fff",
        black: "#000",
        danger: "#DC3545",
      

        //lightmode
        light: "#fef08a", //yellow-200
        darkBg: "#422006", //yellow-950
        dark: "#a16207", //yellow-700
        bg: "#fefce8", //yellow-50
        primary : "#3C50E0",
        // primary: "#eab308", //yellow-500
        secondary: "#6b7280", //gray-500
        bg_secondary: "#f1f5f9",
        accent: "#EFF4FB", //teal-500

        //darkmode
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
