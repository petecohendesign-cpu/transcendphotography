'use client'

import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import QuickContact from '../components/QuickContact'

const OFFERS = [
  ['Product photography', 'Clean, considered product imagery and styled compositions that sell.'],
  ['Food & hospitality', 'Editorial restaurant and menu photography that makes people hungry.'],
  ['Lifestyle & team', 'Authentic images of your people, space, and product in motion.'],
  ['Location scouting', 'Help finding the right setting — or we shoot on yours.'],
  ['Retainer packages', 'A steady stream of fresh, on-brand content for brands that move quickly.'],
  ['Social-ready edits', 'Deliverables sized and sequenced for the feed, stories, and reels.'],
]

const STEPS = [
  ['Discovery call', 'We learn your brand, audience, and what success looks like for the project.'],
  ['Creative proposal', 'Custom pricing, a shot list, and a clear creative direction.'],
  ['Production', 'We bring the vision to life with professional gear and a calm set.'],
  ['Delivery & edits', 'A hi-res gallery with refined editing and revisions until it\u2019s right.'],
]

const TIERS = [
  {
    name: 'Half-Day',
    price: '$1,500',
    note: 'Up to 4 hours',
    items: ['Pre-shoot creative planning', 'One location', '30 edited high-res images', 'Social-ready crops included', 'Commercial usage license'],
  },
  {
    name: 'Full-Day',
    price: '$2,800',
    note: 'Most popular',
    feature: true,
    items: ['Up to 8 hours of production', 'Multiple setups & looks', '70+ edited high-res images', 'Product, lifestyle & team coverage', 'Extended commercial license'],
  },
  {
    name: 'Retainer',
    price: '$2,000',
    note: 'Per month',
    perMonth: true,
    items: ['Monthly content shoot', 'Steady, on-brand library', 'Priority scheduling', 'Sized for feed, stories & web', 'Quarterly creative planning'],
  },
]

export default function Branding() {
  return (
    <>
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Branding & Lifestyle"
        title={<>Photography that makes<br />your brand unmistakable</>}
        slides={[
          { src: '/images/branding-pc-11.jpg',       alt: 'Il Nido pasta dish' },
          { src: '/images/branding-pc-6.jpg',        alt: 'Claudine branding session' },
          { src: '/images/branding-ilnido-1.jpg',   alt: 'Il Nido editorial branding' },
          { src: '/images/branding-pc-2.jpg',        alt: 'Bubles gift box product photography' },
          { src: '/images/branding-claudine-1.jpg',  alt: 'Claudine Bakery' },
          { src: '/images/branding-pc-9.jpg',        alt: 'Brand lifestyle photography' },
          { src: '/images/branding-pc-1.jpg',        alt: 'Product photography' },
          { src: '/images/branding-bubles-1.jpg',    alt: 'Bubles product photography' },
          { src: '/images/branding-pc-7.jpg',        alt: 'Claudine portrait session' },
          { src: '/images/branding-muha-box.jpg',    alt: 'Muha Meds packaging' },
          { src: '/images/branding-pc-12.jpg',       alt: 'PodBox product photography' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For brands</div>
        <p className="serif">
          Cinematic, considered imagery for restaurants, makers, and modern brands —
          built to <em>look like you</em>, not like everyone else.
        </p>
      </section>

      <section className="wrap" style={{ padding: '10px 48px 110px' }}>
        <div className="reveal center" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Capabilities</div>
          <h2 className="h2">What we create</h2>
        </div>
        <div className="offers reveal">
          {OFFERS.map(([t, d], i) => (
            <div key={i} className="offer"><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: '110px' }}>
        <div className="gal gal-3 reveal">
          {[
            ['/images/branding-pc-11.jpg', 'Il Nido Fall 2025'],
            ['/images/branding-pc-6.jpg', 'Claudine branding session'],
            ['/images/branding-pc-2.jpg', 'Bubles gift box'],
            ['/images/branding-pc-3.jpg', 'Bubles product detail'],
            ['/images/branding-pc-8.jpg', 'Claudine portrait'],
            ['/images/branding-pc-1.jpg', 'Product photography'],
            ['/images/branding-pc-4.jpg', 'Bubles lifestyle'],
            ['/images/branding-pc-9.jpg', 'Brand lifestyle'],
            ['/images/branding-pc-7.jpg', 'Claudine editorial'],
            ['/images/branding-ilnido-2.jpg', 'Il Nido — editorial'],
            ['/images/branding-pc-12.jpg', 'PodBox product'],
            ['/images/branding-pc-5.jpg', 'Bubles gift set'],
            ['/images/branding-ilnido-3.jpg', 'Il Nido — detail'],
            ['/images/branding-muha-box.jpg', 'Muha Meds — packaging'],
            ['/images/branding-claudine-2.jpg', 'Claudine — interior'],
            ['/images/branding-pc-10.jpg', 'Brand editorial'],
          ].map(([src, cap], i) => (
            <div key={i} className="imgblk" style={{ aspectRatio: '1 / 1', position: 'relative' }}>
              <Image src={src} alt={cap} fill sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bone-2)' }}>
        <div className="reveal center" style={{ marginBottom: '60px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>How it works</div>
          <h2 className="h2">From brief to gallery</h2>
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
          <h2 className="h2">Project & retainer rates</h2>
        </div>
        <div className="pricing reveal">
          {TIERS.map((t, i) => (
            <div key={i} className={`tier${t.feature ? ' feature' : ''}`}>
              {t.feature && <span className="tbadge">Most popular</span>}
              <div className="tname">{t.name}</div>
              <div className="tprice">{t.price}<small>{t.perMonth ? '/mo' : ' starting'}</small></div>
              <div className="tnote">{t.note}</div>
              <ul>{t.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Every brand brief is different — final pricing reflects scope, deliverables, and
          usage. Reach out for a tailored proposal.
        </p>
      </section>

      <section className="section wrap" id="inquire">
        <div className="reveal center" style={{ marginBottom: '48px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Begin</div>
          <h2 className="h2">Let&rsquo;s build your library</h2>
        </div>
        <div className="reveal"><HoneyBook placement="12" /></div>
      </section>

      <Footer />
    </>
  )
}
