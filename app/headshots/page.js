'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import NativeFrame from '../components/NativeFrame'
import QuickContact from '../components/QuickContact'
import TrustStrip from '../components/TrustStrip'

// NOTE: placeholder images from the portrait library — swap in real
// professional/corporate headshots (business attire, clean backgrounds) before launch.
const TIERS = [
  {
    name: 'Individual Session',
    price: 'Starting at $350',
    note: 'For one person',
    items: [
      '30–45 minute session',
      'One clean studio or on-location setup',
      'A range of expressions and angles',
      '3 final retouched images',
      'LinkedIn, website, and print crops',
    ],
  },
  {
    name: 'Team Headshot Day',
    price: '$1,500',
    note: 'On site, up to 12 people',
    feature: true,
    items: [
      'I come to your office or location',
      'Consistent lighting and background for the whole team',
      'Up to 12 people',
      'One retouched final per person',
      'Quick turnaround, ready-to-use crops',
    ],
  },
]

const STEPS = [
  ['Reach out', 'Tell me whether it’s one headshot or a full team, and when you need them.'],
  ['Quick prep', 'I send a short what-to-wear guide so everyone shows up camera-ready.'],
  ['The session', 'Fast, relaxed, and well-lit — most people are done in a few minutes.'],
  ['Delivery', 'Retouched finals in LinkedIn, website, and print crops, delivered quickly.'],
]

const FAQ = [
  ['What should I wear for a professional headshot?', 'Solid colors you feel confident in, in the style your industry expects — a blazer, a clean shirt, or smart casual. I send a short what-to-wear guide before every session so you arrive ready.'],
  ['Can you photograph our whole team on site?', 'Yes. The Team Headshot Day brings a consistent studio setup to your office or location for up to 12 people, so everyone’s headshots match across your website and LinkedIn.'],
  ['What’s the turnaround?', 'Individual sessions are delivered quickly, and team days are turned around fast so you can roll out a consistent look across the company without a long wait.'],
  ['Is retouching included?', 'Yes. Every final image includes natural, professional retouching — polished but still clearly you, never over-processed.'],
  ['What can I use the headshots for?', 'Your finals come in LinkedIn, website, and print-ready crops, licensed for your professional and business use across those channels.'],
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function Headshots() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Headshots"
        title={<>Professional headshots<br />that look like your best day</>}
        slides={[
          { src: '/images/portrait-pc-11.jpg', alt: 'Professional headshot of a man in a studio' },
          { src: '/images/portrait-pc-9.jpg', alt: 'Studio headshot of a man' },
          { src: '/images/portrait-danilo.jpg', alt: 'Professional headshot in warm studio light' },
          { src: '/images/portrait-danilo-bw.jpg', alt: 'Black and white professional headshot' },
          { src: '/images/portrait-pc-10.jpg', alt: 'Editorial studio headshot' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For professionals & teams</div>
        <p className="serif">
          Clean, confident headshots for the people behind the work, made for LinkedIn,
          your website, and the press. Professional, not theatrical, and unmistakably <em>you</em>.
        </p>
        <p style={{ marginTop: '20px', color: 'var(--taupe)', lineHeight: 1.7, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
          These are business headshots for professionals and teams — not acting or theatrical
          headshots. If you need a headshot for work, your company page, or a whole team, you&rsquo;re
          in the right place.
        </p>
      </section>

      <section className="section wrap" id="investment">
        <div className="reveal center" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Investment</div>
          <h2 className="h2">Two ways to book</h2>
        </div>
        <div className="pricing reveal">
          {TIERS.map((t, i) => (
            <div key={i} className={`tier${t.feature ? ' feature' : ''}`}>
              {t.feature && <span className="tbadge">On-site team day</span>}
              <div className="tname">{t.name}</div>
              <div className="tprice">{t.price}</div>
              <div className="tnote">{t.note}</div>
              <ul>{t.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Larger teams and additional retouched images quoted on request.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: '110px' }}>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-pc-11.jpg" alt="Professional headshot of a man in a studio" w={2400} h={1602} drift={14} style={{ flex: '1.498 1 0%' }} />
          <NativeFrame src="/images/portrait-danilo.jpg" alt="Professional headshot in warm studio light" w={1200} h={1200} drift={10} style={{ flex: '1 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-pc-9.jpg" alt="Studio headshot of a man" w={2400} h={1350} drift={12} style={{ flex: '1.777 1 0%' }} />
          <NativeFrame src="/images/portrait-danilo-bw.jpg" alt="Black and white professional headshot" w={1500} h={844} drift={16} style={{ flex: '1.777 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-pc-10.jpg" alt="Editorial studio headshot" w={2400} h={1602} drift={12} style={{ flex: '1.498 1 0%' }} />
          <NativeFrame src="/images/portrait-james.jpg" alt="Professional headshot in a blazer" w={1500} h={1001} drift={14} style={{ flex: '1.499 1 0%' }} />
        </div>
      </section>

      <section className="section wrap reveal" style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p>
            After years photographing teams and creatives for agencies like Media.Monks, I know how
            to make people feel at ease fast and still look sharp. Every headshot is delivered in
            LinkedIn, website, and print-ready crops, so it&rsquo;s ready to use the moment you get it.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bone-2)' }}>
        <div className="reveal center" style={{ marginBottom: '60px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>How it works</div>
          <h2 className="h2">Simple and quick</h2>
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

      <section className="section wrap reveal">
        <div className="center" style={{ marginBottom: '36px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Los Angeles headshot photography</div>
          <h2 className="h2">Professional headshots across LA</h2>
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p>
            As a Los Angeles headshot photographer, I create clean, professional headshots for
            individuals and teams — founders, executives, creatives, realtors, and whole companies
            that want a consistent look. Sessions happen in-studio, on location, or on-site at your
            office across LA.
          </p>
        </div>
        <div style={{ maxWidth: '760px', margin: '52px auto 0' }}>
          <h2 className="h2" style={{ textAlign: 'center', marginBottom: '30px' }}>Common questions</h2>
          {FAQ.map(([q, a], i) => (
            <div key={i} style={{ borderTop: '1px solid var(--hairline)', padding: '22px 0' }}>
              <h3 style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 400, fontSize: '20px', marginBottom: '10px', color: 'var(--espresso)' }}>{q}</h3>
              <p style={{ color: 'var(--taupe)', lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap" id="inquire">
        <div className="reveal center" style={{ marginBottom: '48px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Begin</div>
          <h2 className="h2">Book your headshots</h2>
        </div>
        <TrustStrip />
        <div className="reveal"><HoneyBook placement="2" /></div>
      </section>

      <Footer />
    </>
  )
}
