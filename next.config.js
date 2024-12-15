/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [], // Add any external domains if needed
  },
  trailingSlash: true,
  eslint: {
    // Temporarily ignore ESLint errors during build
    ignoreDuringBuilds: true
  },
  typescript: {
    // Temporarily ignore TypeScript errors during build
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig