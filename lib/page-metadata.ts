import type { Metadata } from 'next';
import { getAbsoluteUrl, siteConfig } from '@/lib/site-config';

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  type?: 'website' | 'article';
};

export const createPageMetadata = ({
  path,
  title,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  type = 'website',
}: PageMetadataInput): Metadata => ({
  title,
  description,
  keywords,
  alternates: {
    canonical: getAbsoluteUrl(path),
  },
  openGraph: {
    type,
    locale: siteConfig.locale,
    url: getAbsoluteUrl(path),
    siteName: siteConfig.name,
    title: ogTitle ?? `${title} | ${siteConfig.name}`,
    description: ogDescription ?? description,
    images: [
      {
        url: getAbsoluteUrl(siteConfig.logoPath),
        width: 646,
        height: 203,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle ?? `${title} | ${siteConfig.name}`,
    description: ogDescription ?? description,
    images: [getAbsoluteUrl(siteConfig.logoPath)],
  },
});
