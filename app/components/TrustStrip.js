import Stars from './Stars'

/**
 * TrustStrip — compact social proof for decision points (near pricing and
 * above inquiry forms). Reinforces credibility right where visitors decide
 * whether to reach out.
 */
export default function TrustStrip() {
  return (
    <div className="trust reveal" role="group" aria-label="Why clients choose Transcend">
      <div className="trust-rating">
        <Stars count={5} size={15} />
        <span className="trust-label">5.0 on Google &middot; 11 reviews</span>
      </div>
      <span className="trust-dot" aria-hidden="true" />
      <div className="trust-cred">
        Trusted by couples, brands &amp; creatives &middot; A decade behind the camera in Los Angeles
      </div>
    </div>
  )
}
