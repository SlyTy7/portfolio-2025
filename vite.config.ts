import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'index.html', dest: 'dist', rename: '404.html' }
      ],
      hook: 'writeBundle'
    })
  ],
})
