/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow: "0 0 5px 3px white",
      },
      fontFamily: {
        courier: "Courier New",
      },
    },
  },
  plugins: [],
};
