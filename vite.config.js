import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions :{
      external : ["styled-components"],
    }
  },
  optimizeDeps :{
    include : ["styled-components"],
  },
  plugins: [react()],
})