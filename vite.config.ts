// vite.config.ts – 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],

  server: {
    host: '0.0.0.0',          // Listen on all interfaces for Docker
    port: 5173,
    strictPort: true,

    hmr: {
      protocol: 'ws',         // Force plain WebSocket (no wss)
    },

    watch: {
      usePolling: true,
      interval: 1000,
    },

    origin: undefined,        // Or explicitly: 'http://localhost:5173' if you want stricter host-only
  },

  build: {
    sourcemap: true,
  },
})