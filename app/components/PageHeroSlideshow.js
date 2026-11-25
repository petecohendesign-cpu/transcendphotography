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
export default function PageHeroSlideshow({ slides, label, title, interval = 5500, parallax = false }) {
  const [idx, setIdx] = useState(0)
  // Highest slide index we should have mounted (current + 1 lookahead)
  const [loadedUpTo, setLoadedUpTo] = useState(1)
  const seenAll = useRef(false)
  const heroRef = useRef(null)
  const layerRef = useRef(null)

  useEffect(() => {
    if (slides.length < 2) return
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [slides.length, interval])

  // Scroll parallax: the image layer drifts slower than the page as the hero
  // scrolls out of view, revealing depth. Opt-in; honors reduced-motion.
  useEffect(() => {
    if (!parallax) return
    const el = heroRef.current
    const layer = layerRef.current
    if (!el || !layer) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = null
    const update = () => {
      raf = null
      const scrolled = Math.max(0, -el.getBoundingClientRect().top)
      layer.style.transform = `translate3d(0, ${(scrolled * 0.34).toFixed(1)}px, 0)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [parallax])

  useEffect(() => {
    if (seenAll.current) return
    if (idx + 2 >= slides.length - 1) seenAll.current = true
    setLoadedUpTo((n) => Math.max(n, idx + 2))
  }, [idx, slides.length])

  const shouldMount = (i) => seenAll.current || i <= loadedUpTo

  return (
    <header ref={heroRef} className={`pagehero${parallax ? ' parallax' : ''}`}>
      <div ref={layerRef} className="phslides">
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
      </div>
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
