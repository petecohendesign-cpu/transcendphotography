'use client'

import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import QuickContact from '../components/QuickContact'
import TrustStrip from '../components/TrustStrip'

const OFFERS = [
  ['Product photography', 'Clean, considered product imagery and styled compositions that sell.'],
  ['Food & hospitality', 'Editorial restaurant and menu photography that makes people hungry.'],
  ['Lifestyle & team', 'Authentic images of your people, space, and product in motion.'],
  ['Location scouting', 'Help finding the right setting, or we shoot on yours.'],
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

const FAQ = [
  ['How much does brand photography cost in Los Angeles?', 'My brand sessions start at $1,500 for a half-day and $2,800 for a full day, with monthly content retainers from $2,000. Every project gets a custom quote based on your shot list and usage.'],
  ['What kinds of businesses do you photograph?', 'Restaurants and hospitality, product and e-commerce brands, makers, creative agencies, and personal brands, anyone who needs considered, on-brand imagery that actually sells.'],
  ['What areas of Los Angeles do you serve?', "I'm based in Encino and photograph brands across Los Angeles, from Santa Monica and West Hollywood to Downtown LA, Studio City, and the greater San Fernando Valley."],
  ['Can I use the photos for ads and commercial use?', 'Yes. Every brand shoot includes a commercial usage license, with extended licensing available for larger campaigns.'],
  ['Do you offer ongoing content for social media?', 'Yes. My monthly retainer delivers a steady, on-brand library sized for feed, stories, reels, and web, so you always have fresh content ready to post.'],
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

export default function Branding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Branding & Lifestyle"
        title={<>Photography that makes<br />your brand unmistakable</>}
        slides={[
          { src: '/images/branding-pc-11.jpg',       alt: 'Il Nido pasta dish' },
          { src: '/images/branding-mediamonks-building.jpg', alt: 'MediaMonks office building exterior' },
          { src: '/images/branding-pc-6.jpg',        alt: 'Claudine branding session' },
          { src: '/images/branding-mediamonks-neon.jpg',  alt: 'MediaMonks office neon sign' },
          { src: '/images/branding-pc-2.jpg',        alt: 'Bubles gift box product photography' },
          { src: '/images/branding-mediamonks-mural.jpg', alt: 'MediaMonks office lightning mural staircase' },
          { src: '/images/branding-claudine-1.jpg',  alt: 'Claudine Bakery' },
          { src: '/images/branding-pc-9.jpg',        alt: 'Brand lifestyle photography' },
          { src: '/images/branding-pc-1-hd.jpg',        alt: 'Product photography' },
          { src: '/images/branding-bubles-1.jpg',    alt: 'Bubles product photography' },
          { src: '/images/branding-pc-7.jpg',        alt: 'Claudine portrait session' },
          { src: '/images/branding-ilnido-1.jpg',   alt: 'Il Nido editorial branding' },
          { src: '/images/branding-pc-12.jpg',       alt: 'PodBox product photography' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For brands</div>
        <p className="serif">
          Cinematic, considered imagery for restaurants, makers, and modern brands, built to <em>look like you</em>, not like everyone else.
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
            ['/images/branding-pc-8.jpg', 'Claudine portrait'],
            ['/images/branding-pc-1-hd.jpg', 'Product photography'],
            ['/images/branding-pc-4.jpg', 'Bubles lifestyle'],
            ['/images/branding-pc-9.jpg', 'Brand lifestyle'],
            ['/images/branding-pc-7.jpg', 'Claudine editorial'],
            ['/images/branding-pc-12.jpg', 'PodBox product'],
            ['/images/branding-pc-5.jpg', 'Bubles gift set'],
            ['/images/branding-claudine-2.jpg', 'Claudine, interior'],
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
          Every brand brief is different, final pricing reflects scope, deliverables, and
          usage. Reach out for a tailored proposal.
        </p>
      </section>

      {/* Local SEO content + FAQ */}
      <section className="section wrap reveal">
        <div className="center" style={{ marginBottom: '36px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Los Angeles brand photography</div>
          <h2 className="h2">Brand, product &amp; food photography in LA</h2>
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p style={{ marginBottom: '18px' }}>
            I&rsquo;m a Los Angeles brand and product photographer based in Encino, creating considered visual stories for restaurants, makers, and modern brands across LA, from Santa Monica and West Hollywood to Downtown and the Valley. The goal is always the same: imagery that looks like you, not like everyone else, and that actually moves your business.
          </p>
          <p>
            From product and food photography to lifestyle and team imagery, I build content that works across your website, ads, and social feed. Curious what goes into it? Read <a href="/blog/what-is-brand-photography">what brand photography is and why it matters</a>, or see a recent <a href="/blog/los-angeles-lifestyle-branding-shoot-bubles">lifestyle branding shoot</a>.
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
          <h2 className="h2">Let&rsquo;s build your library</h2>
        </div>
        <TrustStrip />
        <div className="reveal"><HoneyBook placement="12" /></div>
      </section>

      <Footer />
    </>
  )
}
