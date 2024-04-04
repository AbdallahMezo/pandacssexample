import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: './dist/esm',
    lib: {
      entry: 'src/index.js',
      name: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        entryFileNames: '[name].mjs',
      },
    },
    external: ['@example/core'],
  },
});
