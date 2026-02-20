/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        wine:        '#722F37',
        'wine-dark': '#5a2329',
        gold:        '#C9A84C',
        'gold-light':'#e0bb72',
        cream:       '#FDF6EC',
        'cream-dark':'#f0e4d0',
        brown:       '#2C1810',
        'brown-mid': '#3d2216',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['Lato', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
