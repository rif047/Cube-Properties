'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { withBasePath } from '@/lib/base-path';

const accreditationLogos = [
  {
    src: '/images/prs.png',
    alt: 'Property Redress Scheme membership logo',
    width: 126,
    height: 62,
  },
  {
    src: '/images/dps.jpg',
    alt: 'Deposit Protection Service logo',
    width: 126,
    height: 62,
  },
  {
    src: '/images/ico.jpeg',
    alt: 'ICO data protection registration badge',
    width: 126,
    height: 62,
  },
  {
    src: '/images/ukala.png',
    alt: 'UKALA membership logo',
    width: 126,
    height: 62,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0d2447] text-white pt-16 md:pt-24 pb-10 md:pb-12">
      <div className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-gold-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#3f5f8f]/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 pb-4">
            <div className="lg:col-span-4">
              <div className="flex flex-col items-start gap-3 sm:gap-4">
                <div className="rounded-xl bg-white px-3 py-2 shadow-[0_10px_30px_-15px_rgba(255,255,255,0.7)]">
                  <Image
                    src={withBasePath('/images/cube-properties-group-logo.png')}
                    alt="Cube Properties Group logo for guaranteed rent and property management in London"
                    width={220}
                    height={70}
                    className="h-9 sm:h-11 w-auto object-contain"
                  />
                </div>
              </div>

              <p className="mt-6 text-white/85 text-base sm:text-md font-medium">
                Hands-Free Property Income. Done Right.
              </p>
              <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-md">
                London-focused property management with guaranteed rent,
                compliance support, responsive communication, and smooth tenancy
                coordination for landlords and tenants.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#122f5a]/70 p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-accent mb-4">
                  Contact Details
                </p>
                <ul className="space-y-3 text-xs text-white/80">
                  <li className="flex items-center gap-2.5 break-all">
                    <Mail size={15} className="text-gold-accent shrink-0" />
                    <Link
                      href="mailto:info@cubeproperties.co.uk"
                      className="transition-colors hover:text-white"
                    >
                      info@cubeproperties.co.uk
                    </Link>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone size={15} className="text-gold-accent shrink-0" />
                    <Link
                      href="tel:+442030511660"
                      className="transition-colors hover:text-white"
                    >
                      +44 20 3051 1660
                    </Link>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <MapPin size={15} className="text-gold-accent shrink-0 mt-0.5" />
                    <span>
                      King House, Elm Park Avenue,
                      <br />
                      RM12 4RS
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#122f5a]/70 p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-accent mb-4">
                  Services
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Guaranteed Rent London', href: '/services' },
                    { label: 'Property Management London', href: '/services' },
                    { label: 'Tenant Find Service', href: '/services' },
                    { label: 'Landlord Services', href: '/i-am-a-landlord' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#122f5a]/70 p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-accent mb-4">
                  Legal
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Privacy Policy', href: '/privacy-policy' },
                    { label: 'Cookie Policy', href: '/cookie-policy' },
                    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 border-t border-white/10 pt-4">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
              <div className="flex h-full max-w-4xl flex-col justify-center">
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed text-center sm:text-left">
                  Cube Properties Group Ltd is registered with the Information
                  Commissioner&apos;s Office (ICO) as a data controller and
                  complies with the UK General Data Protection Regulation (UK
                  GDPR) and Data Protection Act 2018.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gold-accent font-semibold tracking-[0.06em] text-center sm:text-left">
                  ICO Registration Number: ZC110845
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gold-accent font-semibold tracking-[0.06em] text-center sm:text-left">
                  Company Number:{' '}
                  <Link
                    href="https://find-and-update.company-information.service.gov.uk/company/14885336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-white transition-colors"
                  >
                    14885336
                  </Link>
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gold-accent font-semibold tracking-[0.06em] text-center sm:text-left">
                  UKALA Number: 22951
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gold-accent font-semibold tracking-[0.06em] text-center sm:text-left">
                  Property Redress Scheme: PRS057741
                </p>
                <p className="mt-4 text-[10px] sm:text-xs text-white/45 font-semibold tracking-[0.12em] uppercase text-center sm:text-left">
                  © 2026 Cube Properties Group LTD | All rights reserved.
                </p>
              </div>

              <div className="flex h-full flex-col justify-center rounded-[1.75rem] border border-white/10 bg-white/4.5 p-4 sm:p-5">
                <div className="grid grid-cols-2 gap-3">
                  {accreditationLogos.map((logo) => (
                    <div
                      key={logo.src}
                      className="group flex min-h-21 items-center justify-center rounded-2xl border border-white/10 bg-white px-3 py-3 shadow-[0_18px_45px_-28px_rgba(255,255,255,0.55)] transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <Image
                        src={withBasePath(logo.src)}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="h-10 w-full scale-105 object-contain sm:h-11"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
