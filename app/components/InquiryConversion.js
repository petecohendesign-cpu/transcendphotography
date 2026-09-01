'use client'

import { useEffect } from 'react'

/**
 * InquiryConversion — fires a GA4 conversion event when the thank-you page
 * loads. HoneyBook redirects here after a successful form submission, so this
 * fires once per real inquiry — the reliable submission signal the embedded
 * iframe form can't provide on its own.
 *
 * We push straight to GA's dataLayer using the standard gtag stub rather than
 * calling window.gtag directly. In production the GA script can finish loading
 * a beat after this component mounts; a direct window.gtag call would be a
 * no-op in that window. Queuing onto dataLayer is load-order safe — gtag.js
 * drains the queue once it initializes.
 */
export default function InquiryConversion() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag('event', 'inquiry_submitted', {
      form: 'honeybook',
      page_location: '/thank-you',
    })
  }, [])

  return null
}
