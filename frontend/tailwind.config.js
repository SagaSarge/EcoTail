/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors
        bermuda: {
          DEFAULT: '#7DD8C6',
          dark: '#5EBAA8',
          light: '#A5E4D7',
        },
        'dark-jungle': {
          DEFAULT: '#1A2421',
          light: '#2C3B36',
          dark: '#0F1614',
        },
        'greyish-turquoise': {
          DEFAULT: '#5E7D7E',
          light: '#8FA7A8',
          dark: '#3E5253',
        },
        'sherwood': {
          DEFAULT: '#02402C',
          light: '#035C3F',
          dark: '#012419',
        },
        
        // Additional Colors
        cream: {
          DEFAULT: '#F7F4EC',
          dark: '#E5E0D4',
          light: '#FFFDF8',
        },
        'soft-gold': {
          DEFAULT: '#FFC466',
          dark: '#FFB133',
          light: '#FFD799',
        },
        coral: {
          DEFAULT: '#FF7B5A',
          dark: '#FF5C33',
          light: '#FF9A81',
        },
      },
      
      backgroundColor: {
        primary: {
          DEFAULT: '#FFFFFF',
          dark: '#1A2421',
        },
        secondary: {
          DEFAULT: '#F7F4EC',
          dark: '#2C3B36',
        },
      },
      
      textColor: {
        primary: {
          DEFAULT: '#1A2421',
          dark: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#5E7D7E',
          dark: '#8FA7A8',
        },
        accent: {
          DEFAULT: '#02402C',
          dark: '#7DD8C6',
        },
      },
      
      borderColor: {
        primary: {
          DEFAULT: '#E5E0D4',
          dark: '#2C3B36',
        },
      },
      
      gradientColorStops: {
        'gradient-start': 'rgba(125, 216, 198, 0.1)',
        'gradient-end': 'rgba(94, 125, 126, 0.1)',
      },
      
      boxShadow: {
        sm: '0 1px 2px rgba(26, 36, 33, 0.05)',
        DEFAULT: '0 4px 6px rgba(26, 36, 33, 0.1)',
        lg: '0 10px 15px rgba(26, 36, 33, 0.1)',
        dark: {
          sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
          DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.25)',
          lg: '0 10px 15px rgba(0, 0, 0, 0.35)',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      
      borderRadius: {
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      
      transitionDuration: {
        DEFAULT: '300ms',
      },
      
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

