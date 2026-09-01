import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import InquiryConversion from '../components/InquiryConversion'

export const metadata = {
  title: 'Thank You, Transcend Photography',
  description: 'Your inquiry has been received. I’ll be in touch within 24 hours.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thank-you' },
}

export default function ThankYou() {
  return (
    <>
      <InquiryConversion />
      <Nav variant="solid" />
      <Reveal />

      <section className="section wrap center" style={{ paddingTop: '170px', paddingBottom: '110px' }}>
        <div className="label reveal" style={{ marginBottom: '28px' }}>Inquiry received</div>
        <h1 className="serif reveal" style={{ fontWeight: 300, fontSize: 'clamp(42px,6vw,78px)', lineHeight: 1.05 }}>
          Thank you, <br />your message is in
        </h1>
        <p className="reveal" style={{ marginTop: '26px', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--taupe)', lineHeight: 1.7 }}>
          I read every inquiry personally and I&rsquo;ll be in touch within 24 hours. No pressure, just a conversation about what you&rsquo;re planning. While you wait, have a look around.
        </p>
        <div className="reveal" style={{ marginTop: '40px', display: 'flex', gap: '18px 40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="arrow" href="/for-couples">View recent work</a>
          <a className="arrow" href="/blog">Read the journal</a>
          <a className="arrow" href="/">Back home</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
