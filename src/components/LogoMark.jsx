export default function LogoMark({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="hitechGrad" x1="12" y1="20" x2="12" y2="3" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <path d="M12 3 L19.5 16.5 H16 V21 H8 V16.5 H4.5 Z" fill="url(#hitechGrad)" />
      <circle cx="12" cy="18" r="0.9" fill="#e0f7ff" />
      <path d="M12 17.1 V14.2" stroke="#bae6fd" strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="12" cy="13.6" r="0.75" fill="#e0f7ff" />
      <path d="M10.5 13.6 H9 M14.5 13.6 H13" stroke="#bae6fd" strokeWidth="0.6" strokeLinecap="round" />
      <circle cx="8.4" cy="13.6" r="0.6" fill="#cffafe" />
      <circle cx="15.6" cy="13.6" r="0.6" fill="#cffafe" />
      <path d="M12 12.8 V10.5" stroke="#bae6fd" strokeWidth="0.6" strokeLinecap="round" />
      <circle cx="12" cy="10" r="0.6" fill="#f0f9ff" />
    </svg>
  )
}
