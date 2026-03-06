/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F25C5C",
        secondary: "#FF8A8A",
        accent: "#FFE5E5",
      }
    },
  },
  plugins: [],
}
