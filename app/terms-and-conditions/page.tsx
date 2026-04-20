import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Cube Properties Group',
  description:
    'Read the Terms & Conditions for using Cube Properties Group services and website.',
};

const termsSections = [
  {
    title: 'Acceptance Of Terms',
    content:
      'By using our website or engaging with Cube Properties Group services, you agree to these Terms & Conditions. If you do not agree, please discontinue use of our website and services.',
  },
  {
    title: 'Our Services',
    content:
      'Cube Properties Group provides property-related services in London, including Guaranteed Rent, Full Property Management, Let Only (Tenant Find), and HMO Setup support, subject to service-specific agreements.',
  },
  {
    title: 'Use Of Website',
    content:
      'You agree to use this website lawfully and responsibly. You must not misuse, disrupt, or attempt unauthorised access to any part of the website, systems, or data.',
  },
  {
    title: 'Service Information',
    content:
      'We aim to keep website content accurate and up to date. However, service details may change over time and may vary based on property type, location, legal requirements, and individual circumstances.',
  },
  {
    title: 'Fees, Payments, And Contracts',
    content:
      'Specific fees, payment terms, and service responsibilities are defined in individual contracts or written agreements. In case of conflict, signed service agreements take priority over general website content.',
  },
  {
    title: 'Limitation Of Liability',
    content:
      'To the extent permitted by law, Cube Properties Group is not liable for indirect or consequential losses arising from website use or reliance on informational content. Nothing in these terms excludes liability where exclusion is unlawful.',
  },
  {
    title: 'Intellectual Property',
    content:
      'Website content, branding, logos, and materials are owned by or licensed to Cube Properties Group. You may not copy, reproduce, or distribute them without prior written permission.',
  },
  {
    title: 'Privacy And Cookies',
    content:
      'Your use of our website is also governed by our Privacy Policy and Cookie Policy, which explain how personal data and cookies are handled.',
  },
  {
    title: 'Changes To These Terms',
    content:
      'We may update these Terms & Conditions from time to time. Updates will be posted on this page with a revised effective date.',
  },
  {
    title: 'Contact Information',
    content:
      'For questions about these Terms & Conditions, contact us at info@cubeproperties.co.uk or +44 20 3051 1660. Postal address: Kings House, Elm Park Avenue, RM12 4RS.',
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-gold-accent text-xs uppercase tracking-[0.32em] mb-5">
            Legal
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold leading-tight max-w-4xl">
            Terms & Conditions
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed">
            These terms outline the conditions for using Cube Properties Group
            services and website content.
          </p>
          <p className="text-white/70 text-xs sm:text-sm mt-4 tracking-[0.16em] uppercase">
            Effective Date: April 15, 2026
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-2xl border border-outline-variant/20 bg-white p-6 sm:p-8 md:p-10">
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-4xl">
            Please review these terms carefully before using our services. They
            are intended to provide transparency and clarity for all parties.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {termsSections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl bg-surface-container-low border border-outline-variant/20 p-5 md:p-6"
              >
                <h2 className="text-primary-container text-lg md:text-xl font-headline font-extrabold leading-tight">
                  {section.title}
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-3">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
