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

      // Old Squarespace URLs still indexed in Google (from Search Console) -> nearest live page
      { source: '/testimonials', destination: '/about', permanent: true },
      { source: '/engagement-couples-photography', destination: '/for-couples', permanent: true },
      { source: '/wedding-photography-portfolio', destination: '/for-couples', permanent: true },
      { source: '/explore-my-photo-portfolio', destination: '/', permanent: true },
      { source: '/mothers-day-minis', destination: '/blog/mothers-day-portrait-sessions-for-all-ages', permanent: true },

      // Old blog permalinks (renamed slugs / dated Squarespace URLs) -> nearest live content
      { source: '/blog/best-places-for-engagement-portraits-in-los-angeles', destination: '/blog/best-engagement-photo-locations-los-angeles', permanent: true },
      { source: '/blog/hyatt-regency-boston-harbor-waterfront-wedding-photography', destination: '/for-couples', permanent: true },
      { source: '/blog/james-and-bria-engagement-party-hotel-hoxton', destination: '/for-couples', permanent: true },
      { source: '/blog/wedding-photography-secrets-5-ways-to-get-stunning-photos-on-your-big-day', destination: '/blog/wedding-photography-tips-free-guide-download', permanent: true },
      { source: '/blog/2024/11/6/revisiting-a-fusion-of-traditions-capturing-a-two-day-catholic-and-indian-wedding-celebration', destination: '/for-couples', permanent: true },
      // Renamed to fix a typo'd slug (famly -> clean location slug)
      { source: '/blog/famly-session-palos-verdes', destination: '/blog/palos-verdes-family-portraits', permanent: true },
      // Renamed to drop the odd date prefix
      { source: '/blog/2025-8-21-a-photographers-guide-to-a-stress-free-wedding-day-timeline', destination: '/blog/wedding-day-timeline-guide', permanent: true },
      // More old Squarespace URLs still getting traffic (found in GA, not in the first export)
      { source: '/blog/feeling-comfortable-while-on-camera', destination: '/blog/posing-tips-for-couples-and-portraits', permanent: true },
      { source: '/blog/a-guide-to-wedding-photography-styles', destination: '/for-couples', permanent: true },
      { source: '/wedding-guide-download', destination: '/blog/wedding-photography-tips-free-guide-download', permanent: true },
      { source: '/concert-photography', destination: '/portraits', permanent: true },
      { source: '/engagement-portrait-photography-packages', destination: '/for-couples', permanent: true },
      // Old Squarespace tag pages and dated permalinks -> blog index
      { source: '/blog/tag/:tag*', destination: '/blog', permanent: true },
      { source: '/blog/:year(\\d{4})/:month/:day/:rest*', destination: '/blog', permanent: true },
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
