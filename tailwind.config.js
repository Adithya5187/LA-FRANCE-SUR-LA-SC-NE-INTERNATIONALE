/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071426', // Deep midnight navy
          900: '#0B1B33',
          850: '#10233F', // Dark navy
          800: '#183159',
          700: '#244B85', // French blue
        },
        french: {
          blue: '#244B85',
          navy: '#071426',
          red: '#D62839',
          gold: '#E5C158',
          mint: '#34D399',
          ivory: '#F3F0E9',
        }
      },
      fontFamily: {
        broadway: ['var(--font-heading)', 'Broadway', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

