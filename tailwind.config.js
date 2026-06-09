/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#171717',
        light: '#E1DFDD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1536px',
      },
      borderColor: {
        DEFAULT: 'rgba(23,23,23,0.1)',
      },
      borderOpacity: {
        8: '0.08',
      },
    },
  },
  plugins: [],
}
