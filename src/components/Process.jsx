import SectionHeading from './SectionHeading'

const steps = [
  {
    num: '01',
    title: '상담 · 견적',
    desc: '프로젝트 요구사항을 파악하고, 도면 및 현장 조건을 검토하여 견적을 산출합니다.',
  },
  {
    num: '02',
    title: '도면 검토 · 치수 산출',
    desc: '고객 도면을 검토하고 현장에서 치수를 재어 제작 도면을 작성한 뒤 승인을 받습니다.',
  },
  {
    num: '03',
    title: '제작 · 품질검수',
    desc: '자체 공장에서 절단, 가공, 조립 후 출고 전 품질 검수를 실시합니다.',
  },
  {
    num: '04',
    title: '납품 · 시공',
    desc: '안전 운송 후 현장 납품 및 설치 작업을 완료합니다.',
  },
]

export default function Process() {
  return (
    <>
      {/* Feature highlight — HyREX style */}
      <section className="feature-banner section-corp">
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-forge-400">Hitech Process</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                숙련 장인의
                <br />
                손작업 정밀 가공
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed">
                CNC나 자동화 설비 없이, 숙련된 장인이 도면을 보고 치수를 재어
                절단·가공·조립 전 과정을 직접 수행합니다.
                하이텍은 이 방식으로 고객 맞춤 사양에 따른 정밀한 마감 품질을 보장합니다.
              </p>
            </div>
            <div className="rounded-sm overflow-hidden border border-white/10 bg-white/5 p-8 lg:p-10">
              <HandcraftVisual />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-corp section-gray">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <SectionHeading
              label="Process"
              title="체계적인 4단계 프로세스"
              desc="모든 프로젝트는 표준화된 품질 관리 프로세스를 따릅니다. 각 단계마다 검수 체크리스트를 적용하여 납품 품질을 보장합니다."
            />

            <div className="lg:pt-8">
              {steps.map((step) => (
                <div key={step.num} className="process-step-corp">
                  <span className="process-num">{step.num}</span>
                  <h3 className="text-lg font-bold text-corp-text">{step.title}</h3>
                  <p className="mt-2 text-sm text-corp-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
              <a href="#contact" className="corp-link mt-4 inline-flex">
                프로젝트 시작하기
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function HandcraftVisual() {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-auto">
      <rect width="400" height="280" fill="rgba(12,35,64,0.5)" rx="4" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={40 + i * 90} y="80" width="70" height="120" fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" rx="2" />
          <line x1={55 + i * 90} y1="100" x2={95 + i * 90} y2="100" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
          <line x1={55 + i * 90} y1="120" x2={95 + i * 90} y2="120" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
          <line x1={55 + i * 90} y1="140" x2={95 + i * 90} y2="140" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
        </g>
      ))}
      <text x="200" y="50" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">HANDCRAFT</text>
      <text x="200" y="240" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">도면 검토 → 치수 산출 → 수작업 가공</text>
    </svg>
  )
}
