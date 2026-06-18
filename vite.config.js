import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Vite 8 / rolldown requires a function form, not an object
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'vendor'
        },
      },
    },
  },
})

