import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

export const metadata = {
  title: 'Contact, Transcend Photography',
  description:
    'Start an inquiry for wedding, branding, or portrait photography in Los Angeles. Call, email, or tell me about your project.',
  alternates: { canonical: '/contact' },
}

const PATHS = [
  {
    num: '01',
    title: 'Weddings & Couples',
    desc: 'Weddings, elopements, and engagement sessions.',
    href: '/for-couples#inquire',
  },
  {
    num: '02',
    title: 'Branding & Lifestyle',
    desc: 'Restaurants, products, teams, and brand campaigns.',
    href: '/brand-photography#inquire',
  },
  {
    num: '03',
    title: 'Portrait Sessions',
    desc: 'Headshots, creatives, families, and personal work.',
    href: '/portraits#inquire',
  },
]

export default function Contact() {
  return (
    <>
      <Nav variant="solid" />
      <Reveal />

      <header className="section wrap center" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="label reveal" style={{ marginBottom: '28px' }}>Contact</div>
        <h1 className="serif reveal" style={{ fontWeight: 300, fontSize: 'clamp(42px,6vw,78px)', lineHeight: 1.05 }}>
          Let&rsquo;s make something<br /><em>worth keeping</em>
        </h1>
        <p className="reveal" style={{ marginTop: '26px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--taupe)' }}>
          Tell me what you&rsquo;re dreaming up. Pick the path that fits, or just call, I&rsquo;m happy to talk it through.
        </p>
      </header>

      {/* Direct lines */}
      <section className="wrap center reveal" style={{ paddingBottom: '70px' }}>
        <div style={{ display: 'flex', gap: '18px 44px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:2036715273" className="arrow">(203) 671-5273</a>
          <a href="mailto:pete@transcendphoto.net" className="arrow">pete@transcendphoto.net</a>
          <a href="https://instagram.com/transcendphoto" target="_blank" rel="noopener noreferrer" className="arrow">Instagram</a>
        </div>
      </section>

      {/* Choose your inquiry */}
      <section className="wrap" style={{ paddingBottom: '130px' }}>
        <div className="reveal center" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Start an inquiry</div>
          <h2 className="h2">What are we making?</h2>
        </div>
        <div className="offers reveal" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {PATHS.map((p, i) => (
            <a key={i} href={p.href} className="offer" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="label" style={{ marginBottom: '14px' }}>{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="nlink" style={{ marginTop: '14px' }}>Inquire &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
