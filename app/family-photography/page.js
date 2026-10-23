'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import LivingTile from '../components/LivingTile'
import NativeFrame from '../components/NativeFrame'
import QuickContact from '../components/QuickContact'
import TrustStrip from '../components/TrustStrip'
import FaqAccordion from '../components/FaqAccordion'

const STEPS = [
  ['Reach out', 'Tell me about your family, how many of you there are, and the feeling you want to remember.'],
  ['Plan it together', 'We pick a location and time, and I share a simple what-to-wear guide so everyone arrives relaxed.'],
  ['The session', 'An easy, unhurried hour or two with gentle direction, built to work around little ones and their moods.'],
  ['Your gallery', 'Warm, hand-edited images in a private online gallery, typically within about two weeks.'],
]

const TIERS = [
  {
    name: 'The Mini',
    price: '$350',
    note: 'A relaxed start',
    items: ['45-minute session', 'One location', 'Up to 5 people', '15 edited high-res images', 'Private online gallery'],
  },
  {
    name: 'The Signature',
    price: '$650',
    note: 'Most booked',
    feature: true,
    items: ['90-minute session', 'Two locations or looks', 'Immediate or extended family', '40 edited high-res images', 'Print release included'],
  },
  {
    name: 'The Editorial',
    price: '$1,500',
    note: 'The full story',
    items: ['Half-day session', 'Multiple looks & locations', 'Generations & larger groups', '80+ edited high-res images', 'Creative direction & styling'],
  },
]

