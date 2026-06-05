import type { MetadataRoute } from 'next';
import { getAbsoluteUrl } from '@/lib/site-config';

export const dynamic = 'force-static';

const routes = [
  '/',
  '/services',
  '/i-am-a-landlord',
  '/i-am-a-tenant',
  '/contact',
  '/work-with-us',
  '/privacy-policy',
  '/cookie-policy',
  '/terms-and-conditions',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: getAbsoluteUrl(route),
    lastModified,
    changeFrequency: route === '/' || route === '/services' ? 'weekly' : 'monthly',
    priority:
      route === '/'
        ? 1
        : route === '/services'
          ? 0.9
          : route === '/i-am-a-landlord' || route === '/contact'
            ? 0.8
            : 0.5,
  }));
}
