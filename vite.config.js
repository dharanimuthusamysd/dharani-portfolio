import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repo name for GitHub Pages to work.
// Repo: https://github.com/dharanimuthusamysd/dharani-portfolio
// Live at: https://dharanimuthusamysd.github.io/dharani-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/dharani-portfolio/',
})
