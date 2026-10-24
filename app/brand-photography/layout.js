export const metadata = {
  title: 'LA Brand & Product Photographer | Transcend Photography',
  description:
    'Brand, product, and food photography for restaurants, makers, and modern brands in Los Angeles. Considered visual stories that sell.',
  alternates: { canonical: '/brand-photography' },
  openGraph: {
    title: 'LA Brand & Product Photographer | Transcend Photography',
    description: 'Brand, product, and food photography for restaurants, makers, and modern brands in Los Angeles.',
    url: 'https://www.transcendphoto.net/brand-photography',
    type: 'website',
    images: [{ url: '/og/brand.jpg', width: 1200, height: 630, alt: 'Product photography for a Los Angeles brand' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/brand.jpg'],
  },
}

export default function Layout({ children }) {
  return children
}
