// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/profile/',
  server: {
    port: 3000,       // optional: change port if needed
    open: true        // auto-opens in default browser
  },
  build: {
    outDir: 'dist',    // output directory for production build
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'), // main entry point
            era2025: resolve(__dirname, 'src/era/2025/index.html') // specific era entry point
        },
    }
  }
});
