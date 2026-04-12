/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure Tailwind scans all your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",     // deep blue
        secondary: "#3b82f6",   // sky blue
        light: "#f3f4f6",       // light gray
      },
    },
  },
  plugins: [],
}