'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * PageHeroSlideshow
 * Props:
 *   slides   – array of { src, alt }
 *   label    – small uppercase label (e.g. "Weddings & Couples")
 *   title    – JSX or string for the <h1>
 *   interval – ms between transitions (default 5500)
 */
export default function PageHeroSlideshow({ slides, label, title, interval = 5500 }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [slides.length, interval])

  return (
    <header className="pagehero">
      {slides.map((s, i) => (
        <div key={i} className={`phslide${i === idx ? ' active' : ''}`}>
          <Image src={s.src} alt={s.alt} fill sizes="100vw" priority={i === 0} style={{ objectFit: 'cover', objectPosition: s.pos || 'center 35%' }} />
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
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      )}
    </header>
  )
}
