/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
