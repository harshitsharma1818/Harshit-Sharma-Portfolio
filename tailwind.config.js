/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        theme: {
          bg: '#080B12',
          surface: '#101521',
          primary: '#EDF0F5',
          secondary: '#A1A9B7',
          plum: '#8B78B8',
          lavender: '#B7A6DC',
          champagne: '#D8C7A5',
          bronze: '#C4B28C',
        },
        champagne: {
          50: '#FBF9F5',
          100: '#F5F1E9',
          200: '#EBE3D3',
          300: '#DFCFAE',
          400: '#D8C7A5',
          500: '#C4B28C',
          600: '#A9946B',
          700: '#8A7550',
          800: '#6C5A3C',
          900: '#4D3F28',
          DEFAULT: '#D8C7A5',
        },
        midnight: {
          950: '#080B12',
          900: '#101521',
          800: '#151C2C',
          700: '#1D253A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        signature: ['Allura', 'cursive'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-lavender': '0 0 25px -4px rgba(183, 166, 220, 0.25)',
        'glow-plum': '0 0 25px -4px rgba(139, 120, 184, 0.25)',
      },
    },
  },
  plugins: [],
}
