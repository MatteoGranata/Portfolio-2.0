/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        20: 'repeat(20, minmax(0, 1fr))',
        40: 'repeat(40, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        // Simple 16 row grid
        20: 'repeat(20, minmax(0, 1fr))',
        40: 'repeat(40, minmax(0, 1fr))'
      },
      rotateY: {
        17: '17deg'
      }
    }
  },
  plugins: []
}
