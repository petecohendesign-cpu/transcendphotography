'use client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <>
      <Nav variant="solid" />
      <Reveal />

      <header className="section wrap center" style={{ paddingTop: '160px', paddingBottom: '90px' }}>
        <div className="label reveal" style={{ marginBottom: '28px' }}>Behind the lens</div>
        <h1 className="serif reveal" style={{ fontWeight: 300, fontSize: 'clamp(42px,6vw,82px)', lineHeight: 1.05 }}>
          A musician&rsquo;s eye,<br />an editor&rsquo;s <em>restraint</em>
        </h1>
      </header>

      <div className="wrap reveal">
        <div className="imgblk" style={{ height: '600px' }}>
          <img src="/images/wedding-bride-reading.jpg" alt="On location" />
        </div>
      </div>

      <section className="section wrap split reveal">
        <div>
          <div className="label" style={{ marginBottom: '24px' }}>The story</div>
          <p>I grew up in New Haven, Connecticut — a pizza snob with a guitar. Music came first: I studied at Berklee and spent years touring, opening for bands like The Dillinger Escape Plan and Animals As Leaders.</p>
          <p>Photography started as a way to document those tours. Somewhere between the stage and a friend&rsquo;s wedding, I fell for capturing people in genuine moments. I shot my first wedding in 2015 and never looked back.</p>
          <p>Today I&rsquo;m based in Los Angeles, working across weddings, brands, and portraits — and still designing on the side.</p>
        </div>
        <div>
          <div className="label" style={{ marginBottom: '24px' }}>The approach</div>
          <p><strong style={{ color: 'var(--espresso)', fontWeight: 500 }}>Documentary, with an editorial eye.</strong> I capture moments as they happen, but I&rsquo;m always composing for light, feeling, and story.</p>
          <p><strong style={{ color: 'var(--espresso)', fontWeight: 500 }}>A creative collaboration.</strong> You know your story; I bring the direction. Together we make something that feels like you.</p>
          <p><strong style={{ color: 'var(--espresso)', fontWeight: 500 }}>Every detail considered.</strong> From color to how you feel on the day — the small things add up to images you&rsquo;ll keep for life.</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', textAlign: 'center' }}>
          <div className="reveal"><div className="serif" style={{ fontSize: '56px', color: 'var(--clay)', fontWeight: 300 }}>200+</div><div className="label" style={{ marginTop: '8px' }}>Weddings</div></div>
          <div className="reveal"><div className="serif" style={{ fontSize: '56px', color: 'var(--clay)', fontWeight: 300 }}>50+</div><div className="label" style={{ marginTop: '8px' }}>Brand projects</div></div>
          <div className="reveal"><div className="serif" style={{ fontSize: '56px', color: 'var(--clay)', fontWeight: 300 }}>10+</div><div className="label" style={{ marginTop: '8px' }}>Years</div></div>
        </div>
      </section>

      <section className="section cta">
        <div className="label reveal" style={{ marginBottom: '30px' }}>Now booking 2026 &amp; 2027</div>
        <h2 className="reveal">Let&rsquo;s create something<br /><em>worth keeping</em></h2>
        <div className="reveal" style={{ marginTop: '44px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn-light" href="/for-couples">Weddings</a>
          <a className="btn btn-light" href="/brand-photography">Branding</a>
          <a className="btn btn-light" href="/portraits">Portraits</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
