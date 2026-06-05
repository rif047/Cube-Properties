import { getAbsoluteUrl, siteConfig } from '@/lib/site-config';

type Schema = Record<string, unknown>;

const serviceCatalog = [
  'Guaranteed Rent',
  'Full Property Management',
  'Let Only / Tenant Find',
  'HMO Setup',
];

export const createOrganizationSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${getAbsoluteUrl('/')}#organization`,
  name: siteConfig.name,
  url: getAbsoluteUrl('/'),
  logo: getAbsoluteUrl(siteConfig.logoPath),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'King House, Elm Park Avenue',
    postalCode: 'RM12 4RS',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
  sameAs: [siteConfig.siteUrl],
});

export const createLocalBusinessSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${getAbsoluteUrl('/')}#localbusiness`,
  name: siteConfig.name,
  image: getAbsoluteUrl(siteConfig.logoPath),
  url: getAbsoluteUrl('/'),
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'King House, Elm Park Avenue',
    postalCode: 'RM12 4RS',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
  areaServed: {
    '@type': 'City',
    name: 'London',
  },
  priceRange: '££',
  knowsAbout: [
    'Guaranteed Rent',
    'Property Management',
    'Tenant Find Services',
    'HMO Setup',
    'Landlord Services',
  ],
  makesOffer: serviceCatalog.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service,
    },
  })),
});

export const createWebsiteSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${getAbsoluteUrl('/')}#website`,
  url: getAbsoluteUrl('/'),
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: 'en-GB',
  publisher: {
    '@id': `${getAbsoluteUrl('/')}#organization`,
  },
});

export const createWebPageSchema = ({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${getAbsoluteUrl(path)}#webpage`,
  url: getAbsoluteUrl(path),
  name,
  description,
  isPartOf: {
    '@id': `${getAbsoluteUrl('/')}#website`,
  },
  about: {
    '@id': `${getAbsoluteUrl('/')}#organization`,
  },
  inLanguage: 'en-GB',
});

export const createBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>
): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: getAbsoluteUrl(item.path),
  })),
});

export const createContactPageSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${getAbsoluteUrl('/contact')}#contact-page`,
  url: getAbsoluteUrl('/contact'),
  name: 'Contact Cube Properties Group',
  description:
    'Contact Cube Properties Group in London for guaranteed rent, property management, landlord services, tenant support, and letting enquiries.',
  mainEntity: {
    '@id': `${getAbsoluteUrl('/')}#organization`,
  },
});

export const createServicePageSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${getAbsoluteUrl('/services')}#collection`,
  url: getAbsoluteUrl('/services'),
  name: 'Property Management Services in London',
  description:
    'Guaranteed rent, full property management, tenant find services, and HMO setup in London.',
  hasPart: serviceCatalog.map((service) => ({
    '@type': 'Service',
    name: service,
    provider: {
      '@id': `${getAbsoluteUrl('/')}#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
  })),
});
