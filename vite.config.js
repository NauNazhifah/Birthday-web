import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// viteSingleFile inlines the whole app into dist/index.html,
// so the finished site can be opened by double-clicking that one file
// (perfect for sending to Niza as a gift ♡).
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    assetsInlineLimit: 100000000,
  },
})
