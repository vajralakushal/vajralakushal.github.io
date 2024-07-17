// tailwind.config.ts
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  // tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      accent: '#e3342f',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
},

  plugins: [],
};

export default config;
