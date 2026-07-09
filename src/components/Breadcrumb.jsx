export default function Breadcrumb({ items, light = true }) {
  return (
    <nav
      aria-label="breadcrumb"
      className={`text-sm ${light ? 'text-white/70' : 'text-corp-muted'}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span className="opacity-50">/</span>}
            {item.href ? (
              <a
                href={item.href}
                className={`transition-colors ${light ? 'hover:text-white' : 'hover:text-forge-500'}`}
              >
                {item.label}
              </a>
            ) : (
              <span className={light ? 'text-white font-medium' : 'text-corp-text font-medium'}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
