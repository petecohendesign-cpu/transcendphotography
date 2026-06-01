'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '/for-couples', label: 'Weddings' },
  { href: '/brand-photography', label: 'Branding' },
  { href: '/portraits', label: 'Portraits' },
  { href: '/about', label: 'About' },
  { href: '/for-couples', label: 'Inquire' },
]

/**
 * Sticky navigation.
 * - variant="overlay" (default): transparent over a dark hero, turns solid on scroll. Use on pages with a full-bleed image hero.
 * - variant="solid": always solid bone background. Use on pages without a dark hero.
 */
export default function Nav({ variant = 'overlay' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (variant !== 'overlay') return
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [variant])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const cls = ['', variant === 'solid' ? 'solid' : scrolled ? 'scrolled' : '', open ? 'menu-open' : '']
    .filter(Boolean).join(' ')

  return (
    <>
      <nav className={cls}>
        <a className="brand" href="/">
          <img className="logo" src="/images/logo.png" alt="Transcend Photography" />
          <span style={{ lineHeight: 1 }}>
            <span className="wm1" style={{ display: 'block' }}>TRANSCEND</span>
            <span className="wm2" style={{ display: 'block' }}>PHOTOGRAPHY</span>
          </span>
        </a>
        <div className="navlinks">
          {LINKS.map((l, i) => (
            <a key={i} className="nlink" href={l.href}>{l.label}</a>
          ))}
        </div>
        <button className="navtoggle" aria-label="Open menu" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobilemenu${open ? ' open' : ''}`}>
        {LINKS.map((l, i) => (
          <a key={i} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
