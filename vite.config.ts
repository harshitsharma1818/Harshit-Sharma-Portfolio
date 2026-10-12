import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';
  const base = process.env.VITE_BASE_PATH || (isGitHubPages ? '/Harshit-Sharma-Portfolio/' : '/');

  return {
    plugins: [react()],
    base,
    server: {
      port: 3000,
      open: false,
      host: true
    }
  };
});

