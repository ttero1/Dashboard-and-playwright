// vite.config.ts – Vite 7 compatible, fixes HMR for host + Docker
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',          // Listen on all interfaces for Docker
    port: 5173,
    strictPort: true,

    https: false,             // Force no HTTPS redirects (fixes Playwright SSL errors)

    hmr: {
      protocol: 'ws',         // Force plain WebSocket (no wss)
      // No host: let Vite infer from request origin (localhost from host, app from container)
    },

    watch: {
      usePolling: true,
      interval: 1000,
    },

    // Allow flexible origins (host browser + container access)
    origin: undefined,        // Or explicitly: 'http://localhost:5173' if you want stricter host-only
    allowedHosts: 'all',
  },

  build: {
    sourcemap: true,
  },
})