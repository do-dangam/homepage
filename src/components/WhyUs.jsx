import SectionHeading from './SectionHeading'

const reasons = [
  {
    title: '정밀 가공 기술',
    desc: '숙련 장인의 손작업으로 절단·가공·조립 전 과정을 직접 수행하여 정밀한 마감 품질을 보장합니다.',
  },
  {
    title: '철저한 품질 관리',
    desc: '출고 전 전수 검수로 모든 제품의 품질을 확인합니다.',
  },
  {
    title: '납기 준수',
    desc: '자체 생산 CAPA와 전국 물류 네트워크로 99.2%의 납기 준수율을 유지합니다.',
  },
  {
    title: '원스톱 서비스',
    desc: '설계, 제작, 납품, 시공까지 한 곳에서 해결하여 커뮤니케이션 비용을 줄입니다.',
  },
  {
    title: '안전 관리',
    desc: '정기 안전교육과 현장 안전 수칙 준수로 안전한 작업 환경을 유지합니다.',
  },
  {
    title: 'A/S 지원',
    desc: '납품 후에도 제품 점검, 보수, 추가 시공 등 지속적인 기술 지원을 제공합니다.',
  },
]

export default function WhyUs() {
  return (
    <section className="section-corp section-gray">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeading
          label="Why HITECH"
          title="하이텍을 선택하는 이유"
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="corp-card p-7">
              <span className="text-3xl font-display font-bold text-forge-500/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-bold text-corp-text">{reason.title}</h3>
              <p className="mt-2 text-sm text-corp-muted leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 corp-card p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-white">
          <div>
            <h3 className="font-display text-2xl font-bold text-corp-text">
              프로젝트 견적이 필요하신가요?
            </h3>
            <p className="mt-2 text-corp-muted">
              도면을 보내주시면 48시간 이내에 상세 견적서를 제공해 드립니다.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-sm bg-forge-500 px-8 py-3.5 font-semibold text-white hover:bg-forge-600 transition-colors"
          >
            무료 견적 받기
          </a>
        </div>
      </div>
    </section>
  )
}
