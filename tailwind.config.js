const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

const { withTV } = require('tailwind-variants/transformer')

module.exports = withTV({
  mode: 'jit',
  darkMode: 'class',
  content: [
    './app/*.{js,jsx,ts,tsx,css}',
    './app/**/*.{js,jsx,ts,tsx,css}',
    './pages/**/*.{js,jsx,ts,tsx,css}',
    './layouts/**/*.{js,jsx,ts,tsx,css}',
    './components/**/*.{js,jsx,ts,tsx,css}',
    './helpers/**/*.{js,jsx,ts,tsx,css}',
    './contexts/**/*.{js,jsx,ts,tsx,css}',
    './styles/**/*.{js,jsx,ts,tsx,css}',
  ],
  corePlugins: {
    container: false,
    transitionDelay: false,
  },
  theme: {
    colors: {
      current: {
        DEFAULT: 'currentColor',
        hover: 'var(--color-on-hover)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          text: 'var(--color-accent-text)',
        },
        input: {
          background: 'var(--color-input-background)',
          border: 'var(--color-input-border)',
          placeholder: 'var(--color-input-placeholder)',
          text: 'var(--color-input-text)',
        },
      },
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      offwhite: '#F5F3E6',
      gold: '#D4B451',
      gray: {
        lightness: '#F2F2F2',
        light: '#E2E4E8',
        medium: '#D0D3D6',
        dark: '#A2A7AA',
      },
      blue: {
        DEFAULT: '#005670',
        navy: '#062F43',
        dark: '#03151E',
      },
      orange: '#FE5000',
      danger: '#FFD600',
      error: '#E90016',
      success: '#00AB27',
    },
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      '1.5lg': '1152px',
      xl: '1280px',
      '1.5xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-red-hat-display)', ...fontFamily.sans],
        serif: ['var(--font-pp-eiko-medium)', ...fontFamily.serif],
      },
      fontSize: {
        '2.5xl': '1.625rem',
        '5.5xl': '3.25rem',
        '6.5xl': '4rem',
        '7.5xl': '5rem',
      },
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
        1400: '1400ms',
        1600: '1600ms',
        1800: '1800ms',
        2000: '2000ms',
        2200: '2200ms',
        2400: '2400ms',
        2600: '2600ms',
        2800: '2800ms',
        3000: '3000ms',
        3200: '3200ms',
        3400: '3400ms',
        3600: '3600ms',
        3800: '3800ms',
        4000: '4000ms',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0, 0, 0.4, 1)',
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
  },
  safelist: [
    'animation-visible',
    'animation-content',
    'opacity-only',
    {
      pattern: /delay-/,
      variants: ['md'],
    },
    'bg-blue',
    'bg-blue-dark',
    'bg-blue-navy',
  ],
  plugins: [
    plugin(function ({ addVariant, matchUtilities, theme }) {
      addVariant('group-active', () => {
        return `:merge(.group).active &`
      })
      addVariant('control-active', '.control-active &')
      addVariant('current-active', '&.current-active')
      matchUtilities(
        {
          delay: (value) => ({ animationDelay: value, transitionDelay: value }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
})
