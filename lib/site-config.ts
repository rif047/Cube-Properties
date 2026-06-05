import { basePath } from '@/lib/base-path';

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.cubeproperties.co.uk';

export const siteConfig = {
  name: 'Cube Properties Group',
  shortName: 'Cube Properties',
  siteUrl: rawSiteUrl.replace(/\/+$/, ''),
  basePath,
  logoPath: '/images/cube-properties-group-logo.png',
  locale: 'en_GB',
  type: 'website' as const,
  title:
    'Cube Properties Group | Guaranteed Rent and Property Management in London',
  description:
    'Cube Properties Group provides guaranteed rent in London, full property management, tenant find services, and HMO setup support for landlords and tenants.',
  businessAddress: 'King House, Elm Park Avenue, RM12 4RS, London, United Kingdom',
  phone: '+44 20 3051 1660',
  email: 'info@cubeproperties.co.uk',
};

export const getSitePath = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (normalizedPath === '/') {
    return `${siteConfig.basePath || ''}/`;
  }

  const trimmedPath = normalizedPath.replace(/\/+$/, '');
  const isFilePath = /\.[a-z0-9]+$/i.test(trimmedPath);
  return isFilePath
    ? `${siteConfig.basePath}${trimmedPath}`
    : `${siteConfig.basePath}${trimmedPath}/`;
};

export const getAbsoluteUrl = (path = '/') =>
  new URL(getSitePath(path), `${siteConfig.siteUrl}/`).toString();
