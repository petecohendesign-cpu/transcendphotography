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
  title: 'Transcend Photography | LA Wedding, Brand & Portrait Photographer',
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
