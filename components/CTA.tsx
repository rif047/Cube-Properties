'use client';

import React from 'react';
import { motion } from 'motion/react';

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -top-16 left-10 h-56 w-56 rounded-full bg-gold-accent/15 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative overflow-hidden rounded-[30px] border border-primary/15 bg-gradient-to-br from-[#071b36] via-[#082348] to-[#133a68] px-6 py-10 sm:px-10 md:px-12 md:py-14 shadow-[0_40px_80px_-50px_rgba(5,25,52,0.75)]">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold-accent/80 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white lg:col-span-7"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-gold-accent/90 font-bold mb-4">
                Ready To Work With Us
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold tracking-tight leading-[1.07] mb-5 md:mb-6 max-w-3xl">
                Looking for the best real estate company in the UK?
              </h2>
              <p className="text-white/80 text-base md:text-xl max-w-2xl leading-relaxed">
                Hands-free letting and management across London.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white/85">
                  Email: info@cubeproperties.co.uk
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white/85">
                  Phone: +44 1708 915172
                </span>
              </div>
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-container p-5 sm:p-6 md:p-7 rounded-2xl shadow-[0_25px_45px_-28px_rgba(197,178,142,0.8)]"
              >
                <span className="block text-primary font-headline font-extrabold text-3xl sm:text-4xl mb-1">
                  2-5
                </span>
                <span className="block text-primary/65 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.18em]">
                  Year Typical Agreements
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-white/15 bg-white/8 backdrop-blur-md p-5 sm:p-6 md:p-7 rounded-2xl"
              >
                <span className="block text-white font-headline font-extrabold text-3xl sm:text-4xl mb-1">
                  £
                </span>
                <span className="block text-white/80 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.18em]">
                  Guaranteed Monthly Rent
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-7 md:mt-9 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>
    </section>
  );
};

export default CTA;
