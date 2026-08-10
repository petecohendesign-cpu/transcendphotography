'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import ParallaxImage from '../components/ParallaxImage'
import LivingTile from '../components/LivingTile'
import NativeFrame from '../components/NativeFrame'
import QuickContact from '../components/QuickContact'

const OFFERS = [
  ['All-day coverage', 'From getting ready to the last dance, every moment, captured with intention.'],
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
    price: '$3,500',
    note: 'Intimate & elopements',
    items: ['Up to 4 hours of coverage', 'Single photographer', 'Private online gallery', 'High-resolution downloads', 'Print release'],
  },
  {
    name: 'The Celebration',
    price: '$6,500',
    note: 'Most requested',
    feature: true,
    items: ['Up to 8 hours of coverage', 'Second shooter included', 'Engagement session', 'Sneak-peek gallery in 72 hours', 'Full gallery, 600+ edited images'],
  },
  {
    name: 'The Full Story',
    price: '$10,500',
    note: 'The complete experience',
    items: ['Up to 12 hours of coverage', 'Second shooter & assistant', 'Engagement session + 35mm film', 'Cinematic highlight film', 'Heirloom fine-art album'],
  },
]

const FAQ = [
  ['How much does a wedding photographer cost in Los Angeles?', 'Most LA couples invest between $3,000 and $6,500 for wedding photography. My collections start at $3,500 for elopements and $6,500 for full-day coverage, with custom quotes available.'],
  ['What areas of Los Angeles do you photograph?', "I'm based in Los Angeles and photograph weddings across Southern California, including Malibu, Pasadena, Santa Monica, Downtown LA, Pacific Palisades, and Palos Verdes. I also travel for destination weddings worldwide."],
  ['Do you offer engagement sessions?', "Yes. Engagement sessions are included in my Celebration and Full Story collections and can be added to any package. They're a relaxed way to get comfortable on camera before the wedding day."],
  ['How many photos will we receive, and when?', 'A full wedding gallery typically includes 600+ edited, high-resolution images in a private online gallery, with a sneak-peek selection delivered within 72 hours.'],
  ['Do you shoot film?', '35mm film is available as an add-on, blending analog grain and timeless texture alongside full digital coverage.'],
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

export default function Weddings() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Weddings & Couples"
        title={<>Your day, preserved<br />in images you'll treasure forever</>}
        slides={[
          { src: '/images/wedding-pc-2.jpg',  alt: 'Bride and groom kissing on a coastal cliff at dusk' },
          { src: '/images/wedding-pc-9.jpg',  alt: 'Sparkler send-off kiss at night' },
          { src: '/images/wedding-pc-6.jpg',  alt: 'Bride and groom by the sea, veil in the wind' },
          { src: '/images/wedding-pc-14.jpg', alt: 'Bride and groom during their first dance' },
          { src: '/images/wedding-pc-4.jpg',  alt: 'Bride and groom kissing on the rocks by the ocean' },
          { src: '/images/wedding-pc-26.jpg', alt: 'Bride and groom in a vineyard at golden hour' },
          { src: '/images/wedding-pc-17.jpg', alt: 'Bride at an Indian wedding ceremony' },
          { src: '/images/wedding-pc-7.jpg',  alt: 'Bride and groom laughing on the beach' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For the two of you</div>
        <p className="serif">
          Your day will go by in a blur. My job is to catch the parts you&rsquo;ll want
          to feel again: the nerves, the laughter, the way it all felt <em>real</em>.
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

      <section className="wrap" style={{ paddingBottom: '60px' }}>
        {/* Editorial rows: every image at its native aspect ratio, zero cropping.
            flex-grow = aspect ratio, so items in a row share one height. */}
        <div className="edrow reveal">
          <NativeFrame src="/images/wedding-pc-12.jpg" alt="Bride and groom silhouetted in a doorway" w={1000} h={1498} drift={14} style={{ flex: '0.668 1 0%' }} />
          <LivingTile
            aspect="3 / 2"
            style={{ flex: '1.5 1 0%' }}
            sizes="(max-width: 760px) 100vw, 65vw"
            delay={0}
            slides={[
              { src: '/images/wedding-pc-15.jpg', alt: 'Bride and groom kissing on a flower-lined bridge' },
              { src: '/images/wedding-pc-21.jpg', alt: 'Groom straightening his tie, black and white' },
              { src: '/images/wedding-pc-19.jpg', alt: 'Bride reading a letter before the ceremony' },
              { src: '/images/wedding-pc-5.jpg', alt: 'Wedding invitation suite flat lay' },
            ]}
          />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/wedding-pc-1.jpg" alt="Bride and groom hands with engagement ring" w={1000} h={667} drift={12} style={{ flex: '1.5 1 0%' }} />
          <NativeFrame src="/images/wedding-pc-13.jpg" alt="Ring bearers holding a sign" w={1500} h={1001} drift={20} style={{ flex: '1.499 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <LivingTile
            aspect="2 / 3"
            style={{ flex: '0.667 1 0%' }}
            sizes="(max-width: 760px) 100vw, 35vw"
            delay={2600}
            slides={[
              { src: '/images/wedding-pc-11.jpg', alt: 'Wedding dress hanging by the window' },
              { src: '/images/wedding-pc-8.jpg', alt: 'Wedding rings resting on a palm leaf' },
              { src: '/images/wedding-pc-16.jpg', alt: 'Wedding gown with bridesmaid dresses' },
              { src: '/images/wedding-pc-3.jpg', alt: 'Groom buttoning his jacket while getting ready' },
            ]}
          />
          <NativeFrame src="/images/wedding-pc-23.jpg" alt="Sparkler send-off, bride and groom walking through the crowd" w={2000} h={1335} drift={16} style={{ flex: '1.498 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/wedding-pc-22.jpg" alt="Bridal details, shoes, rings, and invitation" w={2400} h={1600} drift={12} style={{ flex: '1.5 1 0%' }} />
          <NativeFrame src="/images/wedding-pc-20.png" alt="Bride with flower girl in black and white" w={1000} h={1250} drift={18} style={{ flex: '0.8 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/wedding-pc-24.jpg" alt="Bride and bridesmaids from behind with bouquets" w={1500} h={1001} drift={14} style={{ flex: '1.499 1 0%' }} />
          <NativeFrame src="/images/wedding-pc-18.jpg" alt="Winery cellar reception table" w={2400} h={1602} drift={10} style={{ flex: '1.498 1 0%' }} />
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: '110px' }}>
        <div className="reveal center" style={{ marginBottom: '40px' }}>
          <div className="label">Engagement sessions</div>
        </div>
        <div className="gal gal-3 reveal">
          <ParallaxImage style={{ height: '480px' }} speed={0.16} src="/images/engagement-pc-5.jpg" alt="Engagement session among palm trees" sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw" objectPosition="center 72%" />
          <ParallaxImage style={{ height: '480px' }} speed={0.08} src="/images/engagement-pc-1.jpg" alt="Engagement session under a garden arch" sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw" objectPosition="center" />
          <ParallaxImage style={{ height: '480px' }} speed={0.16} src="/images/engagement-pc-9.jpg" alt="Engagement session in Chinatown at night" sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw" objectPosition="22% center" />
        </div>
        <div className="gal gal-2 reveal" style={{ marginTop: '20px' }}>
          <LivingTile
            className="tall"
            height="660px"
            sizes="(max-width: 900px) 100vw, 60vw"
            delay={800}
            slides={[
              { src: '/images/engagement-pc-8.jpg', alt: 'Engagement session in an arched colonnade', pos: 'center 42%' },
              { src: '/images/engagement-pc-2.jpg', alt: 'Engagement session in a courtyard' },
              { src: '/images/engagement-pc-7.jpg', alt: 'Engagement session at Pasadena City Hall', pos: 'center 60%' },
              { src: '/images/engagement-pc-4.jpg', alt: 'Engagement session on a palm-lined street', pos: 'center 60%' },
              { src: '/images/engagement-pc-6.jpg', alt: 'Engagement session under a grand archway', pos: 'center 90%' },
              { src: '/images/engagement-pc-11.jpg', alt: 'Engagement couple embracing', pos: 'center 30%' },
            ]}
          />
          <LivingTile
            height="318px"
            sizes="(max-width: 900px) 100vw, 40vw"
            delay={2500}
            slides={[
              { src: '/images/engagement-pc-13.jpg', alt: 'Engagement session dancing on the beach' },
              { src: '/images/engagement-pc-12.jpg', alt: 'Engagement session by the lake at sunset', pos: 'center 40%' },
            ]}
          />
          <LivingTile
            height="318px"
            sizes="(max-width: 900px) 100vw, 40vw"
            delay={4200}
            slides={[
              { src: '/images/engagement-pc-3.jpg', alt: 'Engagement session in a garden pavilion' },
              { src: '/images/engagement-pc-14.jpg', alt: 'Engagement couple dip on the beach at sunset', pos: 'center 40%' },
            ]}
          />
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
          Every wedding is unique, collections are a starting point and can be tailored to
          your timeline and vision. Custom quotes available on request.
        </p>
      </section>

      <section className="section quote">
        <div className="mark reveal">&ldquo;</div>
        <p className="reveal">
          We are filled with fond memories of how special our day was, and how easy
          and fun it was to shoot them with Pete.
        </p>
        <div className="label reveal">T &amp; M</div>
      </section>

      {/* Local SEO content + FAQ */}
      <section className="section wrap reveal">
        <div className="center" style={{ marginBottom: '36px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Los Angeles wedding photography</div>
          <h2 className="h2">Documentary wedding photography across LA</h2>
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p style={{ marginBottom: '18px' }}>
            As a Los Angeles wedding photographer, I document weddings and elopements across Southern California, from Malibu and Pacific Palisades to Pasadena, Downtown LA, Palos Verdes, and the wine country beyond. My approach is documentary with an editorial eye: unposed moments, honest emotion, and a few intentional portraits, so your gallery feels like your day actually felt.
          </p>
          <p>
            Whether you&rsquo;re planning an intimate elopement or a full celebration of 200, I&rsquo;d love to hear about it. Curious about pricing? See my guide to <a href="/blog/wedding-photographer-cost-los-angeles">how much a wedding photographer costs in Los Angeles</a>, or explore <a href="/blog/best-engagement-photo-locations-los-angeles">the best engagement photo locations in LA</a>.
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
          <h2 className="h2">Tell me about your day</h2>
        </div>
        <div className="reveal"><HoneyBook placement="4" /></div>
      </section>

      <Footer />
    </>
  )
}
