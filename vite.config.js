import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy :{
      '/api' : "http://localhost:3000"  //it append and also do the proxy after this url
    }
  },
  plugins: [react()],
})
