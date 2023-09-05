import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
    },
  },
  plugins: [],
};
