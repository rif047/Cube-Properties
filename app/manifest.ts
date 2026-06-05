import type { MetadataRoute } from 'next';
import { withBasePath } from '@/lib/base-path';
import { getSitePath, siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: getSitePath('/'),
    scope: getSitePath('/'),
    display: 'standalone',
    background_color: '#0d2447',
    theme_color: '#0d2447',
    icons: [
      {
        src: withBasePath(siteConfig.logoPath),
        sizes: '646x203',
        type: 'image/png',
      },
      {
        src: withBasePath(siteConfig.logoPath),
        sizes: '646x203',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
