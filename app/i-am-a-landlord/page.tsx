import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormEmbedFrame from '@/components/FormEmbedFrame';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/page-metadata';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = createPageMetadata({
  path: '/i-am-a-landlord',
  title: 'Landlord Services in London',
  description:
    'Submit your details to discuss guaranteed rent, full property management, tenant find, and landlord support services in London with Cube Properties Group.',
  keywords: [
    'landlord services london',
    'guaranteed rent for landlords london',
    'property management for landlords london',
    'landlord property management london',
    'Cube Properties landlord form',
  ],
});

const landlordFormUrl = 'https://backend.cubeproperties.co.uk/?p=8';

export default function LandlordPage() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <JsonLd
        data={[
          createWebPageSchema({
            path: '/i-am-a-landlord',
            name: 'Landlord Services in London',
            description:
              'Submit your details to discuss guaranteed rent, full property management, tenant find, and landlord support services in London with Cube Properties Group.',
          }),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Landlord Services', path: '/i-am-a-landlord' },
          ]),
        ]}
      />
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-gold-accent text-xs uppercase tracking-[0.32em] mb-5">
            Landlord Support
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold leading-tight max-w-4xl">
            I Am A Landlord
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed">
            Complete the form below to discuss guaranteed rent, full property
            management, tenant find, or HMO setup support for your London
            property.
          </p>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-2 leading-relaxed">
            Our team reviews each landlord enquiry carefully and will contact you
            shortly with the most suitable next step for your property.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto rounded-2xl border border-outline-variant/20 bg-white p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-primary-container leading-tight">
            Landlord Services Built For Reliable Rental Income
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-4 max-w-4xl">
            Cube Properties Group supports landlords across London with
            guaranteed rent, property management, tenant find services, and
            practical support around compliance, maintenance, and tenancy
            coordination. This page is for landlords who want a clear route to
            hands-free property income and a more dependable rental experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-8">
            {[
              'Guaranteed rent options for predictable monthly income',
              'Full management support for tenants, maintenance, and compliance',
              'Tenant find support for landlords who prefer to self-manage',
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-surface-container-low border border-outline-variant/20 p-5 text-sm leading-relaxed text-on-surface-variant"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-7 text-sm leading-relaxed text-on-surface-variant max-w-4xl">
            If you want to review the full breakdown before submitting your
            details, visit our{' '}
            <Link
              href="/services"
              className="text-secondary font-semibold hover:text-primary-container transition-colors"
            >
              property management services page
            </Link>{' '}
            or use the{' '}
            <Link
              href="/contact"
              className="text-secondary font-semibold hover:text-primary-container transition-colors"
            >
              contact page
            </Link>{' '}
            to speak with our team directly.
          </p>
        </div>
      </section>

      <section className="pt-10 md:pt-14 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="w-full max-w-[980px] rounded-2xl border border-outline-variant/20 bg-white p-3 sm:p-4 md:p-5 shadow-[0_24px_60px_-38px_rgba(10,30,60,0.42)]">
            <FormEmbedFrame
              src={landlordFormUrl}
              title="Cube Properties landlord form"
            />
            <p className="text-center text-xs sm:text-sm text-on-surface-variant mt-4">
              If the form does not load, open it directly{' '}
              <Link
                href={landlordFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold hover:text-primary-container transition-colors"
              >
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
