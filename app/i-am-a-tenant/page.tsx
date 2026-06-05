import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormEmbedFrame from '@/components/FormEmbedFrame';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/page-metadata';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = createPageMetadata({
  path: '/i-am-a-tenant',
  title: 'Tenant Support in London',
  description:
    'Get in touch with Cube Properties Group for tenant support, tenancy communication, and professionally managed homes in London.',
  keywords: [
    'tenant support london',
    'professionally managed homes london',
    'tenant property support london',
    'Cube Properties tenant form',
  ],
});

const tenantFormUrl = 'https://backend.cubeproperties.co.uk/?p=10';

export default function TenantPage() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <JsonLd
        data={[
          createWebPageSchema({
            path: '/i-am-a-tenant',
            name: 'Tenant Support in London',
            description:
              'Get in touch with Cube Properties Group for tenant support, tenancy communication, and professionally managed homes in London.',
          }),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Tenant Support', path: '/i-am-a-tenant' },
          ]),
        ]}
      />
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-gold-accent text-xs uppercase tracking-[0.32em] mb-5">
            Tenant Support
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold leading-tight max-w-4xl">
            I Am A Tenant
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed">
            Please complete the form below so our team can assist you with
            tenancy support, property communication, and managed housing queries
            as quickly as possible.
          </p>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-2 leading-relaxed">
            We will review your details and get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto rounded-2xl border border-outline-variant/20 bg-white p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-primary-container leading-tight">
            Tenant Support From A Professional London Property Team
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-4 max-w-4xl">
            This page is for tenants who need support from Cube Properties Group.
            We aim to provide clear communication, professionally managed homes,
            and responsive coordination throughout the tenancy where our team is
            involved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-8">
            {[
              'Tenancy communication and support requests',
              'Professionally managed homes with clear contact points',
              'Responsive coordination where property management support is required',
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
            Landlords exploring our broader offering can review the{' '}
            <Link
              href="/services"
              className="text-secondary font-semibold hover:text-primary-container transition-colors"
            >
              full services page
            </Link>
            , and any urgent general enquiry can also be sent through our{' '}
            <Link
              href="/contact"
              className="text-secondary font-semibold hover:text-primary-container transition-colors"
            >
              contact page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="pt-10 md:pt-14 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="w-full max-w-[980px] rounded-2xl border border-outline-variant/20 bg-white p-3 sm:p-4 md:p-5 shadow-[0_24px_60px_-38px_rgba(10,30,60,0.42)]">
            <FormEmbedFrame
              src={tenantFormUrl}
              title="Cube Properties tenant form"
            />
            <p className="text-center text-xs sm:text-sm text-on-surface-variant mt-4">
              If the form does not load, open it directly{' '}
              <Link
                href={tenantFormUrl}
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
