import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel에서는 base path를 '/'로 설정
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // CSS와 JS 파일이 제대로 로드되도록 설정
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}) 