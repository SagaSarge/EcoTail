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
        'eco-primary': '#7DD8C6',
        'eco-secondary': '#02402C',
        'eco-neutral': '#5E7D7E',
        'eco-dark-bg': '#1A2421',
        'eco-light-bg': '#F7F4EC',
        'eco-cta-orange': '#FF9800',
        
        // Existing color palette
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
      },
      
      fontSize: {
        'hero-heading': '5.5rem',
        'hero-subheading': '1.5rem',
      },
      
      backgroundImage: {
        'particles': `
          radial-gradient(circle at 50% 50%, var(--eco-primary) 1px, transparent 1px),
          radial-gradient(circle at 0% 0%, var(--eco-primary) 1px, transparent 1px)
        `,
      },
      
      backgroundSize: {
        'particles': '40px 40px',
      },
      
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            backgroundPosition: '0% 0%',
          },
          '25%': {
            transform: 'translateY(-2px) translateX(2px)',
            backgroundPosition: '25% 25%',
          },
          '50%': {
            transform: 'translateY(-4px) translateX(-2px)',
            backgroundPosition: '50% 50%',
          },
          '75%': {
            transform: 'translateY(-2px) translateX(2px)',
            backgroundPosition: '75% 75%',
          }
        }
      },
      
      animation: {
        'particle-float': 'float 20s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function({ addBase, addUtilities }) {
      addBase({
        ':root': {
          '--eco-primary': '#7DD8C6',
          '--eco-secondary': '#02402C',
        },
      });
      
      addUtilities({
        '.bg-eco-particles': {
          'position': 'relative',
          'background-color': 'white',
          'overflow': 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, var(--eco-primary) 0.5px, transparent 0.5px),
              radial-gradient(circle at 0% 0%, var(--eco-primary) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '40px 40px',
            opacity: '0.15',
            animation: 'float 20s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: '0',
          }
        },
      });
    }
  ],
}

