/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0d59f2",
        "dark-bg": "#06181b", 
        "panel-bg": "#1B2A3D",
        "background-light": "#f5f6f8",
        "background-dark": "#101622",
        "inner-bg": "#22364f",
        "success": "#10b981",
        "danger": "#ff4d4d",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"],
        "sans": ["Inter", "sans-serif"], 
      },
      keyframes: {
        flow: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(40px)' },
        }
      },
      animation: {
        flow: 'flow 1.5s linear infinite',
      }
    },
  },
  plugins: [],
}
