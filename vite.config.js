import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite + React. Servidor de dev con apertura automática del navegador.
export default defineConfig({
  base: '/covid-teoria/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
