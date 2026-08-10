'use client'

import { useEffect } from 'react'
import Script from 'next/script'

/**
 * HoneyBook contact form embed. Renders the placement div + tracking pixel
 * and loads HoneyBook's placement-controller script, which injects the form
 * into the div. pid is the HoneyBook placement id.
 */
const PID = '66450f3663c0600007d48291'

export default function HoneyBookForm() {
  // The form loads in a cross-origin iframe, so GA4 can't see a submit.
  // As a proxy, fire a GA4 event the first time a visitor clicks into the
  // iframe: the parent window blurs and the iframe becomes activeElement.
  useEffect(() => {
    let fired = false
    const onBlur = () => {
      setTimeout(() => {
        if (fired) return
        const el = document.activeElement
        const container = document.querySelector(`.hb-p-${PID}-1`)
        if (el && el.tagName === 'IFRAME' && container && container.contains(el)) {
          fired = true
          window.gtag?.('event', 'contact_form_engaged', {
            form: 'honeybook',
            page_location: window.location.pathname,
          })
        }
      }, 0)
    }
    window.addEventListener('blur', onBlur)
    return () => window.removeEventListener('blur', onBlur)
  }, [])

  return (
    <>
      <div className={`hb-p-${PID}-1`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        alt=""
        src={`https://www.honeybook.com/p.png?pid=${PID}`}
      />
      <Script id="honeybook-placement" strategy="afterInteractive">
        {`(function(h,b,s,n,i,p,e,t){h._HB_=h._HB_||{};h._HB_.pid=i;t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);})(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","${PID}");`}
      </Script>
    </>
  )
}
