import { useCallback, useEffect, useState } from 'react'

// Lightweight hand-crafted canvas particles (no heavy lib dependency issues)
export default function ParticleBackground() {
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    // Generate stars
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
      drift: (Math.random() - 0.5) * 0.2,
    }))

    // Floating orbs
    const orbs = [
      { x: w * 0.15, y: h * 0.2, r: 180, color: 'rgba(124,58,237,0.06)', vx: 0.2, vy: 0.15 },
      { x: w * 0.8,  y: h * 0.7, r: 240, color: 'rgba(6,182,212,0.05)', vx: -0.15, vy: 0.2 },
      { x: w * 0.5,  y: h * 0.5, r: 150, color: 'rgba(245,158,11,0.04)', vx: 0.1, vy: -0.1 },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Draw orbs
      orbs.forEach(orb => {
        orb.x += orb.vx
        orb.y += orb.vy
        if (orb.x < -orb.r || orb.x > w + orb.r) orb.vx *= -1
        if (orb.y < -orb.r || orb.y > h + orb.r) orb.vy *= -1

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r)
        grad.addColorStop(0, orb.color)
        grad.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      // Draw stars
      stars.forEach(s => {
        s.y -= s.speed
        s.x += s.drift
        if (s.y < -2) { s.y = h + 2; s.x = Math.random() * w }
        if (s.x < -2) s.x = w + 2
        if (s.x > w + 2) s.x = -2

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226,232,240,${s.alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      id="particles-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}
