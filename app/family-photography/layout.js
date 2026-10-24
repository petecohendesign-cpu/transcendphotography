export const metadata = {
  title: 'Los Angeles Family Photographer | Transcend Photography',
  description:
    'Relaxed, editorial family portraits in Los Angeles, natural, unposed photography for parents, kids, and families of every generation. Sessions from $350.',
  alternates: { canonical: '/family-photography' },
  openGraph: {
    title: 'Los Angeles Family Photographer | Transcend Photography',
    description:
      'Relaxed, editorial family portraits across Los Angeles, natural, unposed sessions for families of every size and generation. From $350.',
    url: 'https://www.transcendphoto.net/family-photography',
    type: 'website',
    images: [{ url: '/og/family.jpg', width: 1200, height: 630, alt: 'Family walking together on a park bridge in Los Angeles' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Angeles Family Photographer | Transcend Photography',
    description: 'Relaxed, editorial family portraits across Los Angeles. Sessions from $350.',
    images: ['/og/family.jpg'],
  },
}

export default function Layout({ children }) {
  return children
}
