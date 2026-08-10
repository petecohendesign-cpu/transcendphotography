/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1366, 1920, 2400],
    // Optimized variants are immutable — cache them for a year on the CDN
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // Old Squarespace-era URLs still indexed by Google -> new homes (301)
      { source: '/about-transcend-photography', destination: '/about', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/weddings', destination: '/for-couples', permanent: true },
      { source: '/branding', destination: '/brand-photography', permanent: true },
      { source: '/portrait-photography', destination: '/portraits', permanent: true },
      { source: '/packages', destination: '/contact', permanent: true },
      // Old client-gallery URL -> hosted Pic-Time galleries
      { source: '/galleries', destination: 'https://transcendphoto.pic-time.com/portfolio', permanent: true, basePath: false },
    ]
  },
  async headers() {
    return [
      {
        // Security headers on every route (HSTS is added by Vercel automatically)
        source: '/:path*',
        headers: [
          // Stop browsers from MIME-sniffing responses into executable types
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Site can't be framed by other origins (clickjacking protection)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Don't leak full URLs to third parties
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // We don't use camera/mic/geolocation — say so explicitly
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Static originals (served when anything bypasses the optimizer)
        source: '/:all*(jpg|jpeg|png|webp|avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
