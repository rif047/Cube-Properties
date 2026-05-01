import type { Metadata } from 'next';
import {
  BadgePoundSterling,
  Building2,
  ClipboardCheck,
  Hammer,
  Home,
  Search,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Services | Cube Properties Group',
  description:
    'Guaranteed Rent, Full Property Management, Let Only (Tenant Find), and HMO Setup across London.',
};

const services = [
  {
    title: 'Guaranteed Rent (Rent-to-Rent)',
    subtitle: 'Predictable income. Zero hassle.',
    description:
      'We lease your property for a fixed term and pay a guaranteed monthly rent whether the property is occupied or not.',
    points: [
      'Guaranteed monthly rent with no void periods',
      'Long-term agreements (typically 2-5 years)',
      'No tenant management or day-to-day involvement',
      'Professional property management and maintenance',
    ],
    bestFor:
      'Landlords who want consistent, stress-free income without dealing with tenants or ongoing management.',
    result:
      'Predictable monthly income with zero void risk and no daily management burden.',
    icon: BadgePoundSterling,
  },
  {
    title: 'Full Property Management',
    subtitle: 'Complete peace of mind.',
    description:
      'We manage every part of your property so you can enjoy the benefits of your investment without the workload.',
    points: [
      'Professional marketing and tenant sourcing',
      'Tenant referencing and tenancy agreements',
      'Rent collection and financial reporting',
      'Maintenance and repairs coordination',
      'Full legal and regulatory compliance',
    ],
    bestFor: 'Landlords who want fully hands-free property ownership.',
    result:
      'A fully managed property generating income with minimal involvement from you.',
    icon: Home,
  },
  {
    title: 'Let Only (Tenant Find)',
    subtitle: 'Find the right tenants, fast.',
    description:
      'Ideal for landlords who prefer to self-manage but want expert support in sourcing reliable tenants.',
    points: [
      'List your property on major platforms',
      'Manage enquiries and conduct viewings',
      'Carry out thorough tenant referencing',
      'Prepare tenancy agreements and documentation',
    ],
    bestFor:
      'Experienced landlords who want control over management with expert tenant sourcing.',
    result:
      'Reliable tenant placement from the start, reducing risk and improving tenancy stability.',
    icon: Search,
  },
  {
    title: 'HMO Setup',
    subtitle: 'Maximise your earning potential.',
    description:
      'We help transform properties into high-performing, income-generating assets for long-term growth.',
    points: [
      'HMO (House in Multiple Occupation) strategy and setup',
      'Layout optimisation for increased rental yield',
      'Refurbishment and furnishing coordination',
      'Market analysis and ROI-focused planning',
    ],
    bestFor:
      'Landlords and tanents entering or scaling high-yield property portfolios.',
    result:
      'A structured, high-yield property setup designed for long-term growth.',
    icon: Building2,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-gold-accent text-xs uppercase tracking-[0.32em] mb-5">
            Our Services
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold leading-tight max-w-4xl">
            Property Management Services Built For Landlords & Tenants
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-6 leading-relaxed">
            Cube Properties Group simplifies property letting by managing tenants,
            rent, maintenance, and legal compliance, giving landlords peace of
            mind and steady income across London.
          </p>
          <p className="text-white/75 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed">
            Hands-Free Property Income. Done Right. From guaranteed rent to full
            management, we help landlords and tanents maximise returns while
            giving tenants professionally managed homes.
          </p>
          <p className="text-white/70 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed">
            Guaranteed Rent In London. Looking for the best real estate company in
            the United Kingdom? Our experienced, customer-focused team delivers
            reliable service with transparent communication.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="rounded-xl bg-white p-5 md:p-6 border border-outline-variant/20">
            <TrendingUp className="w-7 h-7 text-secondary mb-4" />
            <p className="text-primary-container text-xl md:text-2xl font-headline font-extrabold">
              Hands-Free Income
            </p>
            <p className="text-on-surface-variant text-sm mt-2">
              Stable returns with less stress.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 md:p-6 border border-outline-variant/20">
            <ShieldCheck className="w-7 h-7 text-secondary mb-4" />
            <p className="text-primary-container text-xl md:text-2xl font-headline font-extrabold">
              Full Compliance
            </p>
            <p className="text-on-surface-variant text-sm mt-2">
              Regulations managed end-to-end.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 md:p-6 border border-outline-variant/20">
            <Hammer className="w-7 h-7 text-secondary mb-4" />
            <p className="text-primary-container text-xl md:text-2xl font-headline font-extrabold">
              Maintenance Covered
            </p>
            <p className="text-on-surface-variant text-sm mt-2">
              Fast repairs and coordinated upkeep.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 md:p-6 border border-outline-variant/20">
            <ClipboardCheck className="w-7 h-7 text-secondary mb-4" />
            <p className="text-primary-container text-xl md:text-2xl font-headline font-extrabold">
              Trusted Screening
            </p>
            <p className="text-on-surface-variant text-sm mt-2">
              Better tenant quality from day one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto rounded-2xl border border-outline-variant/20 bg-white p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-primary-container leading-tight">
            Support For Both Landlords & Tenants
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-4 max-w-4xl">
            Our management model is built around both sides of the tenancy.
            Landlords get stable income, compliance, and reduced workload. Tenants
            get professional communication, responsive maintenance coordination,
            and clear tenancy processes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-6">
            <div className="rounded-xl bg-surface-container-low p-5">
              <p className="text-primary-container text-sm font-bold uppercase tracking-[0.18em] mb-2">
                For Landlords
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Better occupancy, predictable rent flow, and fully managed
                day-to-day operations.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low p-5">
              <p className="text-primary-container text-sm font-bold uppercase tracking-[0.18em] mb-2">
                For Tenants
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Professionally maintained homes, clear tenancy documents, and
                timely support throughout the tenancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-outline-variant/20 bg-white p-5 sm:p-7 md:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-7 md:gap-10">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-7 h-7 text-secondary" />
                    <p className="text-[11px] uppercase tracking-[0.28em] text-primary-container/60">
                      Service
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-primary-container leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-secondary text-sm md:text-base font-semibold mt-3">
                    {service.subtitle}
                  </p>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-4">
                    {service.description}
                  </p>
                </div>

                <div className="w-full lg:max-w-md rounded-xl bg-surface-container-low p-5 md:p-6">
                  <p className="text-primary-container text-sm font-bold uppercase tracking-[0.18em] mb-3">
                    Best For
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {service.bestFor}
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <p className="text-primary-container text-sm font-bold uppercase tracking-[0.18em] mb-3">
                  What You Get
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="text-on-surface-variant text-sm leading-relaxed bg-surface-container-low rounded-lg px-4 py-3"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-xl bg-primary-container px-4 py-4">
                <p className="text-white text-sm font-bold uppercase tracking-[0.16em] mb-1">
                  Result
                </p>
                <p className="text-white/85 text-sm leading-relaxed">
                  {service.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 bg-surface">
        <div className="max-w-7xl mx-auto rounded-2xl bg-primary text-white p-6 sm:p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-52 h-52 bg-gold-accent/20 blur-3xl rounded-full" />
          <p className="relative text-gold-accent text-xs uppercase tracking-[0.28em] mb-4">
            Contact Cube Properties
          </p>
          <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold max-w-3xl leading-tight">
            Looking For The Best Real Estate Company In United Kingdom
          </h3>
          <p className="relative text-white/80 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed">
            Email: info@cubeproperties.co.uk | Phone: +44 1708 915172 | Address:
            King House, Elm Park Avenue, RM12 4RS.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
