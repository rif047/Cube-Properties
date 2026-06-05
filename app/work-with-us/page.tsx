import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormEmbedFrame from '@/components/FormEmbedFrame';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/page-metadata';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = createPageMetadata({
  path: '/work-with-us',
  title: 'Work With a Property Management Company in London',
  description:
    'Submit your details to work with Cube Properties Group on property collaboration, landlord support, and letting-related opportunities in London.',
  keywords: [
    'work with property management company london',
    'property collaboration london',
    'partner with letting company london',
    'Cube Properties work with us',
  ],
});

const workWithUsFormUrl = 'https://backend.cubeproperties.co.uk/?p=11';

export default function WorkWithUsPage() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <JsonLd
        data={[
          createWebPageSchema({
            path: '/work-with-us',
            name: 'Work With a Property Management Company in London',
            description:
              'Submit your details to work with Cube Properties Group on property collaboration, landlord support, and letting-related opportunities in London.',
          }),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Work With Us', path: '/work-with-us' },
          ]),
        ]}
      />
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-gold-accent text-xs uppercase tracking-[0.32em] mb-5">
            Careers & Collaboration
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold leading-tight max-w-4xl">
            Work With Cube Properties
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed">
            Join our network by completing the collaboration form below if you
            want to work with a London property management company focused on
            landlords, tenants, and letting operations.
          </p>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-2 leading-relaxed">
            Share your details and our team will review your submission shortly.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto rounded-2xl border border-outline-variant/20 bg-white p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-primary-container leading-tight">
            Collaboration Opportunities With Cube Properties Group
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-4 max-w-4xl">
            We welcome relevant enquiries from people and businesses who want to
            work with Cube Properties Group in support of property management,
            lettings, landlord services, tenancy operations, or related
            collaboration opportunities across London.
          </p>
        </div>
      </section>

      <section className="pt-10 md:pt-14 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="w-full max-w-[980px] rounded-2xl border border-outline-variant/20 bg-white p-3 sm:p-4 md:p-5 shadow-[0_24px_60px_-38px_rgba(10,30,60,0.42)]">
            <FormEmbedFrame
              src={workWithUsFormUrl}
              title="Cube Properties collaboration form"
            />
            <p className="text-center text-xs sm:text-sm text-on-surface-variant mt-4">
              If the form does not load, open it directly{' '}
              <Link
                href={workWithUsFormUrl}
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
