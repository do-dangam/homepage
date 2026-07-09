import Breadcrumb from './Breadcrumb'

export default function Hero() {
  return (
    <section className="hero-corp">
      <div className="relative z-10 w-full mx-auto max-w-[1280px] px-6 lg:px-10 pt-32 pb-16 lg:pb-24">
        <div className="animate-fade-up">
          <Breadcrumb
            items={[
              { label: 'HOME', href: '#' },
              { label: '사업영역', href: '#services' },
              { label: '인테리어 제품' },
            ]}
          />
        </div>

        <div className="mt-10 lg:mt-14 max-w-4xl animate-fade-up delay-100">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white">
            인테리어 제품
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/80 leading-relaxed font-light">
            우리 일상을 완성하는 맞춤형 인테리어 소재
            <br />
            하이텍이 자체 제작 공장과 숙련된 장인의 손끝으로
            <br className="hidden sm:block" />
            정확한 일정과 품질의 제품을 제공합니다.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 animate-fade-up delay-200">
        
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
