/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#053149',
        accent: {
          tech: '#00AC95',
          music: '#D43241',
          crafts: '#F25F67',
          navHover: '#FB8D3E'
        }
      },
      fontFamily: {
        heading: ['Merienda', 'cursive'],
        body: ['Walter Turncoat', 'cursive']
      },
      animation: {
        'letter-reveal': 'letter-reveal 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards',
        'text-glow': 'text-glow 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
}
