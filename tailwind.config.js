/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0812',
          900: '#120f1d',
          800: '#1a1628',
          700: '#221d35',
          600: '#2d2644',
        },
        accent: {
          pink: '#ff5ea8',
          cyan: '#4ed8ff',
          lime: '#c3ff6b',
          amber: '#ffd166',
        },
        groove: {
          300: '#b69cff',
          400: '#9a7cff',
          500: '#7c5cff',
          600: '#5e3df0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -15px var(--glow, rgba(124,92,255,0.6))',
        card: '0 30px 60px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        pop: '0 8px 0 0 rgba(0,0,0,0.25), 0 18px 40px -10px rgba(0,0,0,0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'eq-1': 'eq 1s ease-in-out infinite',
        'eq-2': 'eq 1.3s ease-in-out infinite',
        'eq-3': 'eq 0.85s ease-in-out infinite',
        'eq-4': 'eq 1.15s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
        'blob-a': 'blobMove 18s ease-in-out infinite',
        'blob-b': 'blobMove 22s ease-in-out infinite reverse',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,-14px,0) rotate(3deg)' },
        },
        eq: {
          '0%,100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blobMove: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(40px,-30px) scale(1.15)' },
        },
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
      },
    },
  },
  plugins: [],
};
