// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: {
    port: 3000,
  },
  vite: {
    plugins: [
      process.env.ANALYZE === "true"
        ? visualizer({
            open: true,
          })
        : undefined,
    ],
  },
});
