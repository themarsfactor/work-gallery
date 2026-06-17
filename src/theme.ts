// src/theme.ts
// Centralized theme object for consistent color usage across the app
// Extend this with spacing, typography, etc. as needed

export const theme = {
  colors: {
    // Primary Colors
    background: '#111214', // Main background
    accent: '#2970FF',     // Primary blue accent
    white: '#FFFFFF',      // Main text and headings

    // Secondary Colors
    lightGray: '#C7C9D1',  // Secondary text
    mediumGray: '#232428', // Card backgrounds, nav, borders
    softGray: '#A1A1AA',   // Subtle text, icons
    purple: '#7B61FF',     // Badges, tags
    green: '#1ED760',      // Success, tags
    yellow: '#FFD600',     // Highlights, emoji
    lightBlue: '#60A5FA',  // Secondary blue
    border: '#23262B',     // Borders, dividers
  },
} as const;

export type Theme = typeof theme;
