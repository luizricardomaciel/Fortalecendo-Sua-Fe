import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Isso é importante para o path correto dos assets
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});