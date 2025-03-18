import * as subframeTailwindConfig from "@repo/ui/tailwind.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../../packages/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [subframeTailwindConfig],
};
