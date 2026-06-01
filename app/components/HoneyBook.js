'use client'

import { useEffect } from 'react'

const PID = '66450f3663c0600007d48291'

/**
 * Embeds a HoneyBook contact form.
 * placement: the numeric suffix of the placement id.
 *   4  = Wedding / Engagement
 *   12 = Branding / Lifestyle
 *   2  = Portrait sessions
 */
export default function HoneyBook({ placement }) {
  useEffect(() => {
    if (!document.querySelector('script[data-hb]')) {
      const s = document.createElement('script')
      s.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'
      s.async = true
      s.setAttribute('data-hb', '1')
      document.body.appendChild(s)
    }
    window._HB_ = window._HB_ || {}
    window._HB_.pid = PID
  }, [])

  return (
    <div className="hb-embed">
      <div className={`hb-p-${PID}-${placement}`} />
      <img height="1" width="1" style={{ display: 'none' }} src={`https://www.honeybook.com/p.png?pid=${PID}`} alt="" />
    </div>
  )
}
