import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',              // 👈 Ensures index.html in the root is used
  plugins: [react()],
});