const FAQ = [
  ['How much do family portrait sessions cost in Los Angeles?', 'Family sessions start at $350 for a 45-minute Mini, $650 for the 90-minute Signature, and $1,500 for a half-day Editorial session. Each one includes a private online gallery of edited, high-resolution images.'],
  ['Where do you photograph family sessions?', 'All across Los Angeles, at parks, gardens, the beach, a favorite neighborhood spot, or at home. I shoot in-studio too. If you’re not sure where, I’ll help you choose a setting that fits your family.'],
  ['How many people can be in a session?', 'Anywhere from a parent and child to large, multi-generational gatherings. Just let me know your headcount when you reach out and I’ll recommend the right session length.'],
  ['Do sessions work with babies and young kids?', 'Absolutely. Family sessions are relaxed and unposed, and I work around naps, snacks, and moods so little ones can just be themselves. The best moments usually happen in between the “posed” ones.'],
  ['What should we wear?', 'Coordinated but not matching, in colors and textures you feel most like yourselves in. I send a full what-to-wear guide once we book so it’s one less thing to think about.'],
  ['Do you photograph newborns, milestones, and Mother’s Day sessions?', 'Yes, newborn and milestone sessions, Mother’s Day minis, and extended-family reunions are all welcome. Tell me what you’re celebrating and we’ll build the session around it.'],
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

export default function FamilyPhotography() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Family Sessions"
        title={<>Family portraits that<br />feel like home</>}
        slides={[
          { src: '/images/family-pc-4.jpg',  alt: 'Mother in a yellow dress and her daughters on a park bridge' },
          { src: '/images/family-pc-10.jpg', alt: 'Family of four with their dog in a wildflower field' },
          { src: '/images/family-pc-8.jpg',  alt: 'Father lifting his baby in a golden wildflower field' },
          { src: '/images/family-pc-13.jpg', alt: 'Family with their dog and young son outdoors in Los Angeles' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For families</div>
        <p className="serif">
          Warm, unposed family portraits, the in-between moments that actually feel
          like you, not stiff poses or forced smiles. Just your people, <em>together</em>.
        </p>
        <p style={{ marginTop: '20px', color: 'var(--taupe)', lineHeight: 1.7, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
          From a first Mother&rsquo;s Day to three generations in one frame, I photograph families
          across Los Angeles with a documentary eye, so years from now these look like exactly
          how it felt to be together.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: '110px' }}>
        {/* Editorial rows: every image at its native aspect ratio, zero cropping. */}
        <div className="edrow reveal">
          <NativeFrame src="/images/family-pc-7.jpg" alt="Mother and child walking a wildflower path at golden hour" w={2000} h={1461} drift={14} style={{ flex: '1.369 1 0%' }} />
          <LivingTile
            aspect="3 / 2"
            style={{ flex: '1.5 1 0%' }}
            sizes="(max-width: 760px) 100vw, 55vw"
            delay={0}
            slides={[
              { src: '/images/family-pc-10.jpg', alt: 'Family of four with their dog in a wildflower field' },
              { src: '/images/family-pc-13.jpg', alt: 'Family with their dog and young son outdoors' },
            ]}
          />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/family-pc-4.jpg" alt="Mother in a yellow dress and her daughters on a park bridge" w={2000} h={1333} drift={16} style={{ flex: '1.5 1 0%' }} />
          <NativeFrame src="/images/family-pc-11.jpg" alt="Three generations together at golden hour" w={2000} h={1335} drift={10} style={{ flex: '1.498 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/family-pc-2.jpg" alt="Mother in a white dress walking with her child under a tree" w={1333} h={2000} drift={12} style={{ flex: '0.667 1 0%' }} />
          <LivingTile
            aspect="3 / 2"
            style={{ flex: '1.5 1 0%' }}
            sizes="(max-width: 760px) 100vw, 55vw"
            delay={2600}
            slides={[
              { src: '/images/family-pc-1.jpg', alt: 'Mother and toddler with wildflowers in a Los Angeles park, black and white' },
              { src: '/images/family-pc-3.jpg', alt: 'Mother embracing her child on the grass, black and white' },
            ]}
          />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/family-pc-5.jpg" alt="Mother and daughter by the lake, black and white" w={2000} h={1333} drift={16} style={{ flex: '1.5 1 0%' }} />
          <NativeFrame src="/images/family-pc-6.jpg" alt="Mother and daughter close together, black and white" w={2000} h={1333} drift={12} style={{ flex: '1.5 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/family-pc-9.jpg" alt="Mother kissing her child at golden hour, black and white" w={2000} h={1335} drift={12} style={{ flex: '1.498 1 0%' }} />
          <NativeFrame src="/images/family-pc-12.jpg" alt="Mother and son laughing together" w={2000} h={1335} drift={14} style={{ flex: '1.498 1 0%' }} />
        </div>
        <div className="edrow reveal">
          <NativeFrame src="/images/family-pc-14.jpg" alt="Mother holding her newborn close, black and white" w={1335} h={2000} drift={14} style={{ flex: '0.667 1 0%' }} />
          <LivingTile
            aspect="3 / 2"
            style={{ flex: '1.5 1 0%' }}
            sizes="(max-width: 760px) 100vw, 55vw"
            delay={1300}
            slides={[
              { src: '/images/family-pc-15.jpg', alt: 'Parents with their newborn on the front steps, black and white' },
              { src: '/images/family-pc-8.jpg', alt: 'Father lifting his baby in a golden wildflower field' },
            ]}
          />
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
          <h2 className="h2">Family session pricing</h2>
        </div>
        <div className="pricing reveal">
          {TIERS.map((t, i) => (
            <div key={i} className={`tier${t.feature ? ' feature' : ''}`}>
              {t.feature && <span className="tbadge">Most booked</span>}
              <div className="tname">{t.name}</div>
              <div className="tprice">{t.price}</div>
              <div className="tnote">{t.note}</div>
              <ul>{t.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Family sessions follow my portrait session pricing. Additional edited images and prints
          are available à la carte, and larger or multi-family gatherings can be quoted on request.
        </p>
      </section>

      {/* Local SEO content + FAQ */}
      <section className="section wrap reveal">
        <div className="center" style={{ marginBottom: '36px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Los Angeles family photography</div>
          <h2 className="h2">Family photography across LA</h2>
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p style={{ marginBottom: '18px' }}>
            As a Los Angeles family photographer, I create relaxed, editorial family portraits for
            parents, kids, newborns, and multi-generational families, all with a documentary eye that
            keeps things natural rather than stiff or overly posed. Sessions happen on location across
            LA, from the Valley to the Westside, or in-studio.
          </p>
          <p>
            Whether it&rsquo;s a new baby, a Mother&rsquo;s Day session, or the whole family in one
            place for the first time in years, I&rsquo;d love to help. See a recent{' '}
            <a href="/blog/mothers-day-los-angeles-family-portraits">family portrait session in LA</a>,
            or explore my <a href="/portraits">Los Angeles portrait photography</a>.
          </p>
        </div>
        <div style={{ maxWidth: '760px', margin: '52px auto 0' }}>
          <h2 className="h2" style={{ textAlign: 'center', marginBottom: '30px' }}>Common questions</h2>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className="section wrap" id="inquire">
        <div className="reveal center" style={{ marginBottom: '48px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Begin</div>
          <h2 className="h2">Let&rsquo;s plan your family session</h2>
        </div>
        <TrustStrip />
        <div className="reveal"><HoneyBook placement="2" /></div>
      </section>

      <Footer />
    </>
  )
}
