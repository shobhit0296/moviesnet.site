import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  outputFileTracingIncludes: {
    '/api/**/*': ['./data/**/*'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(icon.svg|favicon.ico|manifest.webmanifest|robots.txt|sitemap.xml)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
