'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Shared parallax controller, every ParallaxImage registers with one global
 * scroll listener, one IntersectionObserver, and one requestAnimationFrame
 * loop. This keeps a gallery of many images cheap (no per-image listeners).
 */
const registry = new Map() // el -> { inner, speed, visible }
let scheduled = false
let started = false

function tick() {
  scheduled = false
  const vh = window.innerHeight || document.documentElement.clientHeight
  registry.forEach((cfg, el) => {
    if (!cfg.visible) return
    const rect = el.getBoundingClientRect()
    const center = rect.top + rect.height / 2
    let progress = (center - vh / 2) / (vh / 2 + rect.height / 2)
    progress = Math.max(-1, Math.min(1, progress))
    const range = el.offsetHeight * cfg.speed
    cfg.inner.style.transform = `translate3d(0, ${(-progress * range).toFixed(2)}px, 0)`
  })
}

function schedule() {
  if (!scheduled) {
    scheduled = true
    requestAnimationFrame(tick)
  }
}

let io = null

function start() {
  if (started) return
  started = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const cfg = registry.get(e.target)
        if (cfg) cfg.visible = e.isIntersecting
      })
      schedule()
    },
    { threshold: 0 }
  )
}

function register(el, inner, speed) {
  start()
  registry.set(el, { inner, speed, visible: true })
  io.observe(el)
  schedule()
}

function unregister(el) {
  if (io) io.unobserve(el)
  registry.delete(el)
}

/**
 * ParallaxImage, an <Image> inside an oversized inner wrapper that drifts
 * vertically as it scrolls through the viewport, creating depth. The container
 * keeps the normal `.imgblk` look. Honors prefers-reduced-motion.
 *
 * Props:
 *   src, alt          – image
 *   sizes             – responsive sizes hint (default "100vw")
 *   speed             – drift amount as a fraction of height (default 0.14)
 *   priority          – pass through to next/image
 *   className, style  – applied to the .imgblk container (e.g. "tall", height)
 */
export default function ParallaxImage({
  src,
  alt,
  sizes = '100vw',
  speed = 0.14,
  priority = false,
  className = '',
  style = {},
  objectPosition = 'center 30%',
}) {
  const ref = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    const inner = innerRef.current
    if (!el || !inner) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    register(el, inner, speed)
    return () => unregister(el)
  }, [speed])

  return (
    <div ref={ref} className={`imgblk ${className}`.trim()} style={style}>
      <div ref={innerRef} className="parallax-inner">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: 'cover', objectPosition }} />
      </div>
    </div>
  )
}
