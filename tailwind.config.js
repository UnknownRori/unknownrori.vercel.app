import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/spa-loading-template.html",
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", ...fontFamily.sans],
      },
      screens: {
        sm: "240px",
        md: "640px",
        lg: "800px",
        xl: "1024px",
        "2xl": "1280px",
      },
      colors: {
        "congress-blue": {
          50: "hsl(198, 100%, 96%)",
          100: "hsl(196, 100%, 91%)",
          200: "hsl(195, 100%, 84%)",
          300: "hsl(193, 100%, 73%)",
          400: "hsl(195, 100%, 60%)",
          500: "hsl(200, 100%, 51%)",
          600: "hsl(209, 100%, 50%)",
          700: "hsl(215, 100%, 50%)",
          800: "hsl(215, 100%, 42%)",
          900: "hsl(211, 100%, 30%)",
          950: "hsl(213, 89%, 21%)",
        },
        "cod-gray": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1a1a1a",
        },
        matrix: {
          50: "hsl(42, 68%, 95%)",
          100: "hsl(9, 48%, 95%)",
          200: "hsl(5, 49%, 90%)",
          300: "hsl(5, 48%, 82%)",
          400: "hsl(4, 47%, 71%)",
          500: "hsl(3, 44%, 60%)",
          600: "hsl(0, 38%, 55%)",
          700: "hsl(359, 41%, 41%)",
          800: "hsl(357, 39%, 35%)",
          900: "hsl(355, 38%, 30%)",
          950: "hsl(357, 43%, 16%)",
        },
        primary: "#004897",
        secondary: "#1a1a1a",
        accent: "#c09de2",
        background: "#111010",
        text: "#ffffff",
      },
      boxShadow: {
        'neon-sm': '0px 0px 8px 0px rgba(151, 151, 151, 0.2)',
        'neon-md': '0px 0px 12px 1px rgba(151, 151, 151, 0.8)',
      }
    },
    plugins: [],
  },
};
