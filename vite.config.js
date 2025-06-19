/** @type {import('tailwindcss').Config} */
import {
  defineConfig
} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B1F3B',
        secondary: '#dfe0df',
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})