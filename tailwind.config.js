/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      jet: 'hsl(0, 0%, 22%)' ,
      customBg: 'hsl(240, 2%, 12%)',
    },},
  },
  plugins: [],
}