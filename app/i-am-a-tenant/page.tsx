import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormEmbedFrame from '@/components/FormEmbedFrame';

export const metadata: Metadata = {
  title: 'I Am A Tenant | Cube Properties Group',
  description:
    'Complete the tenant form to get support from Cube Properties Group.',
};

const tenantFormUrl = 'https://backend.cubeproperties.co.uk/?p=10';

export default function TenantPage() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
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
            Please complete the form below so our team can assist you quickly.
          </p>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-2 leading-relaxed">
            We will review your details and get back to you as soon as possible.
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
