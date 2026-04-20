import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | Cube Properties Group',
  description:
    'Learn how Cube Properties Group uses cookies and similar technologies on our website.',
};

const cookieSections = [
  {
    title: 'What Are Cookies',
    content:
      'Cookies are small text files stored on your device when you visit a website. They help websites operate properly, remember preferences, and improve user experience.',
  },
  {
    title: 'How We Use Cookies',
    content:
      'Cube Properties Group uses cookies to keep the website functioning correctly, understand how visitors use our pages, and improve content and performance for landlords and tenants.',
  },
  {
    title: 'Types Of Cookies We Use',
    content:
      'We may use essential cookies (required for core functionality), analytics cookies (to understand traffic and engagement), and preference cookies (to remember settings and improve usability).',
  },
  {
    title: 'Third-Party Cookies',
    content:
      'Some features may rely on trusted third-party services that can place cookies on your device, such as analytics or embedded tools. These cookies are governed by the relevant third-party providers.',
  },
  {
    title: 'Managing Cookies',
    content:
      'You can control or delete cookies through your browser settings. Disabling certain cookies may impact website functionality and your browsing experience.',
  },
  {
    title: 'Updates To This Policy',
    content:
      'We may update this Cookie Policy from time to time to reflect legal, technical, or operational changes. Updates will be published on this page with an updated effective date.',
  },
  {
    title: 'Contact Us',
    content:
      'For questions about this Cookie Policy, contact us at info@cubeproperties.co.uk or +44 20 3051 1660. Postal address: Kings House, Elm Park Avenue, RM12 4RS.',
  },
];

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed">
            This page explains how Cube Properties Group uses cookies and related
            technologies across our website.
          </p>
          <p className="text-white/70 text-xs sm:text-sm mt-4 tracking-[0.16em] uppercase">
            Effective Date: April 15, 2026
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-2xl border border-outline-variant/20 bg-white p-6 sm:p-8 md:p-10">
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-4xl">
            We use cookies responsibly to support a smooth browsing experience and
            continuously improve our digital service quality.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {cookieSections.map((section) => (
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
