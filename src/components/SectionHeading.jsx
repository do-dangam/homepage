export default function SectionHeading({ label, title, desc, align = 'left', light = false }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const labelColor = light ? 'text-forge-400' : 'text-forge-500'
  const titleColor = light ? 'text-white' : 'text-corp-text'
  const descColor = light ? 'text-steel-200' : 'text-corp-muted'

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {label && (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${labelColor}`}>
          {label}
        </span>
      )}
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight ${titleColor}`}>
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed ${descColor}`}>{desc}</p>
      )}
    </div>
  )
}
