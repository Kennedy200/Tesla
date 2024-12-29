import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config to handle GLB files as assets
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // This line tells Vite to treat .glb as assets
});
