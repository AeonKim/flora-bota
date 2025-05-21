/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#7D9D74',
          light: '#9CAF94',
          lighter: '#BFD2B8',
          lightest: '#E6F0E1',
        },
        lavender: {
          DEFAULT: '#8A7BB0',
          light: '#A79BC2',
          lighter: '#C5BCD8',
          lightest: '#E8E4F2',
        },
        gold: {
          DEFAULT: '#C7A95F',
          light: '#D6BF85',
          lighter: '#E6D8B2',
          lightest: '#F5EDDA',
        },
        terracotta: {
          DEFAULT: '#BE6A5A',
          light: '#CD8A7D',
          lighter: '#DFABA1',
          lightest: '#F2D8D4',
        },
        ivory: '#FFFEF9',
        cream: '#F9F6EF',
        charcoal: '#3A3A3A',
        'charcoal-light': '#5A5A5A',
        white: '#FFFFFF',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'elegant': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'button': '0 3px 8px rgba(0, 0, 0, 0.12)',
        'hover': '0 12px 35px rgba(0, 0, 0, 0.13)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 