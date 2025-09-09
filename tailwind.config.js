/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        "3xl": "4rem",
        "2xl": "3rem",
        xl: "2rem",
        DEFAULT: "15px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#78040A",
        secondary: "#FF671A",
        tertiary: "#FDB713",
        complementary: "#E92300",
        light: "#FBEADE",
      },
    },
  },
  plugins: [],
};
