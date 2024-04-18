import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@type': '/src/type',
      '@constants': '/src/constants',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@store': '/src/store',
    },
  },
  plugins: [react(), svgr({
    svgrOptions: {},
  }),],
})
