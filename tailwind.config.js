/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        malstein: {
          bgPrimary: '#FAFAFA',      /* Ultra clean off-white */
          bgSecondary: '#F3F4F6',    /* Soft gray for cards/sections */
          accent: '#A67C52',         /* Elegant muted copper/gold */
          text: '#111827',           /* Almost black for huge contrast */
          surface: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0,0,0,0.05)',
        'glass': '0 8px 32px 0 rgba(0,0,0,0.08)',
        'hover': '0 30px 60px -15px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}

