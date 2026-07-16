import './globals.css'
import { Cormorant_Garamond, Jost } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.transcendphoto.net'),
  title: 'Transcend Photography | LA Wedding, Brand & Portrait Photos',
  description:
    'Documentary and editorial photography for adventurous couples, considered brands, and creative people. Los Angeles based, available worldwide.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Transcend Photography | Los Angeles Wedding, Brand & Portrait Photographer',
    description: 'Timeless imagery for life’s most genuine moments. Los Angeles based, available worldwide.',
    type: 'website',
    url: 'https://www.transcendphoto.net',
    siteName: 'Transcend Photography',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcend Photography',
    description: 'Los Angeles wedding, brand & portrait photography.',
  },
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.transcendphoto.net/#business',
  name: 'Transcend Photography',
  description:
    'Documentary and editorial wedding, brand, and portrait photography based in Los Angeles, available worldwide.',
  url: 'https://www.transcendphoto.net',
  image: 'https://www.transcendphoto.net/images/logo.png',
  telephone: '+1-203-671-5273',
  email: 'pete@transcendphoto.net',
  priceRange: '$$-$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: ['Los Angeles', 'Southern California', 'Worldwide'],
  founder: { '@type': 'Person', name: 'Pete Cohen' },
  knowsAbout: ['Wedding Photography', 'Brand Photography', 'Portrait Photography'],
  sameAs: [
    'https://instagram.com/transcendphoto',
    'https://facebook.com/transcendphoto',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
