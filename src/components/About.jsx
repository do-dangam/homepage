import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <>
      {/* Quote block — POSCO style */}
      <section className="section-corp section-light">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="quote-block max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-medium leading-relaxed text-corp-text">
              &ldquo;2025년 설립된 맞춤형 인테리어 제품 전문 기업 하이텍을 중심으로
              <br className="hidden md:block" />
              국내 주요 건축·인테리어 현장에 젠다이, 포켓도어, 커텐박스를
              <br className="hidden md:block" />
              정확한 일정과 품질로 납품하고 있습니다.&rdquo;
            </p>
          </div>

          {/* Highlight stat cards */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="stat-card-corp">
              <p className="text-xs font-bold uppercase tracking-widest text-forge-500">Hitech</p>
              <h3 className="mt-4 text-2xl font-bold text-corp-text leading-snug">
                자체 제작 공장
                <br />
                100% 직접 생산
              </h3>
              <p className="mt-4 text-sm text-corp-muted leading-relaxed">
                맞춤형 일괄 제작 체계를 갖춘 자체 공장에서
                절단·가공·조립 전 과정을 직접 수행합니다.
              </p>
            </div>
            <div className="stat-card-corp">
              <p className="text-xs font-bold uppercase tracking-widest text-forge-500">Hitech</p>
              <h3 className="mt-4 text-2xl font-bold text-corp-text leading-snug">
                30건 이상
                <br />
                납품 프로젝트
              </h3>
              <p className="mt-4 text-sm text-corp-muted leading-relaxed">
                2025년 설립 이후 다양한 건축·인테리어 현장에서
                30건 이상의 납품 경험을 보유하고 있습니다.
              </p>
            </div>
          </div>

          <p className="mt-16 text-center text-base text-corp-muted leading-relaxed max-w-3xl mx-auto">
            도면 검토와 현장 치수 산출을 기반으로 고객 맞춤 사양에 따른 정밀 가공을 제공하며,
            설계부터 제작, 납품, 시공까지 원스톱으로 지원합니다.
          </p>
        </div>
      </section>

      {/* Split panels — 국내/해외 style */}
      <section id="about" className="section-corp section-gray">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <SectionHeading
            label="About Us"
            title="정밀한 설계와 신뢰할 수 있는 납품"
            desc="하이텍은 고객의 요구사항에 맞춘 맞춤형 제품을 정확한 일정과 품질로 제공합니다."
          />

          <div className="mt-12 space-y-8">
            <div className="split-panel corp-card overflow-hidden">
              <div className="split-panel-image">
                <FactoryVisual />
              </div>
              <div className="split-panel-content bg-white">
                <h3 className="text-xl font-bold text-corp-text">맞춤 제작</h3>
                <p className="mt-3 text-sm text-corp-muted leading-relaxed">
                  젠다이, 포켓도어, 커텐박스 등 다양한 인테리어 제품을
                  자체 공장에서 맞춤형으로 설계·제작합니다.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-corp-text">
                  <li className="flex gap-2"><span className="text-forge-500">·</span>도면 검토 및 현장 치수 산출</li>
                  <li className="flex gap-2"><span className="text-forge-500">·</span>숙련 장인의 손작업 정밀 가공</li>
                  <li className="flex gap-2"><span className="text-forge-500">·</span>출고 전 전수 품질 검수</li>
                </ul>
              </div>
            </div>

            <div className="split-panel corp-card overflow-hidden">
              <div className="split-panel-content bg-white order-2 lg:order-1">
                <h3 className="text-xl font-bold text-corp-text">현장 납품 · 시공</h3>
                <p className="mt-3 text-sm text-corp-muted leading-relaxed">
                  전국 어디든 안전하게 운송하고, 현장 납품 및 설치까지
                  전문 팀이 일괄 지원합니다.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-corp-text">
                  <li className="flex gap-2"><span className="text-forge-500">·</span>전국 납품 및 현장 하역 지원</li>
                  <li className="flex gap-2"><span className="text-forge-500">·</span>현장 설치 및 마감 작업</li>
                  <li className="flex gap-2"><span className="text-forge-500">·</span>납품 후 A/S 및 기술 지원</li>
                </ul>
              </div>
              <div className="split-panel-image order-1 lg:order-2">
                <DeliveryVisual />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FactoryVisual() {
  return (
    <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full">
      <rect width="600" height="400" fill="#0c2340" />
      <rect x="80" y="220" width="440" height="120" fill="#12325a" stroke="rgba(255,255,255,0.1)" />
      {[120, 180, 240, 300, 360, 420, 480].map((x) => (
        <rect key={x} x={x} y="240" width="10" height="100" fill="#1e3a8a" />
      ))}
      <circle cx="300" cy="120" r="50" fill="rgba(37,99,235,0.15)" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" />
      <text x="300" y="116" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">FACTORY</text>
      <text x="300" y="136" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">IN-HOUSE</text>
    </svg>
  )
}

function DeliveryVisual() {
  return (
    <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full">
      <rect width="600" height="400" fill="#12325a" />
      <path d="M100 280 H420 L460 240 H520 V280 H540" fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="2" />
      <rect x="120" y="250" width="280" height="50" rx="4" fill="rgba(37,99,235,0.3)" stroke="rgba(56,189,248,0.4)" />
      <circle cx="180" cy="300" r="20" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="380" cy="300" r="20" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="300" y="180" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">DELIVERY</text>
    </svg>
  )
}
