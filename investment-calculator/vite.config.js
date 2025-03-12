import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This ensures Vite listens on all interfaces, making it accessible from outside the container.
    port: 5173,       // Default Vite port
  },
}); 
