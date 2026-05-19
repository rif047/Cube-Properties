import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cube Properties Group',
  description:
    'Read how Cube Properties Group collects, uses, stores, and protects personal data across our property services in London.',
};

const policySections = [
  {
    title: 'Who We Are',
    content:
      'Cube Properties Group provides property management and letting services in London, including Guaranteed Rent, Full Property Management, Let Only (Tenant Find), and HMO Setup support.',
  },
  {
    title: 'What Information We Collect',
    content:
      'We may collect your name, email, phone number, property details, tenancy information, communication history, and other details you provide when you contact us or use our services.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use your information to respond to enquiries, provide and improve our services, manage landlord and tenant relationships, carry out referencing and compliance checks, process rent-related operations, and maintain secure business records.',
  },
  {
    title: 'Legal Basis For Processing',
    content:
      'Depending on the context, we process personal data to perform contracts, comply with legal obligations, support our legitimate business interests, and where required, based on your consent.',
  },
  {
    title: 'Sharing Your Information',
    content:
      'We only share data when necessary to deliver services or meet legal requirements, including trusted partners such as maintenance contractors, referencing providers, payment-related services, legal/compliance advisers, and relevant authorities.',
  },
  {
    title: 'Data Retention',
    content:
      'We keep personal data only for as long as needed for service delivery, legal compliance, dispute resolution, and internal record-keeping. Retention periods may vary based on the type of relationship and applicable regulations.',
  },
  {
    title: 'Data Security',
    content:
      'We apply appropriate technical and organisational safeguards to protect personal data against unauthorised access, misuse, alteration, or loss.',
  },
  {
    title: 'Your Privacy Rights',
    content:
      'You may request access, correction, deletion, restriction, or portability of your personal data, and you may object to certain processing activities where applicable.',
  },
  {
    title: 'Contact About Privacy',
    content:
      'For any privacy request or concern, please contact us at info@cubeproperties.co.uk or +44 20 3051 1660. Postal address: King House, Elm Park Avenue, RM12 4RS.',
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed">
            This page explains how Cube Properties Group collects, uses, and
            protects personal information in relation to our property services.
          </p>
          <p className="text-white/70 text-xs sm:text-sm mt-4 tracking-[0.16em] uppercase">
            Effective Date: April 15, 2026
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-2xl border border-outline-variant/20 bg-white p-6 sm:p-8 md:p-10">
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-4xl">
            We are committed to responsible and transparent handling of personal
            data. By engaging with Cube Properties Group, you acknowledge the
            practices outlined in this policy.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {policySections.map((section) => (
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
