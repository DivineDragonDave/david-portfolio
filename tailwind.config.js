/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "#1D562D": "#AF1A1A",
        "#6B1B1B": "#6B1B1B",
        "#AB0000": "#AB0000",
        "#331A1A": "#331A1A",
        "#00AB30": "#D61A1A",
      },
      spacing: {
        "translate-sm": "100px",
        "translate-md": "150px",
      },
      backgroundImage: {
        "back": "url('/src/assets/Portfolio.webp')",
      },
      animation: {
        rotate: "rotate 4s linear infinite",
      },
      keyframes: {
        rotate: {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
