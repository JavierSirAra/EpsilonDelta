/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "content/**/*.md",
    "./layouts/**/*.html", // <--- ¡LA LÍNEA MÁGICA!
    "./themes/pehtheme-hugo/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#415a77',      // Tu color principal (ej. azul para enlaces, botones)
        'secondary': '#CDD5E0',    // Tu color secundario (ej. gris para texto sutil)
        'accent': '#FFE66D',       // Un color de acento (ej. amarillo para avisos)
        'base-text': '#000000',   // El color del texto principal (ej. negro o gris oscuro)
        'base-bg': '#F9F8F8',      // El color del fondo principal (ej. blanco)
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}