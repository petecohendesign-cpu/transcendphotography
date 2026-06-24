'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

const PHOTOS = [
  { src: '/images/wedding-sparkler-exit.jpg',       label: 'Weddings & Couples' },
  { src: '/images/branding-ilnido-1.jpg',           label: 'Branding & Lifestyle' },
  { src: '/images/portrait-guitar.jpg',             label: 'Portrait Sessions' },
  { src: '/images/wedding-first-dance-sparklers.jpg', label: 'Weddings & Couples' },
  { src: '/images/branding-claudine-1.jpg',         label: 'Branding & Lifestyle' },
  { src: '/images/wedding-bw-railing.jpg',          label: 'Weddings & Couples' },
  { src: '/images/portrait-nyc.jpg',                label: 'Portrait Sessions' },
  { src: '/images/branding-bubles-1.jpg',           label: 'Branding & Lifestyle' },
  { src: '/images/wedding-bride-flower-girl.jpg',   label: 'Weddings & Couples' },
  { src: '/images/portrait-studio.jpg',             label: 'Portrait Sessions' },
]

const CARD_COUNT = PHOTOS.length
const ANGLE_STEP = 360 / CARD_COUNT
const RADIUS = 680

export default function RolodexGallery() {
  const [targetAngle, setTargetAngle] = useState(0)
  const [currentAngle, setCurrentAngle] = useState(0)
  const rafRef = useRef(null)
  const containerRef = useRef(null)

  // Smooth lerp toward target
  useEffect(() => {
    const animate = () => {
      setCurrentAngle(prev => {
        const diff = targetAngle - prev
        if (Math.abs(diff) < 0.01) return targetAngle
        return prev + diff * 0.1
      })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [targetAngle])

  const handleWheel = useCallback((e) => {
    e.preventDefault()
    const direction = e.deltaY > 0 ? 1 : -1
    setTargetAngle(a => a + direction * ANGLE_STEP)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [handleWheel])

  const activeIdx = Math.round(-currentAngle / ANGLE_STEP)

  return (
    <div className="rolodex-wrap" ref={containerRef}>
      <div className="rolodex-hint">Scroll to explore</div>
      <div className="rolodex-scene">
        <div
          className="rolodex-ring"
          style={{ transform: `rotateY(${currentAngle}deg)` }}
        >
          {PHOTOS.map((photo, i) => {
            const cardAngle = i * ANGLE_STEP
            // How far from front (0 = front, 0.5 = back)
            const rawDiff = (((-currentAngle / ANGLE_STEP) - i + CARD_COUNT * 10) % CARD_COUNT)
            const diff = rawDiff > CARD_COUNT / 2 ? rawDiff - CARD_COUNT : rawDiff
            const proximity = 1 - Math.min(Math.abs(diff) / (CARD_COUNT / 2), 1)
            const isActive = Math.round(diff) === 0

            return (
              <div
                key={i}
                className={`rolodex-card${isActive ? ' active' : ''}`}
                style={{
                  transform: `rotateY(${cardAngle}deg) translateZ(${RADIUS}px)`,
                  opacity: 0.25 + proximity * 0.75,
                }}
                onClick={() => setTargetAngle(-i * ANGLE_STEP)}
              >
                <img src={photo.src} alt={photo.label} />
                <div className="rolodex-card-label">{photo.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
