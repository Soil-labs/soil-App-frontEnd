module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soilGreen: {
          50: "#ACCEA0",
          100: "#268A02",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
