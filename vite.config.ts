import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use absolute paths for assets to ensure SPA routing works correctly.
  // For GitHub Pages deployment at /folio/, set VITE_BASE_PATH=/folio/ when building.
  // For production at folio.id or local dev, use default root path.
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    allowedHosts: true,
  },
})
