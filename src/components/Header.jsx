import { useState } from 'react'
import LogoMark from './LogoMark'
import { asset } from '../utils/asset'

const navLinks = [
  { href: '#about', label: '회사소개' },
  { href: '#services', label: '사업분야' },
  { href: '#process', label: '작업프로세스' },
  { href: '#projects', label: '납품실적' },
  { href: '#contact', label: '문의하기' },
]

export default function Header({ scrolled, onHero = true }) {
  const [open, setOpen] = useState(false)
  const light = scrolled || !onHero

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        light ? 'header-corp py-3' : 'header-corp-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center gap-3 group">
          {light ? (
            <img src={asset('logo.png')} alt="하이텍" className="h-9 w-auto object-contain" />
          ) : (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/20">
                <LogoMark className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-wide text-white">하이텍</span>
                <span className="hidden sm:block text-[10px] text-white/60 tracking-widest uppercase">HI-Tech</span>
              </div>
            </>
          )}
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                light
                  ? 'text-corp-muted hover:text-forge-500'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-forge-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-forge-600 transition-colors"
          >
            견적 문의
          </a>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          <span className={`block h-0.5 w-6 transition-all ${light ? 'bg-corp-text' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 transition-opacity ${light ? 'bg-corp-text' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all ${light ? 'bg-corp-text' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-white border-t border-corp-200 shadow-lg animate-fade-in">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-corp-text hover:text-forge-500 border-b border-corp-100 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-sm bg-forge-500 px-4 py-3 text-center font-semibold text-white"
            >
              견적 문의
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
