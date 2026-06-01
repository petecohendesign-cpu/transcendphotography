import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.transcendphoto.net'),
  title: 'Transcend Photography — Weddings, Branding & Portraits in Los Angeles',
  description:
    'Documentary and editorial photography for adventurous couples, considered brands, and creative people. Los Angeles based, available worldwide.',
  openGraph: {
    title: 'Transcend Photography',
    description: 'Timeless imagery for life\u2019s most genuine moments.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
