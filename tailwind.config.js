/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Merienda', 'cursive'],
        body: ['Walter Turncoat', 'cursive']
      },
      keyframes: {
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #D43241, 0 0 30px #D43241' },
          '33%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00AC95, 0 0 30px #00AC95' },
          '66%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #F25F67, 0 0 30px #F25F67' },
        },
      },
      animation: {
        'text-glow': 'text-glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
