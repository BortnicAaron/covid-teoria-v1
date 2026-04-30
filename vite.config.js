import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite + React. Servidor de dev con apertura automática del navegador.
export default defineConfig({
  base: '/covid-teoria-v1/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
