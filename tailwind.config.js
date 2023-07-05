/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {backgroundImage: {
      'cdc-bg': "url('./assets/cdc-background.png')"
    }},
  },
  plugins: [],
}
