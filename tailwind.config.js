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
      backgroundImage: {
        onion: "url('/public/vercel.svg')",
      },
      dropShadow: {
        "button-shadow": "0px 1px 15px rgba(0, 0, 0, 0.1)",
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
          300: "#B4B4B4",
          400: "#BCBCBC",
        },
        bgGrey: "#F1F6F7",
        gradientBlue: "#D900A9",
        gradientViolet: "#004AD9",
      },
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
