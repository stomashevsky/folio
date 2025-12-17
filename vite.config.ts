import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so the same build works on:
  // - https://folio.id/ (root)
  // - https://stomashevsky.github.io/folio/ (GitHub Pages project site)
  base: './',
  server: {
    allowedHosts: true,
  },
})
