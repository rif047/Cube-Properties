'use client';

import React from 'react';
import { Banknote, Home, Search, Building } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Guaranteed Rent (Rent-to-Rent)',
    description: 'Fixed monthly rent. No void stress.',
    icon: Banknote,
    bg: 'bg-surface-container-lowest',
  },
  {
    title: 'Full Property Management',
    description: 'We handle tenants, rent, maintenance, and compliance.',
    icon: Home,
    bg: 'bg-surface-container-low',
  },
  {
    title: 'Let Only (Tenant Find)',
    description: 'We find reliable tenants fast.',
    icon: Search,
    bg: 'bg-surface-container-lowest',
  },
  {
    title: 'HMO Setup',
    description: 'Setup support to improve rental yield.',
    icon: Building,
    bg: 'bg-surface-container-low',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface-container-low"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary-container/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-5 md:gap-8">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary-container/60 font-medium text-xs sm:text-sm uppercase tracking-[0.28em] sm:tracking-[0.4em] mb-3">Our Services</h3>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-headline font-extrabold text-primary-container tracking-tighter max-w-4xl">
              Property Services For Landlords & Tanents
            </h2>
          </motion.div>
          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md md:text-right"
          >
            <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
              Core services for landlords and tanents in London.
            </p>
          </motion.div>
        </div>

        <div className="rounded-3xl border border-outline-variant/20 bg-gradient-to-br from-white via-surface-container-lowest to-surface-container-low p-2 sm:p-3 shadow-[0_30px_70px_-45px_rgba(5,25,52,0.35)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 overflow-hidden rounded-2xl border border-outline-variant/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${service.bg} p-6 sm:p-8 md:p-9 flex flex-col border-outline-variant/10 border-r-0 sm:[&:nth-child(2)]:border-r-0 xl:border-r xl:[&:last-child]:border-r-0 hover:bg-primary-container transition-all duration-500 min-h-[230px] sm:min-h-[250px]`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(197,178,142,0.3),transparent_45%)]" />
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-secondary/20 bg-white/80 group-hover:bg-white/10 group-hover:border-secondary-container/40 transition-colors duration-500 mb-5">
                  <service.icon className="text-secondary group-hover:text-secondary-container w-6 h-6 transition-colors" />
                </div>
                <h4 className="text-lg md:text-2xl font-headline font-bold text-primary-container group-hover:text-white mb-3 transition-colors leading-tight">
                  {service.title}
                </h4>
              </div>
              <p className="text-on-surface-variant group-hover:text-white/85 text-xs sm:text-sm leading-relaxed transition-colors max-w-[26ch]">
                {service.description}
              </p>
              <div className="mt-6 h-[2px] w-10 bg-secondary/50 group-hover:w-16 group-hover:bg-gold-accent transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            'Guaranteed Monthly Rent',
            'Fully Managed Operations',
            'Compliance-First Approach',
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-outline-variant/25 bg-white/70 px-4 py-3 text-[11px] sm:text-xs uppercase tracking-[0.16em] text-primary-container/75 font-bold text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
