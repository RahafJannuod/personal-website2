// Common styles and animations
export const animations = {
  letterReveal: {
    keyframes: `
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.8) skewY(10deg);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1) skewY(0);
      }
    `,
    duration: '0.6s',
    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
  },
  
  textGlow: {
    keyframes: `
      0%, 100% {
        text-shadow:
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 20px #D43241,
          0 0 30px #D43241;
      }
      33% {
        text-shadow:
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 20px #00AC95,
          0 0 30px #00AC95;
      }
      66% {
        text-shadow:
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 20px #F25F67,
          0 0 30px #F25F67;
      }
    `,
    duration: '6s',
    easing: 'ease-in-out'
  },

  fadeInUp: {
    keyframes: `
      from {
        opacity: 0;
        transform: translateY(25px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    duration: '0.8s',
    easing: 'ease-out'
  }
};

export const scrollbarStyles = (accentColor: string) => `
  ::-webkit-scrollbar { height: 8px; }
  ::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
  ::-webkit-scrollbar-thumb { background: ${accentColor}; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { filter: brightness(1.2); }
  scrollbar-width: thin;
  scrollbar-color: ${accentColor} rgba(255, 255, 255, 0.1);
`;
