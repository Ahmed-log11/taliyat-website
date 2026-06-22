/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand identity — مؤسسة التاليات. Reference tokens, never raw hex.
        primary: {
          DEFAULT: '#205040', // deep green (logo wordmark)
          dark: '#163a2e',    // darker green for gradients / hover
          light: '#2f6b54',   // lighter green for accents
        },
        gold: {
          DEFAULT: '#C0A050', // brand gold (petals, dividers)
          dark: '#A08030',    // deeper gold for hover
          light: '#d8c07f',
        },
        sand: '#E9DEC2',      // soft gold tint (license pill, backgrounds)
        ink: '#1f2a26',       // body text
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
