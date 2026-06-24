'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

const PHOTOS = [
  { src: '/images/wedding-sparkler-exit.jpg',         label: 'Weddings & Couples' },
  { src: '/images/branding-ilnido-1.jpg',             label: 'Branding & Lifestyle' },
  { src: '/images/portrait-guitar.jpg',               label: 'Portrait Sessions' },
  { src: '/images/wedding-first-dance-sparklers.jpg', label: 'Weddings & Couples' },
  { src: '/images/branding-claudine-1.jpg',           label: 'Branding & Lifestyle' },
  { src: '/images/wedding-bw-railing.jpg',            label: 'Weddings & Couples' },
  { src: '/images/portrait-nyc.jpg',                  label: 'Portrait Sessions' },
  { src: '/images/branding-bubles-1.jpg',             label: 'Branding & Lifestyle' },
  { src: '/images/wedding-bride-flower-girl.jpg',     label: 'Weddings & Couples' },
  { src: '/images/portrait-studio.jpg',               label: 'Portrait Sessions' },
]

const COUNT = PHOTOS.length
const ANGLE_STEP = 360 / COUNT
const RADIUS = 520

export default function RolodexGallery() {
  const [targetAngle, setTargetAngle] = useState(0)
  const currentAngleRef = useRef(0)
  const [renderAngle, setRenderAngle] = useState(0)
  const rafRef = useRef(null)
  const containerRef = useRef(null)

  // Smooth lerp
  useEffect(() => {
    const tick = () => {
      const diff = targetAngle - currentAngleRef.current
      if (Math.abs(diff) > 0.02) {
        currentAngleRef.current += diff * 0.09
        setRenderAngle(currentAngleRef.current)
      } else {
        currentAngleRef.current = targetAngle
        setRenderAngle(targetAngle)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [targetAngle])

  const handleWheel = useCallback((e) => {
    e.preventDefault()
    // Scroll down → cards flip toward you (negative X rotation brings top toward viewer)
    const direction = e.deltaY > 0 ? -1 : 1
    setTargetAngle(a => a + direction * ANGLE_STEP)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [handleWheel])

  const snapToCard = (i) => {
    // Find shortest rotation to that card
    const current = currentAngleRef.current
    const rawTarget = -i * ANGLE_STEP
    const diff = ((rawTarget - current + 180 * COUNT) % 360) - 180
    setTargetAngle(current + diff)
  }

  return (
    <div className="rolodex-wrap" ref={containerRef}>
      <div className="rolodex-scene">
        {/* The ring spins on X axis — like a real Rolodex wheel */}
        <div
          className="rolodex-ring"
          style={{ transform: `rotateX(${renderAngle}deg)` }}
        >
          {PHOTOS.map((photo, i) => {
            const cardAngle = i * ANGLE_STEP

            // How far from front in normalized terms (0 = front, ±0.5 = back)
            const raw = ((renderAngle / ANGLE_STEP + i + COUNT * 10) % COUNT)
            const diff = raw > COUNT / 2 ? raw - COUNT : raw
            const isFront = Math.abs(diff) < 0.5
            // Brightness: front = full, sides/back = darker
            const brightness = Math.max(0.15, 1 - Math.abs(diff) * 0.22)

            return (
              <div
                key={i}
                className={`rolodex-card${isFront ? ' active' : ''}`}
                style={{
                  transform: `rotateX(${cardAngle}deg) translateZ(${RADIUS}px)`,
                  filter: `brightness(${brightness})`,
                }}
                onClick={() => snapToCard(i)}
              >
                <img src={photo.src} alt={photo.label} />
                <div className="rolodex-card-label">{photo.label}</div>
              </div>
            )
          })}
        </div>
      </div>
      <p className="rolodex-hint">↑ ↓ Scroll to flip</p>
    </div>
  )
}
