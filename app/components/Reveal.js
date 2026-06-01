'use client'

import { useEffect } from 'react'

/**
 * Drop <Reveal /> once near the top of a page. It watches every element with
 * the `reveal` class and adds `in` when it scrolls into view, triggering the
 * fade-up animation defined in globals.css.
 */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
