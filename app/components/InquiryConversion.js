'use client'

import { useEffect } from 'react'

/**
 * InquiryConversion — fires a GA4 conversion event when the thank-you page
 * loads. HoneyBook redirects here after a successful form submission, so this
 * fires once per real inquiry — the reliable submission signal the embedded
 * iframe form can't provide on its own.
 */
export default function InquiryConversion() {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'inquiry_submitted', {
        form: 'honeybook',
        page_location: '/thank-you',
      })
    }
  }, [])

  return null
}
