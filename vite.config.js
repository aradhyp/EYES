import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths prevent blank pages when deployed under a GitHub Pages repo path.
export default defineConfig({
  plugins: [react()],
  base: './',
});
