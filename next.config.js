/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [], // Add any external domains if needed
  },
  trailingSlash: true,
  async redirects() {
    const legacyServices = [
      'clear-aligners',
      'clear-braces',
      'conventional-braces',
      'whitening',
    ];

    return [
      { source: '/about', destination: '/en/about/', permanent: true },
      { source: '/appointment', destination: '/en/appointment/', permanent: true },
      { source: '/blog', destination: '/en/blog/', permanent: true },
      {
        source: '/blog/clear-aligners-vs-traditional-braces',
        destination: '/en/blog/clear-aligners-vs-traditional-braces/',
        permanent: true,
      },
      { source: '/contact', destination: '/en/#contact', permanent: true },
      { source: '/privacy', destination: '/en/privacy/', permanent: true },
      { source: '/clear-aligners', destination: '/en/services/clear-aligners/', permanent: true },
      { source: '/services', destination: '/en/#services', permanent: true },
      { source: '/services/invisalign', destination: '/en/services/clear-aligners/', permanent: true },
      { source: '/services/orthofx', destination: '/en/services/clear-aligners/', permanent: true },
      ...legacyServices.map((service) => ({
        source: `/services/${service}`,
        destination: `/en/services/${service}/`,
        permanent: true,
      })),
      ...['en', 'es'].flatMap((lang) => [
        {
          source: `/${lang}/clear-aligners`,
          destination: `/${lang}/services/clear-aligners/`,
          permanent: true,
        },
        {
          source: `/${lang}/services/invisalign`,
          destination: `/${lang}/services/clear-aligners/`,
          permanent: true,
        },
        {
          source: `/${lang}/services/orthofx`,
          destination: `/${lang}/services/clear-aligners/`,
          permanent: true,
        },
        {
          source: `/${lang}/services`,
          destination: `/${lang}/#services`,
          permanent: true,
        },
        {
          source: `/${lang}/contact`,
          destination: `/${lang}/#contact`,
          permanent: true,
        },
      ]),
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
