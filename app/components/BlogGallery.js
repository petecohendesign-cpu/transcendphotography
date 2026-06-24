'use client'

import { useRef, useState, useEffect } from 'react'

export default function BlogGallery({ images }) {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    const el = scrollContainerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    // Check after mount and after a short delay to let images size up
    checkScroll()
    const t = setTimeout(checkScroll, 300)
    window.addEventListener('resize', checkScroll)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', checkScroll)
    }
  }, [images])

  const scroll = (direction) => {
    const el = scrollContainerRef.current
    if (!el) return
    el.scrollTo({
      left: el.scrollLeft + (direction === 'left' ? -420 : 420),
      behavior: 'smooth',
    })
    setTimeout(checkScroll, 350)
  }

  return (
    <div className="blog-gallery-wrapper">
      <button
        className={`gallery-nav gallery-nav-left${!canScrollLeft ? ' disabled' : ''}`}
        onClick={() => canScrollLeft && scroll('left')}
        aria-label="Scroll left"
        aria-disabled={!canScrollLeft}
      >
        ←
      </button>

      <div
        className="blog-gallery"
        ref={scrollContainerRef}
        onScroll={checkScroll}
      >
        {images.map((image, i) => {
          const src = typeof image === 'string' ? image : image.src
          const alt = typeof image === 'string' ? `Gallery image ${i + 1}` : image.alt
          return (
            <div key={i} className="gallery-image-wrapper">
              <img
                src={src}
                alt={alt}
                className="gallery-image"
                onLoad={checkScroll}
              />
            </div>
          )
        })}
      </div>

      <button
        className={`gallery-nav gallery-nav-right${!canScrollRight ? ' disabled' : ''}`}
        onClick={() => canScrollRight && scroll('right')}
        aria-label="Scroll right"
        aria-disabled={!canScrollRight}
      >
        →
      </button>
    </div>
  )
}
