/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1110px',
    },
    container: {
      screens: {
        tablet: '768px',
        desktop: '1110px',
      },
    },
    extend: {
      colors: {
        'pr-purple': 'hsl(273, 85%, 13%)',
        'pr-green': 'hsl(150, 100%, 63%)',
        'pr-purple-grayed': 'hsl(271, 12%, 34%)',
        'pr-davys-gray': 'hsla(271, 12%, 34%, 1)',
        'sr-dark-purple': 'hsla(273, 85%, 13%, 1)',
        'sr-ghost-white': 'hsla(274, 100%, 99%, 1)',
        'sr-pink': 'hsl(276, 100%, 99%)',
        'sr-white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        heading: ['Fraunces', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-l': ['80px', '80px'],
        'heading-m': ['56px', '64px'],
        'heading-s': ['32px', '40px'],
        body: ['18px', '32px'],
      },
    },
  },
  plugins: [],
};
