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
        era1990: resolve(__dirname, 'src/era/1990/index.html'),
        era1995: resolve(__dirname, 'src/era/1995/index.html'),
        era2000: resolve(__dirname, 'src/era/2000/index.html'),
        era2005: resolve(__dirname, 'src/era/2005/index.html'),
        era2010: resolve(__dirname, 'src/era/2010/index.html'),
        era2015: resolve(__dirname, 'src/era/2015/index.html'),
        era2020: resolve(__dirname, 'src/era/2020/index.html'),
        era2025: resolve(__dirname, 'src/era/2025/index.html')
      },
    }
  }
});
