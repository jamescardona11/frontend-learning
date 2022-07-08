/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   customKey: 'customKey',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [{ source: '/hola', destination: 'hello', permanent: true }]
  // },
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'www.futbollife.es'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
