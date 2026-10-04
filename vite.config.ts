import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the site root, so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
