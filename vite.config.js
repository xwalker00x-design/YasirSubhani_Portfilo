import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  // Empty base works well for GitHub Pages when building to /docs with relative URLs
  base: "",
  build: {
    outDir: "docs",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          vendor: ["react", "react-dom", "framer-motion", "react-router-dom"],
        },
      },
    },
  },
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 72, progressive: true },
      pngquant: { quality: [0.55, 0.7], speed: 3 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: true },
        ],
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
  },
});
