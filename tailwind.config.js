/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Playfair Display', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
