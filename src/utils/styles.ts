// Strong white and accent glow, for section titles and headings
export const createGlowTextStyle = (color: string, intensity: 'medium' | 'high' = 'medium') => {
  const glowIntensities = {
    medium: {
      base: 0.7,
      mid: 0.5,
      light: 0.3
    },
    high: {
      base: 0.9,
      mid: 0.7,
      light: 0.5
    }
  };

  const { base, mid, light } = glowIntensities[intensity];

  return {
    color: '#fff',
    textShadow: `
      0 0 8px rgba(0,0,0,0.8),
      0 2px 4px rgba(0,0,0,0.6),
      0 0 2px rgba(255,255,255,${base}),
      0 0 4px rgba(255,255,255,${mid}),
      0 0 6px rgba(255,255,255,${light}),
      0 0 10px ${color}aa,
      0 0 14px ${color}88,
      0 0 18px ${color}44
    `
  };
};

// Sharp white text with only a faint accent glow, for text over busy photos
export const createCrispTextStyle = (color: string) => ({
  color: '#fff',
  textShadow: `
    0 1px 2px rgba(0,0,0,0.9),
    0 0 6px rgba(0,0,0,0.5),
    0 0 14px ${color}66
  `
});

// For names highlighted inside a block of text
export const createAccentGlowTextStyle = (color: string) => ({
  color: '#fff',
  textShadow: `
    0 0 2px rgba(255,255,255,.7),
    0 0 4px ${color}aa,
    0 0 6px ${color}88
  `
});

// Softer glow, for body text inside the sections
export const createLightGlowTextStyle = (color: string) => ({
  color: '#fff',
  textShadow: `
    0 0 8px rgba(0,0,0,0.8),
    0 2px 4px rgba(0,0,0,0.6),
    0 0 10px ${color}44,
    0 0 15px ${color}33
  `
});
