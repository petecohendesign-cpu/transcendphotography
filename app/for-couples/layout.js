export const metadata = {
  title: 'Los Angeles Wedding Photographer | Transcend Photography',
  description:
    'Documentary, editorial wedding photography in Los Angeles and worldwide. Timeless images of your day, from intimate elopements to full celebrations.',
  alternates: { canonical: '/for-couples' },
  openGraph: {
    title: 'Los Angeles Wedding Photographer | Transcend Photography',
    description: 'Documentary, editorial wedding photography in Los Angeles and worldwide.',
    url: 'https://www.transcendphoto.net/for-couples',
    type: 'website',
    images: [{ url: '/og/for-couples.jpg', width: 1200, height: 630, alt: 'Bride and groom on a coastal cliff at dusk in Los Angeles' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/for-couples.jpg'],
  },
}

export default function Layout({ children }) {
  return children
}
