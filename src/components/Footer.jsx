export default function Footer() {
  return (
    <footer className="bg-corp-text text-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="inline-block bg-white rounded px-4 py-2">
              <img src="/logo.png" alt="하이텍" className="h-8 w-auto object-contain" />
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
              젠다이 · 포켓도어 · 커텐박스 설계 · 제작 · 납품 전문 기업.
              견고함으로 고객의 미래를 세웁니다.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">바로가기</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                ['회사소개', '#about'],
                ['사업분야', '#services'],
                ['작업프로세스', '#process'],
                ['납품실적', '#projects'],
                ['문의하기', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/50 hover:text-forge-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">주요 품목</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/50">
              <li>젠다이</li>
              <li>포켓도어</li>
              <li>커텐박스</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 하이텍 Co., Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            사업자등록번호 123-45-67890 | 대표 김○○
          </p>
        </div>
      </div>

      <a
        href="#"
        className="fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-forge-500 text-white shadow-lg hover:bg-forge-600 transition-colors"
        aria-label="맨 위로"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </footer>
  )
}
