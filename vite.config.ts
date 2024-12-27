import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Cấu hình proxy để yêu cầu API chuyển tiếp đến json-server
      '/api': {
        target: 'http://localhost:5000', // Địa chỉ json-server đang chạy
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Loại bỏ /api khỏi URL khi gửi yêu cầu
      }
    }
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
