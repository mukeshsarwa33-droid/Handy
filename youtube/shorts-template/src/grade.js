// Grading presets built on color-harmony ideas (original palettes, not copied from any course).
// contrast/saturate/brightness shape the look; tint adds a warm highlight over a cool shadow.
export const PRESETS = {
  // Complementary: warm accent light against a cool environment.
  warmCool: {
    bg: 'radial-gradient(circle at 32% 38%, #ff9300 0%, #c2410c 18%, #1d3557 62%, #0b1d33 100%)',
    base: '#0b1d33',
    highlight: '#ff9300',
    shadow: '#1d4e89',
    tintOpacity: 0.35,
    contrast: 1.15,
    saturate: 1.2,
    brightness: 1.0,
    text: '#ffffff',
    accent: '#ffb347',
  },
  // Analogous: neighboring hues in one family for a calm, cohesive look.
  analogous: {
    bg: 'radial-gradient(circle at 50% 40%, #f4a261 0%, #e76f51 35%, #9d4a2a 75%, #3d1f12 100%)',
    base: '#3d1f12',
    highlight: '#ffd27a',
    shadow: '#5a2a15',
    tintOpacity: 0.25,
    contrast: 1.08,
    saturate: 1.1,
    brightness: 1.02,
    text: '#fff6ea',
    accent: '#ffd27a',
  },
  // Monochrome: one hue, varied only by lightness. Good for tense or somber tones.
  monochrome: {
    bg: 'radial-gradient(circle at 50% 40%, #7aa2c4 0%, #3d5a73 45%, #142534 100%)',
    base: '#142534',
    highlight: '#bcd7ea',
    shadow: '#0a1620',
    tintOpacity: 0.2,
    contrast: 1.25,
    saturate: 0.6,
    brightness: 0.95,
    text: '#eef6fb',
    accent: '#bcd7ea',
  },
};
