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
  title: 'Transcend Photography, Weddings, Branding & Portraits in Los Angeles',
  description:
    'Documentary and editorial photography for adventurous couples, considered brands, and creative people. Los Angeles based, available worldwide.',
  openGraph: {
    title: 'Transcend Photography',
    description: 'Timeless imagery for life’s most genuine moments.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
