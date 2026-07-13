export default function QuickContact() {
  return (
    <section className="quick-contact reveal">
      <div className="qc-inner">
        <div className="qc-left">
          <p className="qc-label">Ready to begin?</p>
          <p className="qc-text">Call for a quick conversation, or fill out an inquiry below.</p>
        </div>
        <div className="qc-right">
          <a href="tel:2036715273" className="qc-phone">
            <span>(203) 671-5273</span>
          </a>
          <a href="#inquire" className="btn">Inquire Now</a>
        </div>
      </div>
    </section>
  )
}
