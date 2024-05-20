/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**/**/**'
      }
    ],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
