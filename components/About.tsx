'use client';

import React from 'react';
import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-surface"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[32rem] rounded-full bg-[#c5b28e]/20 blur-3xl" />
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[28px] border border-outline-variant/30 bg-gradient-to-br from-white via-surface-container-lowest to-surface-container-low p-7 sm:p-10 md:p-14 text-center shadow-[0_35px_80px_-45px_rgba(5,25,52,0.35)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center rounded-full border border-secondary/25 bg-secondary-container/40 px-4 py-2 mb-6"
          >
            <span className="text-[11px] uppercase tracking-[0.24em] text-secondary font-bold">
              Why Choose Us
            </span>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-7"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-secondary/25 bg-white shadow-[0_12px_30px_-20px_rgba(5,25,52,0.5)]">
            <Building2 className="text-secondary w-8 h-8" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-[2.6rem] font-headline font-extrabold text-primary-container leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          We manage tenants, rent, maintenance, and compliance so landlords can
          earn more predictable rental income across London.
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-[3px] bg-gradient-to-r from-secondary-container via-gold-accent to-secondary-container mx-auto mb-8 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 0.88, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="text-on-surface-variant text-sm md:text-[1.02rem] leading-relaxed max-w-2xl mx-auto"
        >
          Cube Properties Group provides landlord-focused property management in
          London, including guaranteed rent, tenant find support, compliance
          coordination, and responsive tenancy management.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 0.88, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.52, duration: 0.6 }}
          className="text-on-surface-variant text-sm md:text-[1.02rem] leading-relaxed max-w-2xl mx-auto mt-3"
        >
          Our approach is built for better occupancy, smoother operations, and
          stronger long-term returns without the stress of self-managing.
        </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {['Reliable Service', 'Better Occupancy', 'Long-term Returns'].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-outline-variant/30 bg-white/70 px-4 py-3 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-primary-container/80 font-bold"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.72, duration: 0.6 }}
            className="mt-7 text-sm leading-relaxed text-on-surface-variant max-w-3xl mx-auto"
          >
            Explore our{' '}
            <Link href="/services" className="text-secondary font-semibold hover:text-primary-container transition-colors">
              property management services
            </Link>{' '}
            or submit a landlord enquiry through the{' '}
            <Link href="/i-am-a-landlord" className="text-secondary font-semibold hover:text-primary-container transition-colors">
              landlord services page
            </Link>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
