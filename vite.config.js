import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({ 
    root: './src', 
    publicDir: '../public', 
    build: {
        outDir: '../dist' 
    }, 
    base: "/sovcom",
    plugins: [
        ViteImageOptimizer({
            jpg: {
                quality: 80,
            },
        }),
    ],
});