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
          50: '#f9f6f3',
          100: '#f2ebe5',
          200: '#e6d5c8',
          300: '#d6b9a5',
          400: '#c59b81',
          500: '#b07e62',
          600: '#96644a',
          700: '#7d503a',
          800: '#664132',
          900: '#54362b',
        },
        sage: {
          50: '#f2f7f4',
          100: '#e1ede6',
          200: '#c2dccb',
          300: '#9bc4aa',
          400: '#76a88a',
          500: '#588c6e',
          600: '#447056',
          700: '#375a46',
          800: '#2e4839',
          900: '#273c30',
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
