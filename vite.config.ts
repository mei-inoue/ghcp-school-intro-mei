import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/ghcp-school-intro-mei/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        curriculum: resolve(__dirname, 'curriculum.html'),
        campus: resolve(__dirname, 'campus.html'),
        admissions: resolve(__dirname, 'admissions.html'),
      },
    },
  },
});
