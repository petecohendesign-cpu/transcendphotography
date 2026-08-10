'use client'

import { useEffect } from 'react'

/**
 * AnalyticsEvents — one global click listener that sends conversion-relevant
 * GA4 events, so reports show what actually drives inquiries (not just
 * pageviews). No per-component wiring needed.
 *
 * Events sent:
 *   phone_click        — tapped a phone number
 *   email_click        — clicked an email address
 *   inquiry_cta_click  — clicked a "Get Started / Inquire / Begin an inquiry" button
 *   service_interest   — clicked through to a service page (weddings/branding/portraits)
 *   gallery_click      — clicked out to a Pic-Time client gallery
 *   social_click       — clicked out to Instagram/Facebook
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const track = (name, params) => {
      if (typeof window.gtag === 'function') window.gtag('event', name, params || {})
    }

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a, button')
      if (!a) return
      const href = (a.getAttribute && a.getAttribute('href')) || ''
      const text = (a.textContent || '').trim()
      const t = text.toLowerCase()
      const page = window.location.pathname

      if (href.startsWith('tel:')) return track('phone_click', { page_location: page })
      if (href.startsWith('mailto:')) return track('email_click', { page_location: page })
      if (/instagram\.com/i.test(href)) return track('social_click', { network: 'instagram', page_location: page })
      if (/facebook\.com/i.test(href)) return track('social_click', { network: 'facebook', page_location: page })
      if (/pic-time\.com/i.test(href)) return track('gallery_click', { page_location: page })

      // Primary inquiry calls-to-action
      if (href === '/contact' || /get started|begin an inquiry|inquire|start an inquiry/.test(t)) {
        return track('inquiry_cta_click', { cta_text: text.slice(0, 60), page_location: page })
      }

      // Which service someone is interested in
      if (href === '/for-couples') return track('service_interest', { service: 'weddings', page_location: page })
      if (href === '/brand-photography') return track('service_interest', { service: 'branding', page_location: page })
      if (href === '/portraits') return track('service_interest', { service: 'portraits', page_location: page })
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
