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
      },
    },
  },
  plugins: [],
};
