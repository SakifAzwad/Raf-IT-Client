/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
      },
      colors:
    {
      'col1': '#77A6F7',
      'col2': '#D3E3FC',
      'col3': '#FFCCBC',
      'col4': '#00887A',
    }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  darkMode: "class",
}

