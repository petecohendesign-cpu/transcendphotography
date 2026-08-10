'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import LivingTile from '../components/LivingTile'
import NativeFrame from '../components/NativeFrame'
import QuickContact from '../components/QuickContact'

const OFFERS = [
  ['Personal branding', 'Headshots and brand portraits for creatives, founders, and professionals.'],
  ['Lifestyle portraits', 'Natural, candid sessions in the places that mean something to you.'],
  ['Musicians & artists', 'Editorial portraits for press kits, releases, and the work itself.'],
  ['Families & couples', 'Warm, genuine portraits, no stiff poses, just you.'],
  ['Studio or location', 'Clean studio light or out in the world, whichever suits the story.'],
  ['Mini sessions', 'Short, focused sittings, a relaxed way to start.'],
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

const FAQ = [
  ['How much do portrait sessions cost in Los Angeles?', 'Sessions start at $650 for a 45-minute Mini, $1,200 for the 90-minute Signature, and $2,500 for a half-day Editorial session with full creative direction.'],
  ['What types of portraits do you photograph?', 'Professional headshots, personal branding portraits, actors and creatives, families, couples, and personal editorial work, all with a relaxed, documentary approach.'],
  ['Do sessions take place in a studio or on location?', 'Both. I shoot in-studio and on location across Los Angeles, and we choose the setting that fits your style and the mood you want.'],
  ['Do you help with wardrobe and styling?', 'Yes. Signature and Editorial sessions include wardrobe and styling guidance, and Editorial sessions can add hair and makeup coordination.'],
  ['Do you photograph families?', 'Absolutely. Family sessions are relaxed and unposed, focused on real connection and natural moments rather than stiff, formal poses.'],
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

export default function Portraits() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Portrait Sessions"
        title={<>Portraits that capture<br />who you really are</>}
        slides={[
          { src: '/images/portrait-pc-4.jpg',  alt: 'Portrait of a musician with his guitar' },
          { src: '/images/portrait-pc-1.jpg',  alt: 'Editorial portrait on the Manhattan waterfront' },
          { src: '/images/portrait-pc-8.jpg',  alt: 'Father and child portrait' },
          { src: '/images/portrait-pc-9.jpg',  alt: 'Studio headshot' },
          { src: '/images/portrait-pc-6.jpg',  alt: 'Lifestyle portrait outdoors' },
          { src: '/images/portrait-pc-2.jpg',  alt: 'Portrait in the city at night' },
          { src: '/images/portrait-pc-12.jpg', alt: 'Editorial portrait of actor Dominic Pace' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For individuals & creatives</div>
        <p className="serif">
          Intimate, editorial portraiture, the kind that captures presence, not just
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
        {/* Editorial rows: every image at its native aspect ratio, zero cropping. */}
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-pc-5.jpg" alt="Studio portrait" w={1602} h={2400} drift={14} style={{ flex: '0.667 1 0%' }} />
          <LivingTile
            aspect="3 / 2"
            style={{ flex: '1.5 1 0%' }}
            sizes="(max-width: 760px) 100vw, 65vw"
            delay={0}
            slides={[
              { src: '/images/portrait-pc-10.jpg', alt: 'Studio portrait with camera' },
              { src: '/images/portrait-pc-3.jpg', alt: 'Editorial portrait in a parking structure' },
            ]}
          />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-pc-7.jpg" alt="Mother and son portrait" w={2400} h={1602} drift={16} style={{ flex: '1.498 1 0%' }} />
          <NativeFrame src="/images/portrait-pc-11.jpg" alt="Studio portrait" w={2400} h={1602} drift={10} style={{ flex: '1.498 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-pc-16.jpg" alt="Family portrait with newborn, black and white" w={2000} h={1335} drift={12} style={{ flex: '1.498 1 0%' }} />
          <LivingTile
            aspect="3 / 2"
            style={{ flex: '1.5 1 0%' }}
            sizes="(max-width: 760px) 100vw, 50vw"
            delay={2600}
            slides={[
              { src: '/images/portrait-pc-14.jpg', alt: 'Graduation portrait at UCLA' },
              { src: '/images/portrait-pc-18.jpg', alt: 'Family of four at golden hour' },
              { src: '/images/portrait-pc-15.jpg', alt: 'Graduate holding her tassel' },
            ]}
          />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-pc-17.jpg" alt="Mother and child walking a garden path" w={2000} h={1461} drift={16} style={{ flex: '1.369 1 0%' }} />
          <NativeFrame src="/images/portrait-pc-13.jpg" alt="Editorial portrait of actor Dominic Pace at night" w={2400} h={1600} drift={12} style={{ flex: '1.5 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-christine.jpg" alt="Dramatic editorial portrait" w={1500} h={1001} drift={14} style={{ flex: '1.499 1 0%' }} />
          <NativeFrame src="/images/portrait-danilo.jpg" alt="Studio portrait of a man" w={1200} h={1200} drift={10} style={{ flex: '1 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-heather.jpg" alt="Night portrait with city bokeh" w={1500} h={1001} drift={16} style={{ flex: '1.499 1 0%' }} />
          <NativeFrame src="/images/portrait-james.jpg" alt="Cinematic portrait under string lights" w={1500} h={1001} drift={12} style={{ flex: '1.499 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-family-2.jpg" alt="Family portrait with dog on the waterfront" w={1500} h={1001} drift={12} style={{ flex: '1.499 1 0%' }} />
          <NativeFrame src="/images/portrait-udins.jpg" alt="Family portrait, father with child on his shoulders" w={1439} h={1439} drift={14} style={{ flex: '1 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/portrait-couple.jpg" alt="Couple portrait at golden hour" w={1200} h={1200} drift={10} style={{ flex: '1 1 0%' }} />
          <NativeFrame src="/images/portrait-danilo-bw.jpg" alt="Black and white studio portrait" w={1500} h={844} drift={16} style={{ flex: '1.777 1 0%' }} />
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

      {/* Local SEO content + FAQ */}
      <section className="section wrap reveal">
        <div className="center" style={{ marginBottom: '36px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Los Angeles portrait photography</div>
          <h2 className="h2">Portrait photography across LA</h2>
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p style={{ marginBottom: '18px' }}>
            As a Los Angeles portrait photographer, I create relaxed, editorial portraits for professionals, creatives, actors, families, and anyone who wants images that feel like themselves. Sessions happen in-studio or on location across LA, with a documentary eye that keeps things natural rather than stiff or overly posed.
          </p>
          <p>
            Whether you need a standout headshot, a personal branding set, or a family session to remember, I&rsquo;d love to help. See a recent <a href="/blog/mothers-day-los-angeles-family-portraits">family portrait session in LA</a> for a feel of the experience.
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
          <h2 className="h2">Book your session</h2>
        </div>
        <div className="reveal"><HoneyBook placement="2" /></div>
      </section>

      <Footer />
    </>
  )
}
