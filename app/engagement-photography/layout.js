export const metadata = {
  title: 'Los Angeles Engagement Photographer | Transcend Photography',
  description:
    'Relaxed, editorial engagement sessions in Los Angeles, natural, cinematic couples photography at the places you love. Standalone or with a wedding, from $450.',
  alternates: { canonical: '/engagement-photography' },
  openGraph: {
    title: 'Los Angeles Engagement Photographer | Transcend Photography',
    description:
      'Relaxed, editorial engagement sessions across Los Angeles, natural, cinematic couples photography at the locations you love, starting at $450.',
    url: 'https://www.transcendphoto.net/engagement-photography',
    type: 'website',
    images: [{ url: '/og/engagement.jpg', width: 1200, height: 630, alt: 'Engagement session on the beach at sunset in Los Angeles' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/engagement.jpg'],
  },
}

export default function Layout({ children }) {
  return children
}
