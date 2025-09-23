import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Empty base works well for GitHub Pages when building to /docs with relative URLs
  base: "",
  build: {
    outDir: "docs",
    assetsDir: "assets",
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
  },
});
