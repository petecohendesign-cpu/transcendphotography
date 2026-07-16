'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import ParallaxImage from '../components/ParallaxImage'
import LivingTile from '../components/LivingTile'
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

export default function Weddings() {
  return (
    <>
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
          { src: '/images/wedding-pc-10.jpg', alt: 'Bride and groom running across the lawn at sunset' },
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
        <div className="gal gal-2 reveal">
          <ParallaxImage className="tall" style={{ height: '660px' }} speed={0.08} src="/images/wedding-pc-12.jpg" alt="Bride and groom silhouetted in a doorway" sizes="(max-width: 900px) 100vw, 60vw" objectPosition="center" />
          <ParallaxImage style={{ height: '318px' }} speed={0.18} src="/images/wedding-pc-1.jpg" alt="Bride and groom hands with engagement ring" sizes="(max-width: 900px) 100vw, 40vw" objectPosition="center" />
          <ParallaxImage style={{ height: '318px' }} speed={0.12} src="/images/wedding-pc-13.jpg" alt="Ring bearers holding a sign" sizes="(max-width: 900px) 100vw, 40vw" objectPosition="center 35%" />
        </div>
        <div className="gal gal-2 reveal" style={{ marginTop: '20px' }}>
          <LivingTile
            className="tall"
            height="660px"
            sizes="(max-width: 900px) 100vw, 60vw"
            delay={0}
            slides={[
              { src: '/images/wedding-pc-11.jpg', alt: 'Wedding dress hanging by the window', pos: 'center' },
              { src: '/images/wedding-pc-8.jpg', alt: 'Wedding rings resting on a palm leaf', pos: 'center' },
              { src: '/images/wedding-pc-16.jpg', alt: 'Wedding gown with bridesmaid dresses', pos: 'center' },
              { src: '/images/wedding-pc-3.jpg', alt: 'Groom buttoning his jacket while getting ready', pos: 'center 25%' },
              { src: '/images/wedding-pc-20.png', alt: 'Bride with flower girl in black and white', pos: 'center 35%' },
            ]}
          />
          <LivingTile
            height="318px"
            sizes="(max-width: 900px) 100vw, 40vw"
            delay={1700}
            slides={[
              { src: '/images/wedding-pc-15.jpg', alt: 'Bride and groom kissing on a flower-lined bridge' },
              { src: '/images/wedding-pc-21.jpg', alt: 'Groom straightening his tie, black and white', pos: 'center 30%' },
              { src: '/images/wedding-pc-26.jpg', alt: 'Bride and groom in a vineyard' },
              { src: '/images/wedding-pc-19.jpg', alt: 'Bride reading a letter before the ceremony', pos: '72% center' },
            ]}
          />
          <LivingTile
            height="318px"
            sizes="(max-width: 900px) 100vw, 40vw"
            delay={3400}
            slides={[
              { src: '/images/wedding-pc-23.jpg', alt: 'Sparkler send-off, bride and groom walking through the crowd', pos: 'center 30%' },
              { src: '/images/wedding-pc-22.jpg', alt: 'Bridal details, shoes, rings, and invitation', pos: 'center' },
              { src: '/images/wedding-pc-24.jpg', alt: 'Bride and bridesmaids from behind with bouquets' },
              { src: '/images/wedding-pc-18.jpg', alt: 'Winery cellar reception table', pos: 'center' },
              { src: '/images/wedding-pc-5.jpg', alt: 'Wedding invitation suite flat lay', pos: 'center' },
            ]}
          />
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
