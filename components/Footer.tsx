'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { withBasePath } from '@/lib/base-path';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0d2447] text-white pt-16 md:pt-24 pb-10 md:pb-12">
      <div className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-gold-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#3f5f8f]/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
            <div className="lg:col-span-5">
              <div className="flex flex-col items-start gap-3 sm:gap-4">
                <div className="rounded-xl bg-white px-3 py-2 shadow-[0_10px_30px_-15px_rgba(255,255,255,0.7)]">
                  <Image
                    src={withBasePath('/images/logo.png')}
                    alt="Cube Properties logo"
                    width={220}
                    height={70}
                    className="h-9 sm:h-11 w-auto object-contain"
                  />
                </div>
              </div>

              <p className="mt-6 text-white/85 text-base sm:text-lg font-medium">
                Hands-Free Property Income. Done Right.
              </p>
              <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-md">
                London-focused management with reliable communication, compliance,
                and smooth tenancy support.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#122f5a]/70 p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-accent mb-4">
                  Contact Details
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-center gap-2.5 break-all">
                    <Mail size={15} className="text-gold-accent shrink-0" />
                    info@cubeproperties.co.uk
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone size={15} className="text-gold-accent shrink-0" />
                    +44 1708 915172
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

          <div className="mt-8 md:mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
              <div className="max-w-4xl">
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed text-center sm:text-left">
                  Cube Properties Group Ltd is registered with the Information
                  Commissioner&apos;s Office (ICO) as a data controller and
                  complies with the UK General Data Protection Regulation (UK
                  GDPR) and Data Protection Act 2018.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gold-accent font-semibold tracking-[0.06em] text-center sm:text-left">
                  Registration Number: ZC110845
                </p>
                <p className="mt-4 text-[10px] sm:text-xs text-white/45 font-semibold tracking-[0.12em] uppercase text-center sm:text-left">
                  © 2026 Cube Properties Group LTD | All rights reserved.
                </p>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 w-full md:w-auto md:min-w-85">
                <div className="flex-1 md:flex-none rounded-xl bg-white px-2.5 py-1.5 shadow-[0_10px_30px_-15px_rgba(255,255,255,0.7)] max-w-30">
                  <Image
                    src={withBasePath('/images/prs.png')}
                    alt="PRS logo"
                    width={110}
                    height={56}
                    className="h-7 sm:h-8 w-full object-contain"
                  />
                </div>
                <div className="flex-1 md:flex-none rounded-xl bg-white px-2.5 py-1.5 shadow-[0_10px_30px_-15px_rgba(255,255,255,0.7)] max-w-30">
                  <Image
                    src={withBasePath('/images/dps.jpg')}
                    alt="DPS logo"
                    width={110}
                    height={56}
                    className="h-7 sm:h-8 w-full object-contain"
                  />
                </div>
                <div className="flex-1 md:flex-none rounded-xl bg-white px-2.5 py-1.5 shadow-[0_10px_30px_-15px_rgba(255,255,255,0.7)] max-w-30">
                  <Image
                    src={withBasePath('/images/ico.jpeg')}
                    alt="ICO registration badge"
                    width={110}
                    height={56}
                    className="h-7 sm:h-8 w-full object-contain"
                  />
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
