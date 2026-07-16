'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

/**
 * PageHeroSlideshow
 * Props:
 *   slides   – array of { src, alt }
 *   label    – small uppercase label (e.g. "Weddings & Couples")
 *   title    – JSX or string for the <h1>
 *   interval – ms between transitions (default 5500)
 *
 * Performance: slides are stacked full-screen, so the browser would download
 * every image immediately. Instead we only mount the images the visitor has
 * seen plus the next one in line, the rest stay empty until needed.
 */
export default function PageHeroSlideshow({ slides, label, title, interval = 5500 }) {
  const [idx, setIdx] = useState(0)
  // Highest slide index we should have mounted (current + 1 lookahead)
  const [loadedUpTo, setLoadedUpTo] = useState(1)
  const seenAll = useRef(false)

  useEffect(() => {
    if (slides.length < 2) return
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [slides.length, interval])

  useEffect(() => {
    if (seenAll.current) return
    if (idx + 2 >= slides.length - 1) seenAll.current = true
    setLoadedUpTo((n) => Math.max(n, idx + 2))
  }, [idx, slides.length])

  const shouldMount = (i) => seenAll.current || i <= loadedUpTo

  return (
    <header className="pagehero">
      {slides.map((s, i) => (
        <div key={i} className={`phslide${i === idx ? ' active' : ''}`}>
          {shouldMount(i) && (
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              style={{ objectFit: 'cover', objectPosition: s.pos || 'center 35%' }}
            />
          )}
        </div>
      ))}
      <div className="hscrim" />
      <div className="inner">
        <div className="label">{label}</div>
        <h1>{title}</h1>
      </div>
      {slides.length > 1 && (
        <div className="phdots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hdot${i === idx ? ' on' : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                setLoadedUpTo((n) => Math.max(n, i + 1))
                setIdx(i)
              }}
            />
          ))}
        </div>
      )}
    </header>
  )
}
