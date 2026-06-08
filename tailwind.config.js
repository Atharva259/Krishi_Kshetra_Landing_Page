/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ignored by Tailwind v4, but kept for legacy tool compat
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
