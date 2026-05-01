import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact | Cube Properties Group',
  description:
    'Contact Cube Properties Group in London for guaranteed rent, property management, and letting support.',
};

const contactCards = [
  {
    title: 'Email',
    value: 'info@cubeproperties.co.uk',
    href: 'mailto:info@cubeproperties.co.uk',
    icon: Mail,
  },
  {
    title: 'Phone',
    value: '+44 1708 915172',
    href: 'tel:+441708915172',
    icon: Phone,
  },
  {
    title: 'Address',
    value: 'King House, Elm Park Avenue, RM12 4RS',
    href: '#',
    icon: MapPin,
  },
];

const actionButtons = [
  { label: 'I am a Landlord', href: '/i-am-a-landlord' },
  { label: 'I am a Tenant', href: '/i-am-a-tenant' },
  { label: 'Work With Us', href: '/work-with-us' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-gold-accent text-xs uppercase tracking-[0.32em] mb-5">
            Contact Us
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold leading-tight max-w-4xl">
            Let&apos;s Talk About Your Property Goals
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed">
            Cube Properties Group helps landlords and tenants with reliable,
            professional property services across London.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {contactCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl bg-white border border-outline-variant/20 p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <card.icon className="w-7 h-7 text-secondary mb-4" />
              <p className="text-primary-container text-xs uppercase tracking-[0.22em] mb-2">
                {card.title}
              </p>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                {card.value}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-2xl bg-white border border-outline-variant/20 p-6 sm:p-8 md:p-12">
          <div className="flex items-center gap-3 mb-5">
            <Building2 className="w-7 h-7 text-secondary" />
            <p className="text-primary-container text-xs uppercase tracking-[0.25em]">
              Choose Your Path
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-primary-container leading-tight max-w-3xl">
            How Would You Like To Work With Cube Properties?
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
            No forms. Just pick an option and our team will guide you to the
            right service quickly.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {actionButtons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className="inline-flex items-center justify-center rounded-xl bg-primary text-white px-5 py-4 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase hover:bg-primary-container transition-colors duration-300"
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
