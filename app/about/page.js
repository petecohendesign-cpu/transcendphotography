'use client'

import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <>
      <Nav variant="solid" />
      <Reveal />

      <header className="section wrap center" style={{ paddingTop: '160px', paddingBottom: '70px' }}>
        <div className="label reveal" style={{ marginBottom: '28px' }}>Behind the lens</div>
        <h1 className="serif reveal" style={{ fontWeight: 300, fontSize: 'clamp(42px,6vw,82px)', lineHeight: 1.05 }}>
          A musician&rsquo;s eye,<br />an editor&rsquo;s <em>restraint</em>
        </h1>
      </header>

      {/* Intro — portrait paired with the story */}
      <section className="section wrap split reveal" style={{ alignItems: 'center', paddingTop: '20px' }}>
        <div className="imgblk" style={{ position: 'relative', height: '620px' }}>
          <Image src="/images/about-self-1.jpg" alt="Pete Cohen, lead photographer" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <div className="label" style={{ marginBottom: '24px' }}>The story</div>
          <p>I grew up in New Haven, Connecticut — a pizza snob with a guitar. Music came first: I studied at Berklee and spent years touring, opening for bands like The Dillinger Escape Plan and Animals As Leaders.</p>
          <p>Photography started as a way to document those tours. Somewhere between the stage and a friend&rsquo;s wedding, I fell for capturing people in genuine moments. I shot my first wedding in 2015 and never looked back.</p>
          <p>Today I&rsquo;m based in Los Angeles, working across weddings, brands, and portraits — and still designing on the side.</p>
        </div>
      </section>

      {/* The approach — text paired with portrait (mirrored) */}
      <section className="section wrap split reveal" style={{ alignItems: 'center' }}>
        <div>
          <div className="label" style={{ marginBottom: '24px' }}>The approach</div>
          <p><strong style={{ color: 'var(--espresso)', fontWeight: 500 }}>Documentary, with an editorial eye.</strong> I capture moments as they happen, but I&rsquo;m always composing for light, feeling, and story.</p>
          <p><strong style={{ color: 'var(--espresso)', fontWeight: 500 }}>A creative collaboration.</strong> You know your story; I bring the direction. Together we make something that feels like you.</p>
          <p><strong style={{ color: 'var(--espresso)', fontWeight: 500 }}>Every detail considered.</strong> From color to how you feel on the day — the small things add up to images you&rsquo;ll keep for life.</p>
        </div>
        <div className="imgblk" style={{ position: 'relative', height: '560px' }}>
          <Image src="/images/about-self-3.jpg" alt="Pete Cohen on location" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap reveal" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px' }}>
          <div>
            <div className="label" style={{ marginBottom: '24px' }}>The Journal</div>
            <h2 className="serif" style={{ fontWeight: 300, fontSize: 'clamp(32px,4vw,54px)', lineHeight: 1.15, maxWidth: '17em' }}>
              A decade behind the camera, <em>written down</em> — planning guides,
              honest advice, and the stories behind the shoots.
            </h2>
          </div>
          <a className="btn" href="/blog" style={{ whiteSpace: 'nowrap' }}>Read the journal &nbsp;&rarr;</a>
        </div>
      </section>

      <section className="section wrap">
        <div className="reveal center" style={{ marginBottom: '60px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>What clients say</div>
          <h2 className="h2">Trusted by couples, brands &amp; creatives</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px' }}>
          <div className="reveal">
            <p style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '20px', lineHeight: 1.5, color: 'var(--espresso)', marginBottom: '18px' }}>
              &ldquo;Pete will make sure your photos are the kind you want to look at time and time again — because they truly are a work of art.&rdquo;
            </p>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--espresso)' }}>S &amp; M</div>
            <div style={{ fontSize: '13px', color: 'var(--taupe)' }}>Married in Connecticut</div>
          </div>
          <div className="reveal">
            <p style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '20px', lineHeight: 1.5, color: 'var(--espresso)', marginBottom: '18px' }}>
              &ldquo;We are filled with fond memories of how special our day was — and how easy and fun it was to shoot them with Pete.&rdquo;
            </p>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--espresso)' }}>T &amp; M</div>
            <div style={{ fontSize: '13px', color: 'var(--taupe)' }}>Celebrated in California</div>
          </div>
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
