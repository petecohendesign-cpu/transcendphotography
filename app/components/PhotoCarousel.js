'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * PhotoCarousel — shows one photo at a time in a fixed frame with prev/next
 * controls. Feed it images that share the frame's aspect ratio so nothing is
 * ever cropped. Used three-up on the homepage, one per service category.
 */
export default function PhotoCarousel({ images, sizes = '(max-width: 900px) 100vw, 33vw' }) {
  const [i, setI] = useState(0)
  const go = (d) => setI((n) => (n + d + images.length) % images.length)

  return (
    <div className="pcar">
      {images.map((im, n) => (
        <div key={n} className={`pcar-slide${n === i ? ' active' : ''}`}>
          <Image src={im.src} alt={im.alt} fill sizes={sizes} style={{ objectFit: 'cover' }} />
        </div>
      ))}

      <button className="pcar-btn pcar-prev" onClick={() => go(-1)} aria-label="Previous photo">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button className="pcar-btn pcar-next" onClick={() => go(1)} aria-label="Next photo">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <div className="pcar-count">{String(i + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</div>
    </div>
  )
}
