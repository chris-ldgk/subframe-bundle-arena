/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../../packages/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("@repo/ui/tailwind.config")],
};
