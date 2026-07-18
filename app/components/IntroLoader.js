'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * IntroLoader — a one-time brand entrance for the homepage.
 *
 * Sequence (~2.6s): the monogram irises in through a circular wipe (an
 * aperture opening), the wordmark tracks in beneath it, a clay hairline
 * draws, then the whole curtain lifts to reveal the hero, with the logo
 * drifting slightly slower for depth.
 *
 * Plays once per browser session (sessionStorage), skips entirely for
 * prefers-reduced-motion, and an inline script hides it pre-paint on
 * repeat visits so there is never a flash.
 */
const KEY = 'tp-intro-played'

export default function IntroLoader() {
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const el = document.getElementById('tp-intro')
    if (!el || el.style.display === 'none') { setGone(true); return }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem(KEY, '1')
      setGone(true)
      return
    }
    sessionStorage.setItem(KEY, '1')
    document.documentElement.classList.add('intro-lock')
    const t = setTimeout(() => {
      document.documentElement.classList.remove('intro-lock')
      setGone(true)
    }, 3350)
    return () => {
      clearTimeout(t)
      document.documentElement.classList.remove('intro-lock')
    }
  }, [])

  if (gone) return null

  return (
    <>
      <div id="tp-intro" className="intro" aria-hidden="true">
        <div className="intro-inner">
          <div className="intro-mark">
            <Image src="/images/logo-mark.png" alt="" width={280} height={259} priority />
          </div>
          <div className="intro-word">TRANSCEND</div>
          <div className="intro-sub">PHOTOGRAPHY</div>
          <div className="intro-rule" />
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{if(sessionStorage.getItem('${KEY}')){var e=document.getElementById('tp-intro');if(e)e.style.display='none'}}catch(e){}`,
        }}
      />
    </>
  )
}
