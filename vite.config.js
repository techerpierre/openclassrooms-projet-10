import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ['crypto', 'process', 'stream', 'util'],
      globals: { global: true, process: true },
    }),
  ],
  server: {
    host: true,
  }
})
