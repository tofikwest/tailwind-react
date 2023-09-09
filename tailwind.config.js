/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        showYourLink: "url('./src/app/assets/back-showlink.png')",
      },
    },
  },
  plugins: [],
};
