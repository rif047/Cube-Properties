import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TrustShowcase from '@/components/TrustShowcase';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/page-metadata';
import { createWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = createPageMetadata({
  path: '/',
  title: 'Guaranteed Rent and Property Management in London',
  description:
    'Cube Properties Group helps landlords secure guaranteed rent in London with full property management, tenant find services, and HMO setup support.',
  keywords: [
    'guaranteed rent london',
    'property management london',
    'landlord services london',
    'tenant find service london',
    'hmo setup london',
    'Cube Properties Group',
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd
        data={createWebPageSchema({
          path: '/',
          name: 'Guaranteed Rent and Property Management in London',
          description:
            'Cube Properties Group helps landlords secure guaranteed rent in London with full property management, tenant find services, and HMO setup support.',
        })}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <TrustShowcase /> */}
      <CTA />
      <Footer />
    </main>
  );
}
