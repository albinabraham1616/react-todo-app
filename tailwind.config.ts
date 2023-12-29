/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "register-background": "url('./src/assets/login 1.jpg')",
      },
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
