'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, BadgeCheck, ShieldCheck, Star, X } from 'lucide-react';
import { withBasePath } from '@/lib/base-path';

const trustPoints = [
  'Client money protection through a recognised UKALA CMP scheme.',
  'Designed to reassure landlords who want a compliant, professionally run partner.',
  'Presented with a polished trust layer that strengthens the home page footer journey.',
];

export default function TrustShowcase() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#06172f] px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,178,142,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-accent backdrop-blur-sm">
            Client Money Protection
          </div>

          <h2 className="mt-5 text-lg font-headline font-extrabold tracking-tight text-white sm:text-xl md:text-[1.5rem]">
            Certified client money protection for landlords and tenants.
          </h2>

          <p className="mt-3 max-w-lg text-xs leading-6 text-white/72 sm:text-sm">
            This UKALA-backed CMP certificate confirms that Cube Properties
            Group is covered for client money protection, giving landlords and
            tenants added confidence in how funds are handled.
          </p>

          <div className="mt-6 grid gap-2.5">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-3 backdrop-blur-sm"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-accent/35 bg-gold-accent/12 text-gold-accent">
                  {index === 0 ? (
                    <ShieldCheck className="h-3.5 w-3.5" />
                  ) : index === 1 ? (
                    <BadgeCheck className="h-3.5 w-3.5" />
                  ) : (
                    <Star className="h-3.5 w-3.5" />
                  )}
                </span>
                <p className="text-xs leading-5 text-white/78 sm:text-[13px]">{point}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-gold-accent px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-primary transition-colors hover:bg-white"
            >
              Speak With Our Team
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
            <div className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
              UKALA member no. 22951
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(197,178,142,0.26),transparent_62%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.85)] backdrop-blur-md">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#fff8ef] via-white to-[#f6efe2] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl border border-[#d7c19b]/50 bg-white/90 px-4 py-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                    Verified Trust Layer
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    UKALA Client Money Protection
                  </p>
                </div>
                <div className="rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                  Certified
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="group relative block w-full overflow-hidden rounded-[1.35rem] border border-black/8 bg-white text-left shadow-[0_25px_60px_-35px_rgba(5,25,52,0.35)]"
                aria-label="Open certificate in full screen view"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#f8f2e8]/85 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#f8f2e8]/75 to-transparent" />
                <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full border border-primary/10 bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary transition-opacity group-hover:opacity-100 lg:opacity-0">
                  Click to expand
                </div>
                <Image
                  src={withBasePath('/images/cmp-landscape.jpg')}
                  alt="Cube Properties Group client money protection certificate"
                  width={3300}
                  height={2550}
                  className="h-auto w-full object-contain cursor-pointer"
                  priority
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      </section>

      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020b16]/90 px-4 py-6 backdrop-blur-sm"
          onClick={() => setIsPreviewOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsPreviewOpen(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close full screen certificate view"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#f8f2e8] p-3 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={withBasePath('/images/cmp-landscape.jpg')}
              alt="Cube Properties Group client money protection certificate"
              width={3300}
              height={2550}
              className="max-h-[84vh] w-full rounded-[1.2rem] object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
