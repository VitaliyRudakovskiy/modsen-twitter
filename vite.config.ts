/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@constants': resolve(__dirname, './src/constants'),
      '@db': resolve(__dirname, './src/db'),
      '@helpers': resolve(__dirname, './src/helpers'),
      '@icons': resolve(__dirname, './src/assets/icons'),
      '@pages': resolve(__dirname, './src/pages'),
      '@providers': resolve(__dirname, './src/providers'),
      '@routes': resolve(__dirname, './src/routes'),
      '@store': resolve(__dirname, './src/store'),
      '@theme': resolve(__dirname, './src/theme'),
      '@UI': resolve(__dirname, './src/UI'),
      '@utils': resolve(__dirname, './src/utils'),
      '@zod': resolve(__dirname, './src/zod'),
    },
  },
});
