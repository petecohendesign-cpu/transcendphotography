const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <div className="finner">
        <div className="fbrand">
          <div className="fwm">TRANSCEND</div>
          <div className="ftag">Weddings, branding &amp; portraits, Los Angeles, available worldwide.</div>
          <div className="fcontact">
            <a href="mailto:pete@transcendphoto.net">pete@transcendphoto.net</a>
            &nbsp;·&nbsp;
            <a href="tel:2036715273">203.671.5273</a>
          </div>
        </div>
        <div className="fcols">
          <div className="fcol">
            <div className="fhead">Work</div>
            <a className="nlink" href="/for-couples">Weddings</a>
            <a className="nlink" href="/brand-photography">Branding</a>
            <a className="nlink" href="/portraits">Portraits</a>
          </div>
          <div className="fcol">
            <div className="fhead">Explore</div>
            <a className="nlink" href="/about">About</a>
            <a className="nlink" href="/blog">Journal</a>
            <a className="nlink" href="https://transcendphoto.pic-time.com/portfolio" target="_blank" rel="noopener noreferrer">Client Galleries</a>
            <a className="nlink" href="/contact">Contact</a>
          </div>
          <div className="fcol">
            <div className="fhead">Follow</div>
            <a className="nlink" href="https://instagram.com/transcendwedding" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="nlink" href="https://facebook.com/transcendphoto" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div className="fbottom">
        © {YEAR} Transcend Photography. All rights reserved.
        <a href="/privacy" style={{ marginLeft: '18px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid rgba(245,241,234,.2)' }}>Privacy Policy</a>
      </div>
    </footer>
  )
}
