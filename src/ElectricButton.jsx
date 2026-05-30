import { useState, useRef, useCallback, useEffect, useReducer } from 'react'

function createSparks(x, y, count = 20) {
  return Array.from({ length: count }, (_, i) => ({
    id: Math.random(),
    x,
    y,
    angle: (i / count) * 360 + Math.random() * 20,
    speed: 80 + Math.random() * 120,
    size: 2 + Math.random() * 4,
    color: ['#f5c518', '#fff', '#aa3bff', '#ff6b00'][Math.floor(Math.random() * 4)],
  }))
}

function createFloatingParticle(btnRect) {
  const side = Math.floor(Math.random() * 4)
  let x, y
  if (side === 0) { x = Math.random() * btnRect.width; y = 0 }
  else if (side === 1) { x = btnRect.width; y = Math.random() * btnRect.height }
  else if (side === 2) { x = Math.random() * btnRect.width; y = btnRect.height }
  else { x = 0; y = Math.random() * btnRect.height }

  return {
    id: Math.random(),
    x,
    y,
    size: 1.5 + Math.random() * 2.5,
    opacity: 0.6 + Math.random() * 0.4,
    dx: (Math.random() - 0.5) * 30,
    dy: -20 - Math.random() * 40,
    life: 0,
    maxLife: 60 + Math.random() * 60,
  }
}

const colors = ['#f5c518', '#aa3bff', '#ff6b00', '#00d4ff', '#ff2d55', '#00ff99']

export default function ElectricButton({ children, onClick, className }) {
  const [sparks, setSparks] = useState([])
  const [floating, setFloating] = useState([])
  const [colorIndex, setColorIndex] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const hoverInterval = useRef(null)
  const btnRef = useRef(null)
  const animRef = useRef(null)
  const floatingRef = useRef([])

  useEffect(() => {
    let frame = 0
    const loop = () => {
      frame++
      if (frame % 8 === 0 && btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect()
        const p = createFloatingParticle({ width: rect.width, height: rect.height })
        floatingRef.current = [...floatingRef.current, p]
      }

      floatingRef.current = floatingRef.current
        .map(p => ({ ...p, life: p.life + 1, y: p.y + p.dy / 60, x: p.x + p.dx / 60, opacity: p.opacity * (1 - p.life / p.maxLife) }))
        .filter(p => p.life < p.maxLife)

      setFloating([...floatingRef.current])
      animRef.current = requestAnimationFrame(loop)
    }
    animRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  const handleClick = useCallback((e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newSparks = createSparks(x, y, 28)
    setSparks(p => [...p, ...newSparks])
    setColorIndex(i => (i + 1) % colors.length)
    setClicked(true)
    setTimeout(() => {
      setSparks(p => p.filter(s => !newSparks.find(n => n.id === s.id)))
      setClicked(false)
    }, 700)
    onClick?.()
  }, [onClick])

  return (
    <button
      ref={btnRef}
      type="button"
      className={`electric-btn${className ? ` ${className}` : ''}`}
      onClick={handleClick}
      onMouseEnter={() => {
        setHovered(true)
        hoverInterval.current = setInterval(() => {
          setColorIndex(i => (i + 1) % colors.length)
        }, 400)
      }}
      onMouseLeave={() => {
        setHovered(false)
        clearInterval(hoverInterval.current)
      }}
      style={(hovered || clicked) ? { background: colors[colorIndex], color: '#000', borderColor: colors[colorIndex], transition: 'background 0.3s, color 0.3s, border-color 0.3s' } : { color: className?.includes('btn-primary') ? '#000' : undefined }}
    >
      <span className="electric-arcs">
        {[...Array(4)].map((_, i) => (
          <span key={i} className={`arc arc-${i}`} />
        ))}
      </span>
      <span className="btn-label" style={{ color: '#000' }}>{children}</span>
      <svg className="sparks-canvas" aria-hidden="true">
        {floating.map(p => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill="#f5c518"
            opacity={p.opacity}
            filter="url(#glow)"
          />
        ))}
        {sparks.map(p => (
          <circle
            key={p.id}
            className="spark"
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill={p.color}
            style={{
              '--dx': `${Math.cos((p.angle * Math.PI) / 180) * p.speed}px`,
              '--dy': `${Math.sin((p.angle * Math.PI) / 180) * p.speed}px`,
            }}
          />
        ))}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
      </svg>
    </button>
  )
}
