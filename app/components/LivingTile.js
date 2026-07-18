'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

/**
 * LivingTile — a gallery tile that slowly crossfades through its own stack of
 * photos. Drop several in a grid with different `delay` values and the grid
 * feels alive without everything flipping at once. Curate each tile's stack to
 * match its shape (verticals in tall tiles, landscapes in wide ones) so photos
 * are never mis-cropped.
 *
 * Props:
 *   slides    – array of { src, alt, pos? }
 *   height    – tile height (CSS value)
 *   className – extra classes on the tile (e.g. "tall")
 *   sizes     – next/image sizes hint
 *   interval  – ms between fades (default 5200)
 *   delay     – ms before this tile's first fade (stagger, default 0)
 */
export default function LivingTile({
  slides,
  height,
  aspect, // e.g. '3 / 2' — use instead of height; stack same-ratio images for zero crop
  className = '',
  sizes = '(max-width: 900px) 100vw, 33vw',
  interval = 5200,
  delay = 0,
  style = {},
}) {
  const [idx, setIdx] = useState(0)
  const [loadedUpTo, setLoadedUpTo] = useState(1)
  const seenAll = useRef(false)

  useEffect(() => {
    if (slides.length < 2) return
    let timer
    const kickoff = setTimeout(() => {
      setIdx((i) => (i + 1) % slides.length)
      timer = setInterval(() => setIdx((i) => (i + 1) % slides.length), interval)
    }, delay + interval)
    return () => { clearTimeout(kickoff); clearInterval(timer) }
  }, [slides.length, interval, delay])

  useEffect(() => {
    if (seenAll.current) return
    if (idx + 1 >= slides.length - 1) seenAll.current = true
    setLoadedUpTo((n) => Math.max(n, idx + 1))
  }, [idx, slides.length])

  const shouldMount = (i) => seenAll.current || i <= loadedUpTo

  return (
    <div
      className={`imgblk living ${className}`.trim()}
      style={{ position: 'relative', ...(aspect ? { aspectRatio: aspect } : { height }), ...style }}
    >
      {slides.map((s, i) => (
        <div key={i} className={`living-slide${i === idx ? ' active' : ''}`}>
          {shouldMount(i) && (
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes={sizes}
              style={{ objectFit: 'cover', objectPosition: s.pos || 'center 35%' }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
