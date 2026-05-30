import { useState, useRef, useCallback } from 'react'

function sparks(x, y) {
  return Array.from({ length: 12 }, (_, i) => ({
    id: Math.random(),
    x,
    y,
    angle: (i / 12) * 360 + Math.random() * 15,
    speed: 60 + Math.random() * 80,
    size: 2 + Math.random() * 3,
  }))
}

export default function ElectricButton({ children, onClick, className }) {
  const [particles, setParticles] = useState([])
  const btnRef = useRef(null)

  const handleClick = useCallback((e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newSparks = sparks(x, y)
    setParticles((p) => [...p, ...newSparks])
    setTimeout(() => {
      setParticles((p) => p.filter((s) => !newSparks.includes(s)))
    }, 600)
    onClick?.()
  }, [onClick])

  return (
    <button
      ref={btnRef}
      type="button"
      className={`electric-btn${className ? ` ${className}` : ''}`}
      onClick={handleClick}
    >
      <span className="electric-arcs">
        {[...Array(4)].map((_, i) => (
          <span key={i} className={`arc arc-${i}`} />
        ))}
      </span>
      <span className="btn-label">{children}</span>
      <svg className="sparks-canvas" aria-hidden="true">
        {particles.map((p) => (
          <circle
            key={p.id}
            className="spark"
            cx={p.x}
            cy={p.y}
            r={p.size}
            style={{
              '--dx': `${Math.cos((p.angle * Math.PI) / 180) * p.speed}px`,
              '--dy': `${Math.sin((p.angle * Math.PI) / 180) * p.speed}px`,
            }}
          />
        ))}
      </svg>
    </button>
  )
}
