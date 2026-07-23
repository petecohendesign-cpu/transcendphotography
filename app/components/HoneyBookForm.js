'use client'

import Script from 'next/script'

/**
 * HoneyBook contact form embed. Renders the placement div + tracking pixel
 * and loads HoneyBook's placement-controller script, which injects the form
 * into the div. pid is the HoneyBook placement id.
 */
const PID = '66450f3663c0600007d48291'

export default function HoneyBookForm() {
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
