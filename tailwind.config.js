/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 10px 32px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        customBlue: '#1E3A8A', // Custom color name and value
        customRed: '#ff6347',
        customRedhover: '#ff4500',
      },
    },
  },
  plugins: [],
}

