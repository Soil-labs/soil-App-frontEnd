module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soilShadow: "0px 1px 15px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        onion: "url('/public/vercel.svg')",
      },
      colors: {
        soilGreen: {
          10: "#78EECB",
          20: "#74FA6D",
          50: "#ACCEA0",
          70: "#6BAF22",
          100: "#268A02",
        },
        darkBlackGreen: "#071B08",
        // soilGreen: "#74FA6D",
        soilGray: {
          200: "#F3F3F3",
          400: "#B4B4B4",
          500: "#AAAAAA",
        },
        bgGrey: "#F1F6F7",
        gradientBlue: "#D900A9",
        gradientViolet: "#004AD9",
      },
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
