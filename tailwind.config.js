/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        surface: {
          900: '#070b16',
          800: '#0c1324',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(59, 130, 246, 0.25)',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent 30%), radial-gradient(circle at 80% 10%, rgba(139,92,246,0.16), transparent 26%), radial-gradient(circle at 50% 85%, rgba(6,182,212,0.14), transparent 30%)',
      },
    },
  },
  plugins: [],
};
