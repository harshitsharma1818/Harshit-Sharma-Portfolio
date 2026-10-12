import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Harshit-Sharma-Portfolio/',
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
