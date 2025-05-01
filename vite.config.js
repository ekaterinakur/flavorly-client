import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "../styles/variables" as *;`
      },
    },
  },
});
