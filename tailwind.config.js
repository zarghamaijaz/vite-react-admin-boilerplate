/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black:{
          DEFAULT: '#000000',
          200: 'var(--black-200)',
          300: 'var(--black-300)',
        },
        background: "var(--background)",
        text: "var(--text)",
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          50: 'var(--secondary-50)',
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)',
          50: 'var(--secondary-50)',
        },
      },
    },
  },
  plugins: [],
}

