/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jp: {
          ink: '#0D0D0D',
          charcoal: '#161616',
          stone: '#2C2C2C',
          vermillion: '#B85C4A',
          gold: '#D4A373',
          indigo: '#4A7C7C',
          wasabi: '#6B7D3A',
          tea: '#7C6A4A',
        },
        primary: {
          DEFAULT: '#D4A373',
          light: '#E8CAA3',
          dark: '#BA884F',
        },
        background: {
          dark: '#0D0D0D',
          elevated: '#161616',
          card: '#1E1E1E',
        },
        accent: {
          DEFAULT: '#B85C4A',
          vermillion: '#B85C4A',
          gold: '#D4A373',
          indigo: '#4A7C7C',
          wasabi: '#6B7D3A',
          tea: '#7C6A4A',
        },
        text: {
          primary: '#F0EDE8',
          secondary: '#8A8580',
          muted: '#5E5A56',
        },
        border: {
          DEFAULT: '#2C2C2C',
          light: '#3A3A3A',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2rem, 10.5vw, 11rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(1.75rem, 7.5vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.5rem, 5.5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.25rem, 3.5vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'header-h': '56px',
        'section': 'clamp(5rem, 14vh, 11rem)',
      },
      backgroundImage: {
        'pattern-wave':
          "url(\"data:image/svg+xml,%3Csvg width='60' height='40' viewBox='0 0 60 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 C10 40 20 35 30 25 C40 15 50 10 60 10' stroke='%23D4A373' fill='none' stroke-width='0.4' opacity='0.12'/%3E%3Cpath d='M0 40 C15 40 25 30 30 20 C35 10 50 5 60 5' stroke='%23D4A373' fill='none' stroke-width='0.25' opacity='0.08'/%3E%3Cpath d='M0 40 C8 40 15 25 30 15 C45 5 52 0 60 0' stroke='%23D4A373' fill='none' stroke-width='0.15' opacity='0.05'/%3E%3C/svg%3E\")",
        'pattern-hex':
          "url(\"data:image/svg+xml,%3Csvg width='52' height='60' viewBox='0 0 52 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26 0 L52 15 L52 45 L26 60 L0 45 L0 15 Z' stroke='%23D4A373' fill='none' stroke-width='0.35' opacity='0.08'/%3E%3C/svg%3E\")",
        'pattern-scale':
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 L40 20' stroke='%23D4A373' fill='none' stroke-width='0.3' opacity='0.06'/%3E%3Cpath d='M0 20 L20 40 L40 20' stroke='%23D4A373' fill='none' stroke-width='0.2' opacity='0.04'/%3E%3C/svg%3E\")",
        'pattern-kasumi':
          "repeating-linear-gradient(180deg, transparent 0px, transparent 18px, rgba(212,163,115,0.04) 18px, rgba(212,163,115,0.04) 19px, transparent 19px, transparent 40px)",
        'pattern-shoji':
          "repeating-linear-gradient(0deg, transparent 0px, transparent 29px, rgba(212,163,115,0.035) 29px, rgba(212,163,115,0.035) 30px), repeating-linear-gradient(90deg, transparent 0px, transparent 29px, rgba(212,163,115,0.035) 29px, rgba(212,163,115,0.035) 30px)",
      },
      backgroundSize: {
        'wave': '60px 40px',
        'hex': '52px 60px',
        'scale': '40px 40px',
        'kasumi': '100% 40px',
        'shoji': '30px 30px',
      },
      boxShadow: {
        'card': '0 2px 20px -4px rgba(0,0,0,0.5)',
        'elevated': '0 25px 80px -25px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
}
