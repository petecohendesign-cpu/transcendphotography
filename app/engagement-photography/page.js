'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import ParallaxImage from '../components/ParallaxImage'
import LivingTile from '../components/LivingTile'
import QuickContact from '../components/QuickContact'
import TrustStrip from '../components/TrustStrip'

const HIGHLIGHTS = [
  ['At a location you love', 'Somewhere meaningful to the two of you, or a spot across LA I’ll help you choose.'],
  ['Relaxed and unposed', 'Gentle direction so you look like yourselves, never stiff or staged.'],
  ['Before the big day', 'A chance to get comfortable in front of the camera before your wedding.'],
  ['Golden-hour light', 'We time the session for the soft, warm light that makes everything glow.'],
  ['On its own or added on', 'Book a standalone session, or fold one into a wedding collection.'],
  ['Your gallery, quickly', 'A private online gallery of edited, high-resolution images, delivered within weeks.'],
]

const STEPS = [
  ['Reach out', 'Tell me about the two of you and the kind of session you’re imagining.'],
  ['Plan it together', 'We choose a location and timing, and talk through wardrobe so you arrive relaxed.'],
  ['The session', 'A relaxed, unhurried shoot with gentle direction — mostly just the two of you being you.'],
  ['Your gallery', 'Edited, high-res images in a private online gallery, ready to share.'],
]

