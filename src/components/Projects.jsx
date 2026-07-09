import SectionHeading from './SectionHeading'

const projects = [
  {
    title: '○○ 아파트',
    type: '젠다이 · 커텐박스',
    scope: '전 세대',
    year: '2025',
  },
  {
    title: '△△ 오피스텔',
    type: '포켓도어',
    scope: '120세대',
    year: '2025',
  },
  {
    title: '□□ 상가 건물',
    type: '젠다이 · 포켓도어',
    scope: '45세대',
    year: '2025',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-corp section-light">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            label="Projects"
            title="납품 실적"
            desc="2025년 설립 이후 다양한 건축·인테리어 현장에서 30건 이상의 납품 경험을 보유하고 있습니다."
          />
          <a href="#contact" className="corp-link shrink-0 pb-1">
            전체 실적 문의
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="corp-card overflow-hidden group">
              <div className="h-44 bg-gradient-to-br from-navy-900 to-forge-600/80 relative flex items-end p-6">
                <div className="absolute top-4 right-4 text-xs text-white/80 bg-white/10 backdrop-blur px-3 py-1">
                  {project.year}
                </div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Project</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-corp-text group-hover:text-forge-500 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-corp-muted">{project.type}</p>
                <div className="mt-4 pt-4 border-t border-corp-100 flex items-center justify-between">
                  <span className="text-xs text-corp-muted">납품 규모</span>
                  <span className="stat-number font-bold text-forge-500">{project.scope}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
