/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import daisyui from 'daisyui';
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Ensure this matches your project structure
  theme: {
    extend: {
      colors: {
        lightGreen: '#9CFD35', // Extend colors here
        lightYellow: '#FAFD35',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'], // Add Dancing Script
      },
    },
  },
  plugins: [
    daisyui,
    tailwindScrollbar({ nocompatible: true }),
  ],
};
