import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served from https://<user>.github.io/groove/ via GitHub Pages.
  base: '/groove/',
  plugins: [react()],
});
