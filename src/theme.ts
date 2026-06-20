// src/theme.ts
// Centralized theme handling with CSS variable support and light/dark palettes.

const darkPalette = {
  background: '#111214', // Main background
  accent: '#2970FF',     // Primary blue accent
  white: '#FFFFFF',      // Main text and headings (on dark)
  text: '#FFFFFF',
  lightGray: '#C7C9D1',  // Secondary text
  mediumGray: '#232428', // Card backgrounds, nav, borders
  softGray: '#A1A1AA',   // Subtle text, icons
  purple: '#7B61FF',     // Badges, tags
  green: '#1ED760',      // Success, tags
  yellow: '#FFD600',     // Highlights, emoji
  lightBlue: '#60A5FA',  // Secondary blue
  border: '#23262B',     // Borders, dividers
};

const lightPalette = {
  background: '#F9F9FB',
  accent: '#2970FF',
  white: '#FFFFFF', // still useful for accents; primary text will be `text` below
  text: '#111214',
  lightGray: '#666666',
  mediumGray: '#E5E5E7',
  softGray: '#999999',
  purple: '#7B61FF',
  green: '#1ED760',
  yellow: '#FFD600',
  lightBlue: '#60A5FA',
  border: '#D5D5D7',
};

function setCSSVars(palette: Record<string, string>) {
  if (typeof document === 'undefined') return;
  Object.entries(palette).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--color-${key}`, value);
  });
}

export const applyTheme = (mode: 'dark' | 'light') => {
  const palette = mode === 'dark' ? darkPalette : lightPalette;
  setCSSVars({ ...palette });
  try {
    if (typeof localStorage !== 'undefined') localStorage.setItem('site-theme', mode);
  } catch (e) {}
};

// Initialize CSS vars from saved preference or default to light
try {
  const saved = typeof localStorage !== 'undefined' ? (localStorage.getItem('site-theme') as 'dark' | 'light' | null) : null;
  applyTheme(saved === 'dark' ? 'dark' : 'light');
} catch (e) {
  applyTheme('light');
}

// Export a theme object where components reference CSS variables.
export const theme = {
  colors: {
    background: 'var(--color-background)',
    accent: 'var(--color-accent)',
    white: 'var(--color-white)',
    text: 'var(--color-text)',
    lightGray: 'var(--color-lightGray)',
    mediumGray: 'var(--color-mediumGray)',
    softGray: 'var(--color-softGray)',
    purple: 'var(--color-purple)',
    green: 'var(--color-green)',
    yellow: 'var(--color-yellow)',
    lightBlue: 'var(--color-lightBlue)',
    border: 'var(--color-border)',
  },
} as const;

export type Theme = typeof theme;
