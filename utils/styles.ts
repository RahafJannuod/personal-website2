export const createGlowTextStyle = (color: string, intensity: 'low' | 'medium' | 'high' = 'medium') => {
  const glowIntensities = {
    low: {
      base: 0.3,
      mid: 0.2,
      light: 0.1
    },
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
      0 0 2px rgba(255,255,255,${base}),
      0 0 4px rgba(255,255,255,${mid}),
      0 0 6px rgba(255,255,255,${light}),
      0 0 10px ${color}aa,
      0 0 14px ${color}88,
      0 0 18px ${color}44
    `
  };
};

export const createLightGlowTextStyle = (color: string) => ({
  color: '#fff',
  textShadow: `0 0 10px ${color}44`
});
