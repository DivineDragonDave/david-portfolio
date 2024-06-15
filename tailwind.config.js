/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "#1D562D": "#1D562D",
        "#6B1B1B": "#6B1B1B",
        "#AB0000": "#AB0000",
        "#331A1A": "#331A1A",
        "#00AB30": "#00AB30",
      },
      spacing: {
        "translate-sm": "100px",
        "translate-md": "150px",
      },
    },
  },
  plugins: [],
};
