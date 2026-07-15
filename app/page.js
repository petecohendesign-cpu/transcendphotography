'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

const SLIDES = [
  {
    num: '01', title: 'Weddings & Couples', label: 'Weddings & Couples',
    desc: 'Full-day documentary coverage for the adventurous couple.',
    cta: 'Explore weddings', href: '/for-couples', img: '/images/wedding-first-dance-sparklers.jpg',
  },
  {
    num: '02', title: 'Branding & Lifestyle', label: 'Branding & Lifestyle',
    desc: 'Considered visual stories for restaurants, makers, and modern brands.',
    cta: 'Explore branding', href: '/brand-photography', img: '/images/branding-pc-11.jpg',
  },
  {
    num: '03', title: 'Portrait Sessions', label: 'Portrait Sessions',
    desc: 'Intimate, editorial portraiture for individuals and creatives.',
    cta: 'Explore portraits', href: '/portraits', img: '/images/portrait-pc-11.jpg', pos: 'center 18%',
  },
]

const CARDS = [
  { num: '01', title: 'Weddings & Couples', desc: 'Documentary & editorial wedding coverage.', img: '/images/wedding-pc-4.jpg', href: '/for-couples' },
  { num: '02', title: 'Branding & Lifestyle', desc: 'Product, food & commercial storytelling.', img: '/images/branding-pc-1-vert-hd.jpg', href: '/brand-photography' },
  { num: '03', title: 'Portrait Sessions', desc: 'Personal, lifestyle & creative portraits.', img: '/images/portrait-pc-4.jpg', href: '/portraits' },
]

export default function Home() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <Nav variant="overlay" />
      <Reveal />

      {/* Hero slideshow */}
      <div className="hero">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hslide${i === idx ? ' active' : ''}`}>
            <Image src={s.img} alt={s.title} fill sizes="100vw" priority={i === 0} style={{ objectFit: 'cover', objectPosition: s.pos || 'center' }} />
            <div className="hscrim" />
          </div>
        ))}

        {/* Hero content — updates with active slide */}
        <div className="hcontent">
          <p className="hsub">{SLIDES[idx].desc}</p>
          <a className="harrow" href={SLIDES[idx].href}>{SLIDES[idx].cta} &nbsp;&rarr;</a>
        </div>

        {/* Service switcher */}
        <div className="hservices">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              className={`hservice${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
            >
              <span className="hservice-num">{s.num}</span>
              <span className="hservice-name">{s.label}</span>
            </button>
          ))}
        </div>

        <div className="hscroll">Scroll</div>
      </div>

      {/* Approach */}
      <section className="section wrap approach reveal">
        <div className="label">The approach</div>
        <p className="serif">
          I photograph the way moments actually <em>feel</em> — unhurried, honest,
          a little cinematic. Whatever I&rsquo;m pointing the camera at, the result is
          something you&rsquo;ll return to for decades.
        </p>
      </section>

      {/* Services 3-up */}
      <section className="wrap" style={{ padding: '20px 48px 120px' }}>
        <div className="reveal center" style={{ marginBottom: '64px' }}>
          <div className="label" style={{ marginBottom: '18px' }}>What I offer</div>
          <h2 className="h2">Three ways to work together</h2>
        </div>
        <div className="services">
          {CARDS.map((c, i) => (
            <a key={i} className="scard reveal" href={c.href}>
              <div className="imgblk" style={{ aspectRatio: '4 / 5', position: 'relative' }}>
                <Image src={c.img} alt={c.title} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="slabel">{c.num}</div>
              <div className="stitle">{c.title}</div>
              <div className="sdesc">{c.desc}</div>
              <div className="nlink" style={{ marginTop: '14px' }}>Explore</div>
            </a>
          ))}
        </div>
      </section>

      {/* Editorial band */}
      <div className="wrap reveal">
        <div className="imgblk" style={{ height: '600px', position: 'relative' }}>
          <Image src="/images/wedding-flower-bridge.jpg" alt="Wedding couple on the flower bridge" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>

      {/* Quote */}
      <section className="section quote">
        <div className="mark reveal">&ldquo;</div>
        <p className="reveal">
          Pete will make sure your photos are the kind you want to look at time and
          time again — because they truly are a work of art.
        </p>
        <div className="label reveal">S &amp; M &nbsp;·&nbsp; Married in Connecticut</div>
      </section>

      {/* About teaser */}
      <section className="section wrap split reveal">
        <div className="imgblk" style={{ height: '560px', position: 'relative' }}>
          <Image src="/images/wedding-venue-cellar.jpg" alt="On location" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <div className="label" style={{ marginBottom: '26px' }}>Behind the lens</div>
          <h2>A musician&rsquo;s eye,<br />an editor&rsquo;s <em>restraint</em></h2>
          <p>Berklee-trained musician turned photographer and designer. A decade behind the camera across two coasts, from intimate elopements to two-day celebrations of 200.</p>
          <p>Every frame is approached like a creative direction — composed, intentional, and unmistakably yours.</p>
          <a className="arrow" href="/about" style={{ marginTop: '16px', display: 'inline-block' }}>Read the full story</a>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="section wrap reveal">
        <div className="center" style={{ marginBottom: '60px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Insights &amp; perspectives</div>
          <h2 className="h2">Read the photography journal</h2>
        </div>
        <div style={{ background: 'var(--bone-2)', padding: '48px', borderRadius: '2px', textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--taupe)', lineHeight: 1.6, marginBottom: '28px', maxWidth: '640px', margin: '0 auto 28px' }}>
            Ideas on light, composition, and the philosophy behind the work. Essays and guides to help you think differently about how photographs can tell your story.
          </p>
          <a href="/blog" className="arrow" style={{ display: 'inline-block' }}>Visit the blog</a>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="label reveal" style={{ marginBottom: '30px' }}>Now booking 2026 &amp; 2027</div>
        <h2 className="reveal">Let&rsquo;s create something<br /><em>worth keeping</em></h2>
        <div className="reveal" style={{ marginTop: '44px' }}>
          <a className="btn btn-light" href="/contact">Begin an inquiry</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
