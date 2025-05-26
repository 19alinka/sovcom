import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsInlineLimit: (filePath) => {
      return filePath.endsWith('.svg') || filePath.endsWith('.webp') ? false : 4096;
    }
  },
  base: "/sovcom",
  plugins: [
    ViteImageOptimizer({
      webp: {
        quality: 80,
      },
    }),
  ],
});