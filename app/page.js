'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import IntroLoader from './components/IntroLoader'
import CategoryCarousel from './components/CategoryCarousel'

const SLIDES = [
  {
    num: '01', title: 'Branding & Lifestyle', label: 'Branding & Lifestyle',
    desc: 'Considered visual stories for restaurants, makers, and modern brands.',
    cta: 'Explore branding', href: '/brand-photography',
    img: '/images/branding-mediamonks-mural.jpg', imgMobile: '/images/hero-m-branding-mural.jpg',
  },
  {
    num: '02', title: 'Weddings & Couples', label: 'Weddings & Couples',
    desc: 'Full-day documentary coverage for the adventurous couple.',
    cta: 'Explore weddings', href: '/for-couples',
    img: '/images/wedding-hero-veil.jpg', imgMobile: '/images/hero-m-wedding-v2.jpg',
  },
  {
    num: '03', title: 'Portrait Sessions', label: 'Portrait Sessions',
    desc: 'Intimate, editorial portraiture for individuals and creatives.',
    cta: 'Explore portraits', href: '/portraits', pos: 'center 18%',
    img: '/images/portrait-pc-11.jpg', imgMobile: '/images/hero-m-portrait.jpg',
  },
]

const CARDS = [
  { num: '01', title: 'Weddings & Couples', desc: 'Documentary & editorial wedding coverage.', img: '/images/wedding-pc-4.jpg', href: '/for-couples' },
  { num: '02', title: 'Branding & Lifestyle', desc: 'Product, food & commercial storytelling.', img: '/images/branding-claudine-2.jpg', href: '/brand-photography' },
  { num: '03', title: 'Portrait Sessions', desc: 'Personal, lifestyle & creative portraits.', img: '/images/portrait-pc-3.jpg', href: '/portraits' },
]

export default function Home() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <IntroLoader />
      <Nav variant="overlay" />
      <Reveal />

      {/* Hero slideshow */}
      <div className="hero">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hslide${i === idx ? ' active' : ''}`}>
            <picture>
              <source media="(max-width: 768px)" srcSet={s.imgMobile} />
              <img
                src={s.img}
                alt={s.title}
                loading="eager"
                fetchPriority={i === 0 ? 'high' : 'auto'}
                style={{ objectPosition: s.pos || 'center' }}
              />
            </picture>
            <div className="hscrim" />
          </div>
        ))}

        {/* Hero content, updates with active slide */}
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

        {/* Mobile-only hero text: focused on the active slide, re-animates on change */}
        <div className="hmobile">
          <div className="hm-switch">
            {SLIDES.map((s, i) => (
              <div key={i} className={`hm-row${i === idx ? ' active' : ''}`}>
                <button className="hm-opt" onClick={() => setIdx(i)}>
                  <span className="hm-opt-num">{s.num}</span>
                  <span className="hm-opt-name">{s.label}</span>
                </button>
                {i === idx && (
                  <div className="hm-text">
                    <p className="hm-desc">{s.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <a className="hm-cta" href={SLIDES[idx].href} key={idx}>
            {SLIDES[idx].cta} &nbsp;&rarr;
          </a>
        </div>

        <div className="hscroll">Scroll</div>
      </div>

      {/* Approach */}
      <section className="section wrap approach reveal">
        <div className="label">The approach</div>
        <p className="serif">
          I photograph the way moments actually <em>feel</em>, unhurried, honest,
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

      {/* Category carousel: one full-width slide per category, scroll left/right */}
      <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="reveal center wrap" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>In their words</div>
          <h2 className="h2">The work, and the words that followed</h2>
        </div>
        <div className="reveal">
          <CategoryCarousel
            items={[
              {
                short: 'Weddings',
                label: 'Weddings & Couples',
                src: '/images/wedding-flower-bridge.jpg',
                alt: 'Wedding couple on the flower bridge',
                quote: '“Pete will make sure your photos are the kind you want to look at time and time again, because they truly are a work of art.”',
                cite: 'S & M  ·  Married in Connecticut',
                href: '/for-couples',
                cta: 'Explore weddings',
              },
              {
                short: 'Branding',
                label: 'Branding & Lifestyle',
                src: '/images/branding-bubles-giftbox.jpg',
                alt: 'Bubles Champagne gift box, styled and shot on location',
                quote: '“Pete is exceptional! We collaborated on a ‘Wedding Vibes’ photo shoot style, and he delivered! Cheers to amazing!”',
                cite: 'Maya Camara  ·  Bubles Champagne',
                href: '/brand-photography',
                cta: 'Explore branding',
              },
              {
                short: 'Portraits',
                label: 'Portrait Sessions',
                src: '/images/portrait-pc-18.jpg',
                alt: 'Family portrait at golden hour',
                quote: '“He took the chaotic nature of wrangling 2 young kids for pictures and made it relaxed and easy. The pictures went above and beyond our expectations.”',
                cite: 'Karen Fadul  ·  Family session',
                href: '/portraits',
                cta: 'Explore portraits',
              },
            ]}
          />
        </div>
      </section>

      {/* About teaser */}
      <section className="section wrap split reveal">
        <div className="imgblk" style={{ height: '560px', position: 'relative' }}>
          <Image src="/images/branding-pc-11.jpg" alt="Il Nido pasta dish" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <div className="label" style={{ marginBottom: '26px' }}>Behind the lens</div>
          <h2>Every good story<br />deserves a <em>photographer</em></h2>
          <p>I&rsquo;m Pete, a Los Angeles photographer with a decade behind the camera across two coasts, from intimate elopements to brand shoots to two-day celebrations of 200.</p>
          <p>Every frame is approached like a creative direction, composed, intentional, and unmistakably yours.</p>
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
