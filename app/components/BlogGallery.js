'use client'

import { useRef, useState, useEffect } from 'react'

export default function BlogGallery({ images }) {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 400
    const targetScroll =
      container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    })

    // Update button states after scroll
    setTimeout(checkScroll, 300)
  }

  return (
    <div className="blog-gallery-wrapper">
      <button
        className={`gallery-nav gallery-nav-left${!canScrollLeft ? ' disabled' : ''}`}
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
      >
        ←
      </button>

      <div
        className="blog-gallery"
        ref={scrollContainerRef}
        onScroll={checkScroll}
      >
        {images.map((src, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="gallery-image"
              style={{
                '--image-index': i,
              }}
            />
          </div>
        ))}
      </div>

      <button
        className={`gallery-nav gallery-nav-right${!canScrollRight ? ' disabled' : ''}`}
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        aria-label="Scroll right"
      >
        →
      </button>
    </div>
  )
}
