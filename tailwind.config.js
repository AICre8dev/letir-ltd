/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0f1f3d',
          900: '#0a1628',
          950: '#060f1d',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#a4cffd',
          400: '#78b3fb',
          500: '#5294f7',
          600: '#3d75ed',
          700: '#2f5fc4',
          800: '#284e9e',
          900: '#25437d',
          950: '#1a2c4d',
        },
      },
    },
  },
  plugins: [],
};
