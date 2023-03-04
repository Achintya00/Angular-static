/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    theme: {
      screens: {
        sm: "500px",
        md: "800px",
        lg: "1200",
        xl: "1440",
      },
    },
  },
  plugins: [],
};
