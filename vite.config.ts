import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Cloudflare Pages for this project serves from "out" (legacy setting).
  build: { outDir: 'out' },
})
