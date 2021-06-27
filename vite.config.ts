import { defineConfig } from 'vite'
import path = require('path')
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },

  plugins: [vue(), vueJSX()],

  server: {
    proxy: {
      '/api': {
        target: 'http://test-admin.xuanmo.xin',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
