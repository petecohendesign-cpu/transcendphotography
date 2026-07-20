'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Stars from './Stars'

/**
 * CategoryCarousel — a full-width carousel where each slide is one service
 * category (photo + testimonial). Native horizontal scroll with snap, so it
 * swipes on touch; arrows and named tabs drive it on desktop.
 */
export default function CategoryCarousel({ items }) {
  const ref = useRef(null)
  const [i, setI] = useState(0)

  const goTo = (n) => {
    const el = ref.current
    if (!el) return
    const idx = (n + items.length) % items.length
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' })
    setI(idx)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const n = Math.round(el.scrollLeft / el.clientWidth)
        setI(Math.max(0, Math.min(items.length - 1, n)))
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => { el.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [items.length])

  return (
    <div className="catcar-wrap">
      <div className="catcar" ref={ref}>
        {items.map((it, n) => (
          <div className="catslide" key={n} aria-hidden={n !== i}>
            <div className="catsplit">
              <div className="catphoto">
                <Image src={it.src} alt={it.alt} fill sizes="(max-width: 900px) 100vw, 56vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="cattext">
                <div className="label">{it.label}</div>
                <Stars align="left" />
                <p className="catquote">{it.quote}</p>
                <cite className="catcite">{it.cite}</cite>
                <a className="nlink catlink" href={it.href}>{it.cta}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="catnav">
        <button className="catarrow" onClick={() => goTo(i - 1)} aria-label="Previous category">
          <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="cattabs">
          {items.map((it, n) => (
            <button key={n} className={n === i ? 'on' : ''} onClick={() => goTo(n)}>{it.short}</button>
          ))}
        </div>
        <button className="catarrow" onClick={() => goTo(i + 1)} aria-label="Next category">
          <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  )
}
