/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1366, 1920, 2400],
    // Optimized variants are immutable — cache them for a year on the CDN
    minimumCacheTTL: 31536000,
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
