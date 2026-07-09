import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 30, suffix: '+', label: '누적 프로젝트' },
  { value: 100, suffix: '%', label: '자체 공장 제작' },
  { value: 99.2, suffix: '%', label: '납기 준수율', decimal: 1 },
  { value: 2025, suffix: '', label: '설립' },
]

function AnimatedNumber({ value, suffix, decimal = 0, inView }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, value])

  const formatted = decimal > 0
    ? display.toFixed(decimal)
    : Math.floor(display).toLocaleString()

  return <span className="stat-number">{formatted}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-forge-500 py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center border-r border-white/10 last:border-r-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                <AnimatedNumber {...stat} inView={inView} />
              </div>
              <p className="mt-2 text-sm text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