const FAQ = [
  ['How much does an engagement session cost in Los Angeles?', 'Engagement sessions start at $400. You can book a session on its own, or add one to a wedding collection when I’m photographing your wedding.'],
  ['Where do you photograph engagement sessions?', 'All across Los Angeles — from Echo Park Lake and Pasadena City Hall to Chinatown at night. If you’re not sure where, I’ll help you choose a location that fits your style.'],
  ['What should we wear?', 'Coordinated but not matching, in colors and textures you feel most like yourselves in. I share a full what-to-wear guide once we book.'],
  ['Do we have to be getting married to book?', 'Not at all. Engagement, anniversary, or just-because couples sessions are all welcome.'],
  ['How soon will we get our photos?', 'Your edited gallery is delivered in a private online gallery, typically within about two weeks.'],
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

export default function EngagementPhotography() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Engagement Sessions"
        title={<>Engagement photos that<br />feel like the two of you</>}
        slides={[
          { src: '/images/engagement-pc-12.jpg', alt: 'Engagement session by the lake at sunset' },
          { src: '/images/engagement-pc-13.jpg', alt: 'Engagement couple dancing on the beach' },
          { src: '/images/engagement-pc-9.jpg', alt: 'Engagement session in Chinatown at night', pos: 'center 45%' },
          { src: '/images/engagement-pc-1.jpg', alt: 'Engagement session under a garden arch', pos: 'center 50%' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For couples in love</div>
        <p className="serif">
          A relaxed hour or two, just the two of you, somewhere that means something.
          Natural, cinematic, and unmistakably <em>yours</em>, never stiff or over-posed.
        </p>
      </section>

      <section className="wrap" style={{ padding: '10px 48px 110px' }}>
        <div className="reveal center" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>The experience</div>
          <h2 className="h2">What an engagement session looks like</h2>
        </div>
        <div className="offers reveal">
          {HIGHLIGHTS.map(([t, d], i) => (
            <div key={i} className="offer"><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="wrap" style={{ paddingBottom: '110px' }}>
        <div className="reveal center" style={{ marginBottom: '40px' }}>
          <div className="label">Recent sessions</div>
        </div>
        <div className="gal gal-3 reveal">
          <ParallaxImage style={{ height: '480px' }} speed={0.16} src="/images/engagement-pc-2.jpg" alt="Engagement session in a courtyard" sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw" objectPosition="center" />
          <ParallaxImage style={{ height: '480px' }} speed={0.08} src="/images/engagement-pc-11.jpg" alt="Engagement couple embracing at golden hour" sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw" objectPosition="center 30%" />
          <ParallaxImage style={{ height: '480px' }} speed={0.16} src="/images/engagement-pc-4.jpg" alt="Engagement session on a palm-lined Los Angeles street" sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw" objectPosition="center 60%" />
        </div>
        <div className="gal gal-2 reveal" style={{ marginTop: '20px' }}>
          <LivingTile
            className="tall"
            height="660px"
            sizes="(max-width: 900px) 100vw, 60vw"
            delay={800}
            slides={[
              { src: '/images/engagement-pc-6.jpg', alt: 'Engagement session under a grand archway', pos: 'center 90%' },
              { src: '/images/engagement-pc-3.jpg', alt: 'Engagement session in a garden pavilion' },
              { src: '/images/engagement-pc-10.jpg', alt: 'Engagement couple walking together' },
              { src: '/images/engagement-pc-1.jpg', alt: 'Engagement session under a garden arch' },
            ]}
          />
          <LivingTile
            height="318px"
            sizes="(max-width: 900px) 100vw, 40vw"
            delay={2500}
            slides={[
              { src: '/images/engagement-pc-14.jpg', alt: 'Engagement couple dip on the beach at sunset', pos: 'center 40%' },
              { src: '/images/engagement-pc-12.jpg', alt: 'Engagement session by the lake at sunset', pos: 'center 40%' },
            ]}
          />
          <LivingTile
            height="318px"
            sizes="(max-width: 900px) 100vw, 40vw"
            delay={4200}
            slides={[
              { src: '/images/engagement-pc-13.jpg', alt: 'Engagement session dancing on the beach' },
              { src: '/images/engagement-pc-7.jpg', alt: 'Engagement session at Pasadena City Hall', pos: 'center 60%' },
            ]}
          />
        </div>
      </section>

      {/* How it works */}
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

      {/* Pricing */}
      <section className="section wrap" id="investment">
        <div className="reveal center" style={{ marginBottom: '40px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Investment</div>
          <h2 className="h2">Engagement sessions</h2>
        </div>
        <div className="reveal center" style={{ maxWidth: '620px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: 'clamp(40px,7vw,64px)', lineHeight: 1, marginBottom: '14px' }}>
            Starting at $400
          </div>
          <p style={{ color: 'var(--taupe)', lineHeight: 1.75, marginBottom: '26px' }}>
            Every session includes a relaxed shoot at a location you love, gentle direction
            the whole way through, and a private online gallery of edited, high-resolution
            images. Book a session on its own, or add one to a wedding collection.
          </p>
          <p className="pricing-note">
            Additional edited images and prints available à la carte.
          </p>
        </div>
      </section>

      {/* Local SEO content + FAQ */}
      <section className="section wrap reveal">
        <div className="center" style={{ marginBottom: '36px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Los Angeles engagement photography</div>
          <h2 className="h2">Engagement photography across LA</h2>
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p style={{ marginBottom: '18px' }}>
            As a Los Angeles engagement photographer, I create natural, editorial engagement
            photos for couples all over the city — relaxed sessions with a documentary eye
            that keep things genuine rather than stiff or overly posed. Whether it&rsquo;s a
            golden-hour session at Echo Park Lake, the arches of Pasadena City Hall, or the
            neon and lanterns of Chinatown at night, we&rsquo;ll find the setting that feels
            like the two of you.
          </p>
          <p>
            Looking for ideas? See my guide to the{' '}
            <a href="/blog/best-engagement-photo-locations-los-angeles">best engagement photo locations in Los Angeles</a>,
            a recent <a href="/blog/echo-park-engagement-photos">Echo Park Lake engagement session</a>, and
            tips on <a href="/blog/what-to-wear-for-engagement-photos">what to wear for engagement photos</a>.
            When you&rsquo;re ready to plan a wedding too, here&rsquo;s more on my{' '}
            <a href="/for-couples">Los Angeles wedding photography</a>.
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
          <h2 className="h2">Let&rsquo;s plan your session</h2>
        </div>
        <TrustStrip />
        <div className="reveal"><HoneyBook placement="3" /></div>
      </section>

      <Footer />
    </>
  )
}
