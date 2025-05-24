import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tailwindScrollbarHide],
})
