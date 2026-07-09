import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 프로젝트 사이트: https://user.github.io/저장소이름/
// → base를 '/저장소이름/' 으로 맞춰야 합니다.
// 사용자 사이트(username.github.io 저장소)는 '/' 입니다.
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
