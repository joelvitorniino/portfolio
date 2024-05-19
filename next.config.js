/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '443',
        pathname: '/icons/png/512/1000/solid/heart.png'
      }
    ],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
