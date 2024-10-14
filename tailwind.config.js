/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          background: '#1D1D1D',
          primary: '#EAE0D5',
          secondary: '#C6AC8E',
          navbar: '#22333D',
        },
      },
    },
    plugins: [],
  };