import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy — Transcend Photography',
  description:
    'How Transcend Photography collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' },
}

const S = { marginBottom: '40px' }
const H = { fontFamily: 'var(--font-serif), serif', fontWeight: 400, fontSize: '24px', marginBottom: '14px' }

export default function Privacy() {
  return (
    <>
      <Nav variant="solid" />

      <header className="section wrap center" style={{ paddingTop: '160px', paddingBottom: '50px' }}>
        <div className="label" style={{ marginBottom: '24px' }}>Legal</div>
        <h1 className="serif" style={{ fontWeight: 300, fontSize: 'clamp(38px,5vw,64px)', lineHeight: 1.08 }}>
          Privacy Policy
        </h1>
        <p style={{ marginTop: '18px', color: 'var(--taupe)', fontSize: '14px' }}>
          Effective July 13, 2026
        </p>
      </header>

      <section className="wrap" style={{ maxWidth: '760px', margin: '0 auto', paddingBottom: '110px' }}>
        <div style={S}>
          <p>
            Transcend Photography (&ldquo;we,&rdquo; &ldquo;us&rdquo;) is a photography studio based in
            Los Angeles, California. This policy explains what information we collect through
            www.transcendphoto.net, how we use it, and the choices you have. The short version:
            we collect only what you choose to send us, we never sell it, and we don&rsquo;t run
            advertising or tracking cookies on this site.
          </p>
        </div>

        <div style={S}>
          <h2 style={H}>Information you give us</h2>
          <p>
            When you submit an inquiry through our contact forms, we receive the details you
            provide — typically your name, email address, phone number, event date, and anything
            you write in your message. We use this information solely to respond to your inquiry,
            plan and deliver photography services, and communicate with you about your booking.
          </p>
          <p>
            Our inquiry forms are operated by HoneyBook, the client-management platform we use to
            handle inquiries, proposals, contracts, and invoices. Information you submit through
            those forms is processed and stored by HoneyBook on our behalf, subject to{' '}
            <a href="https://www.honeybook.com/lp/privacy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              HoneyBook&rsquo;s privacy policy
            </a>.
          </p>
        </div>

        <div style={S}>
          <h2 style={H}>Information collected automatically</h2>
          <p>
            This site is hosted on Vercel, which processes standard technical data (such as IP
            addresses and browser information) as part of serving the site securely and reliably.
            We do not use advertising cookies, social-media pixels, or cross-site tracking, and we
            do not build profiles of visitors.
          </p>
        </div>

        <div style={S}>
          <h2 style={H}>Photographs</h2>
          <p>
            Photography is our work, and the images shown on this site are part of our portfolio.
            We display client photographs only as permitted by the usage terms in each client&rsquo;s
            agreement. If you appear in an image on this site and would like it removed, contact us
            and we will address it promptly.
          </p>
        </div>

        <div style={S}>
          <h2 style={H}>How we share information</h2>
          <p>
            We never sell your personal information. We share it only with the service providers
            that make our business run — HoneyBook (client management), Google Workspace (email),
            and Vercel (website hosting) — each of which processes it under their own privacy and
            security commitments, and only as needed to serve you.
          </p>
        </div>

        <div style={S}>
          <h2 style={H}>Your rights</h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act gives you the
            right to know what personal information we hold about you, to request a copy of it, to
            ask us to delete it, and to not be discriminated against for exercising those rights.
            Because we don&rsquo;t sell personal information, there is nothing to opt out of. To
            exercise any of these rights, email us and we&rsquo;ll respond within the timeframes the
            law requires.
          </p>
        </div>

        <div style={S}>
          <h2 style={H}>Data retention &amp; security</h2>
          <p>
            We keep inquiry and client records for as long as needed to serve you and to meet our
            legal and accounting obligations, then delete them. This site is served entirely over
            HTTPS, and we limit access to client information to the people who need it to do the
            work.
          </p>
        </div>

        <div style={S}>
          <h2 style={H}>Contact</h2>
          <p>
            Questions, or want to exercise a privacy right? Email{' '}
            <a href="mailto:pete@transcendphoto.net" style={{ textDecoration: 'underline' }}>
              pete@transcendphoto.net
            </a>{' '}
            or call (203) 671-5273.
          </p>
          <p>
            If we make material changes to this policy, we&rsquo;ll update this page and the
            effective date above.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
