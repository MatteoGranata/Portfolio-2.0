/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotateY: {
        17: '17deg'
      }
    }
  },
  plugins: []
}
