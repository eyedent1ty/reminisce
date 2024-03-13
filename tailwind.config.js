import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDBF60',
        secondary: '#BED1CF',
        tertiary: '#FFF7F1',
        error: '#E78895'
      }
    },
  },
  plugins: [daisyui],
}

