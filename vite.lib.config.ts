import react from '@vitejs/plugin-react';
import path from 'node:path';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.lib.json' })],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') } },
  publicDir: false,
  build: {
    lib: { entry: path.resolve(import.meta.dirname, 'src/index.ts'), formats: ['es'] },
    rollupOptions: {
      external: (id) => !id.startsWith('.') && !id.startsWith('@/') && !path.isAbsolute(id),
      output: { preserveModules: true, preserveModulesRoot: 'src', entryFileNames: '[name].js' },
    },
  },
});
