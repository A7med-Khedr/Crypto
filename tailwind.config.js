/** @type {import('tailwindcss').Config} */
export const content = ["./public/*.html", "./node_modules/flowbite/**/*.js"];
export const theme = {
  extend: {
    colors: {
      darkMode: "#080321",
      cards: "#F5F8FF",
    },
  },
  screens: {
    sm: { max: "767px" },
    // => @media (min-width: 640px and max-width: 767px) { ... }

    md: { min: "768px", max: "1023px" },
    // => @media (min-width: 768px and max-width: 1023px) { ... }

    lg: { min: "1024px", max: "1279px" },
    // => @media (min-width: 1024px and max-width: 1279px) { ... }

    xl: { min: "1280px", max: "1535px" },
    // => @media (min-width: 1280px and max-width: 1535px) { ... }

    "2xl": { min: "1536px" },
    // => @media (min-width: 1536px) { ... }
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      sm: "1rem",
      lg: "1rem",
      xl: "6rem",
      "2xl": "7rem",
    },
  },
  darkMode: "selector",
};
export const plugins = [require("flowbite/plugin")];
