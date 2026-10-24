export const metadata = {
  title: 'Portrait & Headshot Photographer in Los Angeles | Transcend Photography',
  description:
    'Portrait and professional headshot sessions in Los Angeles, editorial headshots for LinkedIn and work, plus creatives, families, and personal portraits.',
  alternates: { canonical: '/portraits' },
  openGraph: {
    title: 'Portrait & Headshot Photographer in Los Angeles | Transcend Photography',
    description: 'Portrait and professional headshot sessions in Los Angeles, headshots for LinkedIn and work, plus creatives and families.',
    url: 'https://www.transcendphoto.net/portraits',
    type: 'website',
    images: [{ url: '/og/portraits.jpg', width: 1200, height: 630, alt: 'Editorial portrait of a musician in Los Angeles' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/portraits.jpg'],
  },
}

export default function Layout({ children }) {
  return children
}
