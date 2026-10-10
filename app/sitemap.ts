import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

const localizedPaths = [
  '',
  'about',
  'appointment',
  'blog',
  'blog/clear-aligners-vs-traditional-braces',
  'blog/can-clear-aligners-fix-bite',
  'blog/how-do-braces-work',
  'privacy',
  'services/clear-aligners',
  'services/clear-braces',
  'services/conventional-braces',
  'services/whitening',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedUrls = ['en', 'es'].flatMap((lang) =>
    localizedPaths.map((path) => ({
      url: path ? `${siteUrl}/${lang}/${path}/` : `${siteUrl}/${lang}/`,
      changeFrequency: path.startsWith('blog/') ? 'monthly' as const : 'weekly' as const,
      priority: path === '' ? 1 : path.startsWith('services/') ? 0.8 : 0.6,
    })),
  );

  return [
    ...localizedUrls,
    {
      url: `${siteUrl}/blog/benefits-early-orthodontic-treatment/`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/blog/tips-maintaining-braces-oral-hygiene/`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
