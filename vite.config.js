import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: '.', // explicitly set root
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
    outDir: 'dist', // Netlify expects dist by default
    emptyOutDir: true,
  },
  plugins: [react()],
})
