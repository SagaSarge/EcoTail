export const theme = {
  colors: {
    // Primary Colors
    bermuda: '#7DD8C6',
    darkJungleGreen: '#1A2421',
    greyishTurquoise: '#5E7D7E',
    sherwoodGreen: '#02402C',
    
    // Additional Colors
    cream: '#F7F4EC',
    softGold: '#FFC466',
    coral: '#FF7B5A',
    
    // Functional Colors
    success: '#7DD8C6',
    warning: '#FFC466',
    error: '#FF7B5A',
    
    // Background Colors
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F7F4EC',
    bgGradientStart: 'rgba(125, 216, 198, 0.1)', // Bermuda 10%
    bgGradientEnd: 'rgba(94, 125, 126, 0.1)', // Greyish Turquoise 10%
  },
  
  text: {
    primary: '#1A2421',
    secondary: '#5E7D7E',
    accent: '#02402C',
    light: '#FFFFFF',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(26, 36, 33, 0.05)',
    md: '0 4px 6px rgba(26, 36, 33, 0.1)',
    lg: '0 10px 15px rgba(26, 36, 33, 0.1)',
  },
  
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, rgba(125, 216, 198, 0.1) 0%, rgba(94, 125, 126, 0.1) 100%)',
    accent: 'linear-gradient(135deg, #7DD8C6 0%, #02402C 100%)',
  },
  
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
} as const

// Utility types
export type ThemeColors = keyof typeof theme.colors
export type ThemeTextColors = keyof typeof theme.text
export type ThemeShadows = keyof typeof theme.shadows
export type ThemeTransitions = keyof typeof theme.transitions
export type ThemeGradients = keyof typeof theme.gradients
export type ThemeBorderRadius = keyof typeof theme.borderRadius 