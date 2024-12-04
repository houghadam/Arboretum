/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind")
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "wsu-purple": "#4B08A1",
        "wsu-purple-dark": "#3C0680",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
