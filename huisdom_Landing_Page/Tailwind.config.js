/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine:    { DEFAULT: "#1a3a2a", light: "#2d5a40", dark: "#0e2019" },
        glacier: { DEFAULT: "#4a8fa8", light: "#6cb8d4", dark: "#2d6a82" },
        dawn:    { DEFAULT: "#e8b96a", light: "#f5d090", dark: "#c49040" },
        snow:    { DEFAULT: "#f4f1ec", light: "#ffffff", dark: "#e0d8cc" },
        mist:    { DEFAULT: "#edf2f4", light: "#f8fafb", dark: "#d0dce2" },
        stone:   { DEFAULT: "#3d4a3e", light: "#556358", dark: "#232d24" },
        sky:     { DEFAULT: "#c8dff0", light: "#e4f0f9", dark: "#96bcd8" },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
        mono:    ["'DM Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};