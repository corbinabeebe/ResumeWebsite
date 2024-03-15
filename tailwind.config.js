/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["dark", "light", "cupcake", "acid", "dracula"]
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui")],
}