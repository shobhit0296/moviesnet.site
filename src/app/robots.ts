import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/search', '/watch/', '/categories/'],
        disallow: ['/adminshobhit/', '/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'Google-Extended',
          'Bytespider',
          'Applebot-Extended',
          'cohere-ai',
          'Diffbot',
          'PerplexityBot',
          'Omgilibot',
          'FacebookBot',
          'Amazonbot',
          'SemrushBot',
          'AhrefsBot',
          'PetalBot',
          'MJ12bot',
          'DotBot',
          'SeekportBot',
          'DataForSeoBot',
          'ZoominfoBot',
        ],
        disallow: '/',
      },
    ],
    host: 'https://moviesnet.site',
    sitemap: 'https://moviesnet.site/sitemap.xml',
  };
}
