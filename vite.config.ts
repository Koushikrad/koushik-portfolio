import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  base: '/koushik-portfolio/',
  plugins: [
    tailwindcss(),
  ],
})