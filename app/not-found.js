import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata = {
  title: 'Page Not Found, Transcend Photography',
}

export default function NotFound() {
  return (
    <>
      <Nav variant="solid" />

      <section className="section wrap center" style={{ paddingTop: '190px', paddingBottom: '150px' }}>
        <div className="label" style={{ marginBottom: '28px' }}>404</div>
        <h1 className="serif" style={{ fontWeight: 300, fontSize: 'clamp(38px,5vw,68px)', lineHeight: 1.08, marginBottom: '26px' }}>
          This frame is <em>empty</em>
        </h1>
        <p style={{ maxWidth: '460px', margin: '0 auto 44px', color: 'var(--taupe)' }}>
          The page you&rsquo;re looking for has moved or never existed. Let&rsquo;s get you
          back to the good stuff.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn" href="/">Back home</a>
          <a className="btn btn-light" href="/blog" style={{ border: '1px solid var(--hairline)' }}>Read the journal</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
