import { useState } from 'react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-corp section-navy">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              label="Contact"
              title="문의하기"
              desc="프로젝트 규모와 관계없이 언제든 문의해 주세요. 전문 엔지니어가 24시간 이내에 답변드립니다."
              light
            />

            <div className="mt-10 space-y-6">
              {[
                { label: '대표전화', value: '031-123-4567' },
                { label: '이메일', value: 'sales@hitech.co.kr' },
                { label: '본사 · 공장', value: '경기도 ○○시 ○○로 123' },
                { label: '영업시간', value: '평일 08:00 – 18:00' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{item.label}</p>
                    <p className="mt-1 font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-sm p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-corp-text">문의가 접수되었습니다</h3>
                <p className="mt-2 text-corp-muted">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-corp-text mb-1.5">담당자명</label>
                    <input id="name" type="text" required placeholder="홍길동"
                      className="w-full rounded-sm border border-corp-200 bg-corp-50 px-4 py-2.5 text-corp-text placeholder:text-corp-muted/50 focus:border-forge-500 focus:outline-none focus:ring-1 focus:ring-forge-500" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-corp-text mb-1.5">회사명</label>
                    <input id="company" type="text" required placeholder="(주)○○건설"
                      className="w-full rounded-sm border border-corp-200 bg-corp-50 px-4 py-2.5 text-corp-text placeholder:text-corp-muted/50 focus:border-forge-500 focus:outline-none focus:ring-1 focus:ring-forge-500" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-corp-text mb-1.5">연락처</label>
                    <input id="phone" type="tel" required placeholder="010-0000-0000"
                      className="w-full rounded-sm border border-corp-200 bg-corp-50 px-4 py-2.5 text-corp-text placeholder:text-corp-muted/50 focus:border-forge-500 focus:outline-none focus:ring-1 focus:ring-forge-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-corp-text mb-1.5">이메일</label>
                    <input id="email" type="email" required placeholder="email@company.com"
                      className="w-full rounded-sm border border-corp-200 bg-corp-50 px-4 py-2.5 text-corp-text placeholder:text-corp-muted/50 focus:border-forge-500 focus:outline-none focus:ring-1 focus:ring-forge-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-corp-text mb-1.5">프로젝트 유형</label>
                  <select id="type"
                    className="w-full rounded-sm border border-corp-200 bg-corp-50 px-4 py-2.5 text-corp-text focus:border-forge-500 focus:outline-none focus:ring-1 focus:ring-forge-500">
                    <option value="">선택해 주세요</option>
                    <option value="apartment">아파트 · 주거</option>
                    <option value="office">오피스 · 상업</option>
                    <option value="renovation">리모델링</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-corp-text mb-1.5">문의 내용</label>
                  <textarea id="message" rows={4} required placeholder="프로젝트 규모, 납기, 제품 종류 등을 알려주세요."
                    className="w-full rounded-sm border border-corp-200 bg-corp-50 px-4 py-2.5 text-corp-text placeholder:text-corp-muted/50 focus:border-forge-500 focus:outline-none focus:ring-1 focus:ring-forge-500 resize-none" />
                </div>
                <button type="submit"
                  className="w-full rounded-sm bg-forge-500 py-3.5 font-semibold text-white hover:bg-forge-600 transition-colors">
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
