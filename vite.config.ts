import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use absolute asset paths for proper SPA routing
  // The prerender script handles path adjustment for GitHub Pages deployment
  base: '/',
  server: {
    allowedHosts: true,
  },
})
