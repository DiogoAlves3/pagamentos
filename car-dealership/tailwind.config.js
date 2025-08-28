module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e50914", // red accent
        },
        dark: "#0e0e0e",
        gray: {
          100: "#f5f5f5",
          900: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};