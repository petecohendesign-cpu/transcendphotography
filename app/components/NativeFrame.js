'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * NativeFrame — an image displayed at its true aspect ratio (zero cropping),
 * with a gentle whole-tile parallax drift as it scrolls through the viewport.
 * Unlike ParallaxImage (which drifts an oversized image inside a cropping
 * frame), here the frame itself matches the photo, so nothing is ever cut off;
 * the tile as a whole floats a few pixels against the scroll.
 *
 * Shared scroll plumbing: one listener + one rAF for every instance on the page.
 *
 * Props:
 *   src, alt – image
 *   w, h     – the image's native pixel dimensions (sets the frame's ratio)
 *   drift    – max px the tile drifts (default 16; 0 disables)
 *   sizes    – next/image sizes hint
 *   style    – extra styles on the frame (flex is set by the parent row)
 */
const registry = new Map()
let scheduled = false
let started = false
let io = null

function tick() {
  scheduled = false
  const vh = window.innerHeight || document.documentElement.clientHeight
  registry.forEach((cfg, el) => {
    if (!cfg.visible) return
    const rect = el.getBoundingClientRect()
    const center = rect.top + rect.height / 2
    let p = (center - vh / 2) / (vh / 2 + rect.height / 2)
    p = Math.max(-1, Math.min(1, p))
    el.style.transform = `translate3d(0, ${(-p * cfg.drift).toFixed(2)}px, 0)`
  })
}

function schedule() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(tick) }
}

function start() {
  if (started) return
  started = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { const c = registry.get(e.target); if (c) c.visible = e.isIntersecting })
    schedule()
  }, { threshold: 0 })
}

export default function NativeFrame({ src, alt, w, h, drift = 16, sizes = '(max-width: 760px) 100vw, 60vw', style = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !drift) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    start()
    registry.set(el, { drift, visible: true })
    io.observe(el)
    schedule()
    return () => { io.unobserve(el); registry.delete(el) }
  }, [drift])

  return (
    <div ref={ref} className="imgblk nframe" style={{ aspectRatio: `${w} / ${h}`, ...style }}>
      <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: 'cover' }} />
    </div>
  )
}
