export function EnsoCircle({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M100 8C154 8 192 46 192 100C192 154 154 192 100 192C46 192 8 154 8 100C8 46 46 8 100 8Z"
        stroke="currentColor"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
        fill="none"
        opacity="0.15"
      />
      <path
        d="M100 14C153 14 186 47 186 100C186 153 153 186 100 186C47 186 14 153 14 100C14 47 47 14 100 14Z"
        stroke="currentColor"
        strokeWidth="0.3"
        vectorEffect="non-scaling-stroke"
        fill="none"
        opacity="0.08"
      />
    </svg>
  )
}

export function EnsoBrush({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M150 20C215 20 280 70 280 150C280 230 215 280 150 280C85 280 20 230 20 150C20 95 55 50 105 35C120 30 140 28 155 30C175 32 185 45 180 60C175 75 155 82 140 78C120 73 115 55 130 42"
        stroke="currentColor"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
        fill="none"
        strokeLinecap="round"
        opacity="0.12"
      />
    </svg>
  )
}

export function Stamp({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="2" width="56" height="56" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <rect x="12" y="12" width="36" height="36" rx="1" fill="currentColor" opacity="0.15" />
      <circle cx="30" cy="30" r="10" fill="currentColor" opacity="0.25" />
    </svg>
  )
}

export function DividerDots({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-px bg-border/30 my-16 ${className}`}>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-jp-vermillion/40" />
      <span className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-jp-gold/20" />
      <span className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-jp-gold/20" />
      <span className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-jp-gold/20" />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-jp-vermillion/40" />
    </div>
  )
}

export function CornerAccent({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 39V1H39" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.3" />
      <path d="M6 39V6H39" stroke="currentColor" strokeWidth="0.3" vectorEffect="non-scaling-stroke" opacity="0.15" />
    </svg>
  )
}

export function CornerAccentTL({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M39 1H1V39" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.3" />
      <path d="M34 6H6V34" stroke="currentColor" strokeWidth="0.3" vectorEffect="non-scaling-stroke" opacity="0.15" />
    </svg>
  )
}
