import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // NOTE: react-icons is intentionally NOT listed here so
          // Vite can tree-shake it (only used icons get bundled).
          // Putting it in a manual chunk bundles ALL icons = 3 MB!
          if (/node_modules[\\/]react-dom[\\/]/.test(id)) return 'vendor-react-dom';
          if (/node_modules[\\/]react[\\/]/.test(id)) return 'vendor-react';
          if (/node_modules[\\/]scheduler[\\/]/.test(id)) return 'vendor-react';
          if (/node_modules[\\/]framer-motion[\\/]/.test(id)) return 'vendor-framer-motion';
        }
      }
    }
  },
})
