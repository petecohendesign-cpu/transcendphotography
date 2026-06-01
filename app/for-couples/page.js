'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'

const OFFERS = [
  ['All-day coverage', 'From getting ready to the last dance — every moment, captured with intention.'],
  ['Engagement sessions', 'A relaxed way to add depth to your story and get comfortable on camera.'],
  ['Highlight films', 'A cinematic edit of your best moments, made to share and revisit.'],
  ['Custom collections', 'Packages shaped around your timeline, vision, and budget.'],
  ['35mm film add-on', 'Analog grain and a timeless, one-of-a-kind texture alongside digital.'],
  ['Sneak-peek galleries', 'A first selection within days, so you can relive it right away.'],
]

const STEPS = [
  ['Consultation', 'A relaxed 30-minute call to talk through your vision, vibe, and what matters most.'],
  ['Custom proposal', 'A tailored proposal built around your story, timeline, and budget.'],
  ['Reserve the date', 'A signed agreement and retainer secures your day on the calendar.'],
  ['Collaborate & celebrate', 'We stay close through the journey, then deliver a gallery you\u2019ll keep for life.'],
]

const TIERS = [
  {
    name: 'The Elopement',
    price: '$4,500',
    note: 'Intimate & elopements',
    items: ['Up to 4 hours of coverage', 'Single photographer', 'Private online gallery', 'High-resolution downloads', 'Print release'],
  },
  {
    name: 'The Celebration',
    price: '$8,500',
    note: 'Most requested',
    feature: true,
    items: ['Up to 8 hours of coverage', 'Second shooter included', 'Engagement session', 'Sneak-peek gallery in 72 hours', 'Full gallery, 600+ edited images'],
  },
  {
    name: 'The Full Story',
    price: '$14,000',
    note: 'The complete experience',
    items: ['Up to 12 hours of coverage', 'Second shooter & assistant', 'Engagement session + 35mm film', 'Cinematic highlight film', 'Heirloom fine-art album'],
  },
]

export default function Weddings() {
  return (
    <>
      <Nav variant="overlay" />
      <Reveal />

      <header className="pagehero">
        <img src="/images/wedding-flower-bridge.jpg" alt="Wedding couple on the flower bridge" />
        <div className="hscrim" />
        <div className="inner">
          <div className="label">Weddings &amp; Couples</div>
          <h1>Vibrant &amp; timeless<br />wedding photography</h1>
        </div>
      </header>

      <section className="section wrap approach reveal">
        <div className="label">For the two of you</div>
        <p className="serif">
          A wedding moves fast. My work is to slow it down — to hold the glances,
          the nerves, the joy — in images that still feel <em>alive</em> decades from now.
        </p>
      </section>

      <section className="wrap" style={{ padding: '10px 48px 110px' }}>
        <div className="reveal center" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>The experience</div>
          <h2 className="h2">What&rsquo;s included</h2>
        </div>
        <div className="offers reveal">
          {OFFERS.map(([t, d], i) => (
            <div key={i} className="offer"><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: '110px' }}>
        <div className="gal gal-2 reveal">
          <div className="imgblk tall" style={{ height: '660px' }}>
            <img src="/images/wedding-bw-railing.jpg" alt="Black and white couple portrait" />
          </div>
          <div className="imgblk" style={{ height: '318px' }}>
            <img src="/images/wedding-bride-reading.jpg" alt="Bride reading before the ceremony" />
          </div>
          <div className="imgblk" style={{ height: '318px' }}>
            <img src="/images/wedding-cake.jpg" alt="Wedding cake detail" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bone-2)' }}>
        <div className="reveal center" style={{ marginBottom: '60px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>How it works</div>
          <h2 className="h2">A simple, considered process</h2>
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
          <h2 className="h2">Wedding collections</h2>
        </div>
        <div className="pricing reveal">
          {TIERS.map((t, i) => (
            <div key={i} className={`tier${t.feature ? ' feature' : ''}`}>
              {t.feature && <span className="tbadge">Most popular</span>}
              <div className="tname">{t.name}</div>
              <div className="tprice">{t.price}<small> starting</small></div>
              <div className="tnote">{t.note}</div>
              <ul>{t.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Every wedding is unique — collections are a starting point and can be tailored to
          your timeline and vision. Custom quotes available on request.
        </p>
      </section>

      <section className="section quote">
        <div className="mark reveal">&ldquo;</div>
        <p className="reveal">
          We are filled with fond memories of how special our day was — and how easy
          and fun it was to shoot them with Pete.
        </p>
        <div className="label reveal">T &amp; M</div>
      </section>

      <section className="section wrap" id="inquire">
        <div className="reveal center" style={{ marginBottom: '48px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Begin</div>
          <h2 className="h2">Tell me about your day</h2>
        </div>
        <div className="reveal"><HoneyBook placement="4" /></div>
      </section>

      <Footer />
    </>
  )
}
