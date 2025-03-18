import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
  build: {
    rollupOptions: {
      plugins: [
        process.env.ANALYZE === "true"
          ? visualizer({
              open: true,
            })
          : undefined,
      ],
    },
  },
});
