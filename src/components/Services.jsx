import SectionHeading from './SectionHeading'

const services = [
  {
    title: '도면 · 치수 설계',
    desc: '고객 도면을 검토하고 현장에서 치수를 재어 맞춤형 제작 사양을 확정합니다.',
    tags: ['도면검토', '현장 치수', '맞춤 사양'],
  },
  {
    title: '제작 · 가공',
    desc: '젠다이, 포켓도어, 커텐박스 등 다양한 인테리어 제품을 자체 공장에서 정밀 가공합니다.',
    tags: ['젠다이', '포켓도어', '커텐박스'],
  },
  {
    title: '납품 · 운송',
    desc: '전국 어디든 안전하게 운송하고, 현장 하역 및 적재까지 지원합니다.',
    tags: ['전국 납품', '현장하역', '적재계획'],
  },
  {
    title: '시공 · 설치',
    desc: '현장 납품 후 전문 팀이 설치 및 마감 작업을 수행합니다.',
    tags: ['현장설치', '마감작업', 'A/S 지원'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-corp section-light">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeading
          label="Services"
          title="사업 분야"
          desc="설계부터 시공까지, 인테리어 제품의 전 과정을 원스톱으로 제공합니다."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <article key={service.title} className="corp-card p-6 lg:p-7 group">
              <div className="h-1 w-10 bg-forge-500 group-hover:w-14 transition-all" />
              <h3 className="mt-5 text-lg font-bold text-corp-text">{service.title}</h3>
              <p className="mt-3 text-sm text-corp-muted leading-relaxed">{service.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs text-corp-muted bg-corp-50 border border-corp-200 px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contact" className="corp-link mt-6">
                더보기
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
