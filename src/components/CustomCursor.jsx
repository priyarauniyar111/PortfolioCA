import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    let ringX = 0, ringY = 0
    let animId

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const animate = () => {
      ringX += (pos.x - ringX) * 0.12
      ringY += (pos.y - ringY) * 0.12
      setRing({ x: ringX, y: ringY })
      animId = requestAnimationFrame(animate)
    }

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    window.addEventListener('mousemove', move)
    const interactives = document.querySelectorAll('a, button, [data-hover]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(animId)
    }
  }, [pos.x, pos.y])

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor-ring ${hovered ? 'hovered' : ''}`}
        style={{ left: ring.x, top: ring.y }}
      />
    </>
  )
}
