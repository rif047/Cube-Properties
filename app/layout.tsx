import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { withBasePath } from '@/lib/base-path';
import { getAbsoluteUrl, siteConfig } from '@/lib/site-config';
import JsonLd from '@/components/JsonLd';
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
  createWebsiteSchema,
} from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: '%s | Cube Properties Group',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'guaranteed rent london',
    'property management london',
    'full property management london',
    'tenant find service london',
    'hmo setup london',
    'landlord services london',
    'Cube Properties Group',
  ],
  authors: [{name: siteConfig.name}],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Property Management',
  alternates: {
    canonical: getAbsoluteUrl('/'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: siteConfig.type,
    locale: siteConfig.locale,
    url: getAbsoluteUrl('/'),
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
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
    title: siteConfig.title,
    description: siteConfig.description,
    images: [getAbsoluteUrl(siteConfig.logoPath)],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: withBasePath(siteConfig.logoPath),
    shortcut: withBasePath(siteConfig.logoPath),
    apple: withBasePath(siteConfig.logoPath),
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <JsonLd
          data={[
            createOrganizationSchema(),
            createLocalBusinessSchema(),
            createWebsiteSchema(),
          ]}
        />
        {children}
      </body>
    </html>
  );
}
