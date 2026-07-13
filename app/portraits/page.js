'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import ParallaxImage from '../components/ParallaxImage'
import QuickContact from '../components/QuickContact'

const OFFERS = [
  ['Personal branding', 'Headshots and brand portraits for creatives, founders, and professionals.'],
  ['Lifestyle portraits', 'Natural, candid sessions in the places that mean something to you.'],
  ['Musicians & artists', 'Editorial portraits for press kits, releases, and the work itself.'],
  ['Families & couples', 'Warm, genuine portraits — no stiff poses, just you.'],
  ['Studio or location', 'Clean studio light or out in the world, whichever suits the story.'],
  ['Mini sessions', 'Short, focused sittings — a relaxed way to start.'],
]

const STEPS = [
  ['Book a session', 'Choose a length and direction, and tell me what you want it to feel like.'],
  ['Pre-session chat', 'We talk wardrobe and location so you arrive relaxed and ready.'],
  ['The shoot', 'A comfortable, easy experience with gentle direction throughout.'],
  ['Your gallery', 'Refined, hi-res images delivered in a private gallery within two weeks.'],
]

const TIERS = [
  {
    name: 'The Mini',
    price: '$650',
    note: 'A relaxed start',
    items: ['45-minute session', 'One location or studio', 'One outfit', '15 edited high-res images', 'Private online gallery'],
  },
  {
    name: 'The Signature',
    price: '$1,200',
    note: 'Most popular',
    feature: true,
    items: ['90-minute session', 'Two locations or looks', 'Wardrobe & styling guidance', '40 edited high-res images', 'Print release included'],
  },
  {
    name: 'The Editorial',
    price: '$2,500',
    note: 'Full creative direction',
    items: ['Half-day session', 'Multiple looks & locations', 'Creative direction & moodboard', '80+ edited high-res images', 'Hair & makeup coordination'],
  },
]

export default function Portraits() {
  return (
    <>
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Portrait Sessions"
        title={<>Portraits that capture<br />who you really are</>}
        slides={[
          { src: '/images/portrait-pc-12.jpg', alt: 'Editorial portrait of actor Dominic Pace' },
          { src: '/images/portrait-pc-4.jpg',  alt: 'Editorial portrait' },
          { src: '/images/portrait-pc-8.jpg',  alt: 'Portrait session' },
          { src: '/images/portrait-pc-7.jpg',  alt: 'Editorial portrait' },
          { src: '/images/portrait-pc-9.jpg',  alt: 'Portrait session' },
          { src: '/images/portrait-pc-2.jpg',  alt: 'Editorial portrait' },
          { src: '/images/portrait-pc-3.jpg',  alt: 'Portrait session' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For individuals & creatives</div>
        <p className="serif">
          Intimate, editorial portraiture — the kind that captures presence, not just
          a likeness. Honest, considered, and unmistakably <em>yours</em>.
        </p>
      </section>

      <section className="wrap" style={{ padding: '10px 48px 110px' }}>
        <div className="reveal center" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Sessions</div>
          <h2 className="h2">Portrait styles</h2>
        </div>
        <div className="offers reveal">
          {OFFERS.map(([t, d], i) => (
            <div key={i} className="offer"><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: '110px' }}>
        <div className="gal gal-2 reveal">
          <ParallaxImage className="tall" style={{ height: '660px' }} speed={0.08} src="/images/portrait-pc-5.jpg" alt="Editorial portrait" sizes="60vw" />
          <ParallaxImage style={{ height: '318px' }} speed={0.18} src="/images/portrait-pc-1.jpg" alt="Editorial portrait" sizes="40vw" />
          <ParallaxImage style={{ height: '318px' }} speed={0.12} src="/images/portrait-pc-6.jpg" alt="Portrait session" sizes="40vw" />
        </div>
        <div className="gal gal-3 reveal" style={{ marginTop: '20px' }}>
          <ParallaxImage style={{ height: '440px' }} speed={0.16} src="/images/portrait-pc-10.jpg" alt="Editorial portrait" sizes="33vw" />
          <ParallaxImage style={{ height: '440px' }} speed={0.08} src="/images/portrait-pc-11.jpg" alt="Portrait session" sizes="33vw" />
          <ParallaxImage style={{ height: '440px' }} speed={0.16} src="/images/portrait-pc-13.jpg" alt="Editorial portrait of actor Dominic Pace" sizes="33vw" />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bone-2)' }}>
        <div className="reveal center" style={{ marginBottom: '60px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>How it works</div>
          <h2 className="h2">A relaxed, easy process</h2>
        </div>
        <div className="steps">
          {STEPS.map(([t, d], i) => (
            <div key={i} className="step reveal">
              <div className="sn">{`0${i + 1}`}</div>
              <div><h3>{t}</h3><p>{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap" id="investment">
        <div className="reveal center" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Investment</div>
          <h2 className="h2">Session pricing</h2>
        </div>
        <div className="pricing reveal">
          {TIERS.map((t, i) => (
            <div key={i} className={`tier${t.feature ? ' feature' : ''}`}>
              {t.feature && <span className="tbadge">Most popular</span>}
              <div className="tname">{t.name}</div>
              <div className="tprice">{t.price}</div>
              <div className="tnote">{t.note}</div>
              <ul>{t.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Additional edited images and prints available à la carte. Commercial and press
          usage quoted separately.
        </p>
      </section>

      <section className="section wrap" id="inquire">
        <div className="reveal center" style={{ marginBottom: '48px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Begin</div>
          <h2 className="h2">Book your session</h2>
        </div>
        <div className="reveal"><HoneyBook placement="2" /></div>
      </section>

      <Footer />
    </>
  )
}
