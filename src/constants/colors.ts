/**
 * Color constants for the application
 * Centralized color definitions for consistency
 */

export const COLORS = {
  // Primary colors
  black: '#0a0a0a',
  darkGray: '#171717',
  white: '#ffffff',
  
  // Text colors
  textPrimary: '#0a0a0a',
  textSecondary: '#737373',
  textInverse: '#fafafa',
  
  // Background colors
  bgPrimary: '#ffffff',
  bgSecondary: '#fafafa',
  bgTertiary: '#f5f5f5',
  bgQuaternary: '#e5e5e5',
  
  // Border colors
  borderDefault: '#e5e5e5',
  borderHover: '#a3a3a3',
  borderFocus: '#a3a3a3',
  
  // Error colors
  error: '#dc2626',
  errorLight: 'rgba(220, 38, 38, 0.5)',
  
  // Overlay colors
  overlay: '#0a0a0a',
  overlayOpacity: 0.3,
  
  // Shadow colors
  shadowDefault: 'rgba(10, 13, 18, 0.06)',
  shadowHover: 'rgba(10, 13, 18, 0.08)',
  focusRing: 'rgba(163, 163, 163, 0.5)',
} as const

export type ColorKey = keyof typeof COLORS

