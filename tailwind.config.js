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
      colors: {
        // soilGreen: {
        //   10: "#F0F7E9",
        //   20: "#E1EFD3",
        //   50: "#ACCEA0",
        //   70: "#6BAF22",
        //   100: "#268A02",
        // },
        soilGreen: "#74FA6D",
        soilGray:{
          200: "#F3F3F3"
        },
        bgGrey: "#F1F6F7",
        gradientBlue: "#D900A9",
        gradientViolet: "#004AD9",
      },
      opacity: ['disabled'],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
