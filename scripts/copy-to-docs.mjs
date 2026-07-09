import { cpSync, rmSync, mkdirSync } from 'node:fs'

rmSync('docs', { recursive: true, force: true })
mkdirSync('docs')
cpSync('dist', 'docs', { recursive: true })

console.log('dist/ → docs/ 복사 완료. docs 폴더를 GitHub에 올리세요.')
