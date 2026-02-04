// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    clearScreen: false,
    server: {
      watch: {
        usePolling: true,
      },
      hmr: {
        overlay: true,
      },
    },
  },
});
