import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf6f3',
          100: '#f4ebe4',
          200: '#e8d4c4',
          300: '#d9b89e',
          400: '#c99876',
          500: '#b67d5a',
          600: '#845235',
          700: '#6b4229',
          800: '#593725',
          900: '#4a2f20',
        },
        sage: {
          50: '#f9f7f4',
          100: '#f0ece6',
          200: '#dfd5c9',
          300: '#c9b8a6',
          400: '#b09584',
          500: '#9a7c68',
          600: '#7d5e4a',
          700: '#664d3d',
          800: '#564135',
          900: '#49372e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

