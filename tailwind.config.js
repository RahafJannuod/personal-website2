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
          '0%, 100%': { textShadow: '0 1px 2px rgba(0,0,0,.9), 0 0 6px rgba(0,0,0,.7), 0 0 16px #D43241' },
          '33%': { textShadow: '0 1px 2px rgba(0,0,0,.9), 0 0 6px rgba(0,0,0,.7), 0 0 16px #00AC95' },
          '66%': { textShadow: '0 1px 2px rgba(0,0,0,.9), 0 0 6px rgba(0,0,0,.7), 0 0 16px #F25F67' },
        },
        'icon-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 0 transparent)', transform: 'scale(1)' },
          '50%': { filter: 'drop-shadow(0 0 6px #fff) drop-shadow(0 0 14px #F25F67)', transform: 'scale(1.2)' },
        },
      },
      animation: {
        'text-glow': 'text-glow 6s ease-in-out infinite',
        'icon-glow': 'icon-glow 1s ease-in-out 3 both',
      },
    },
  },
  plugins: [],
}
