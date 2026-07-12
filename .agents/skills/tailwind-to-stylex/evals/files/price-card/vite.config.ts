import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleX from 'vite-plugin-stylex'

export default defineConfig({
  plugins: [react(), styleX()],
})
