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
