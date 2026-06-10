import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/page-metadata';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = createPageMetadata({
  path: '/privacy-policy',
  title: 'Privacy Notice',
  description:
    'Read the Cube Properties Group Ltd Privacy Notice, including how personal data is collected, used, shared, retained, and protected.',
  keywords: [
    'Cube Properties privacy notice',
    'Cube Properties privacy policy',
    'property management privacy notice london',
  ],
});

const identityAndContactData = [
  'full name, date of birth, and contact details (address, email, telephone);',
  'identification documents (passport, driving licence, visa, biometric residence permit) for identity and Right to Rent checks.',
];

const financialData = [
  'bank account details, sort code, and account number;',
  'credit history, references, proof of income, and employment details;',
  'rent payment records and any arrears history.',
];

const tenancyAndPropertyData = [
  'details of the property you own, let, or occupy;',
  'tenancy agreements, deposit records, and correspondence;',
  'records of repairs, inspections, and maintenance.',
];

const specialCategoryData = [
  'in limited circumstances, we may process information relating to health or vulnerability where it is relevant to a tenancy and where we have a lawful basis to do so.',
];

const lawfulBasisRows = [
  {
    purpose: 'Referencing, identity, and Right to Rent checks',
    lawfulBasis: 'Legal obligation; performance of a contract',
  },
  {
    purpose: 'Managing tenancies and collecting rent',
    lawfulBasis: 'Performance of a contract',
  },
  {
    purpose: 'Protecting tenancy deposits',
    lawfulBasis: 'Legal obligation',
  },
  {
    purpose: 'Arranging repairs, maintenance, and compliance',
    lawfulBasis: 'Performance of a contract; legal obligation',
  },
  {
    purpose: 'Anti-money laundering checks',
    lawfulBasis: 'Legal obligation',
  },
  {
    purpose: 'Responding to enquiries and communications',
    lawfulBasis: 'Legitimate interests',
  },
  {
    purpose: 'Improving our services and marketing (where consented)',
    lawfulBasis: 'Consent; legitimate interests',
  },
];

const sharingItems = [
  'referencing agencies and credit reference agencies;',
  'government-authorised tenancy deposit protection schemes (TDS, DPS, or mydeposits);',
  'contractors and tradespeople engaged to carry out repairs or maintenance;',
  'local authorities, HMRC, and other regulatory or government bodies where required by law;',
  'the relevant landlord or tenant, as necessary to manage the tenancy;',
  'our professional advisers, including solicitors and accountants;',
  'the Property Redress Scheme, in the event of a complaint or dispute.',
];

const retentionItems = [
  'tenancy and financial records are kept for six (6) years after the end of the tenancy or relationship, in line with HMRC and limitation requirements;',
  'anti-money laundering and Right to Rent records are kept for the period required by law;',
  'enquiry and marketing data is kept until you ask us to stop or withdraw consent.',
];

const rightsItems = [
  'the right to be informed about how your data is used;',
  'the right of access to the personal data we hold about you;',
  'the right to rectification of inaccurate or incomplete data;',
  'the right to erasure (the "right to be forgotten") in certain circumstances;',
  'the right to restrict processing in certain circumstances;',
  'the right to data portability;',
  'the right to object to processing based on legitimate interests or for direct marketing; and',
  'rights in relation to automated decision-making and profiling.',
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm md:text-[15px] leading-7 text-on-surface-variant">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-5 sm:p-6 md:p-7 editorial-shadow">
      <div className="flex items-start gap-3">
        <span className="inline-flex min-w-8 items-center justify-center rounded-full bg-primary text-white text-xs font-semibold px-2 py-1">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-primary leading-tight">
            {title}
          </h2>
          <div className="mt-4 space-y-4 text-sm md:text-[15px] leading-7 text-on-surface-variant">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <JsonLd
        data={[
          createWebPageSchema({
            path: '/privacy-policy',
            name: 'Privacy Notice',
            description:
              'Read the Cube Properties Group Ltd Privacy Notice, including how personal data is collected, used, shared, retained, and protected.',
          }),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy-policy' },
          ]),
        ]}
      />
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-14 md:pb-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative max-w-6xl mx-auto">
          <p className="text-gold-accent text-xs uppercase tracking-[0.32em] mb-5">
            Legal
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold leading-tight max-w-4xl">
            Privacy Notice
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mt-5 leading-relaxed">
            How we collect, use, and protect your personal data.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl">
            <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-3">
              <p className="text-white/60 text-[11px] uppercase tracking-[0.2em]">
                Last Updated
              </p>
              <p className="text-white text-sm font-medium mt-1">31 May 2026</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-3">
              <p className="text-white/60 text-[11px] uppercase tracking-[0.2em]">
                Company Number
              </p>
              <p className="text-white text-sm font-medium mt-1">14885336</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-3">
              <p className="text-white/60 text-[11px] uppercase tracking-[0.2em]">
                Property Redress Scheme
              </p>
              <p className="text-white text-sm font-medium mt-1">PRS057741</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-3">
              <p className="text-white/60 text-[11px] uppercase tracking-[0.2em]">
                ICO Registration Number
              </p>
              <p className="text-white text-sm font-medium mt-1">ZC110845</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="rounded-2xl border border-outline-variant/20 bg-white p-5 sm:p-6 md:p-7">
            <p className="text-sm md:text-[15px] leading-7 text-on-surface-variant">
              This notice explains how we handle the personal data of landlords,
              tenants, prospective tenants, guarantors, contractors, and anyone
              who contacts us. We are committed to protecting your privacy and
              handling your data in accordance with the UK General Data
              Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <PolicySection number="1" title="Who We Are">
            <p>
              Cube Properties Group Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a letting and
              property management agency registered in England and Wales. We are
              the data controller responsible for the personal data we hold
              about you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-xl border border-outline-variant/20 bg-surface p-4">
                <p>
                  <strong>Company Number:</strong> 14885336
                </p>
                <p>
                  <strong>Registered Office:</strong> Unit 4, Ground Floor,
                  Suite 10, Kings Estate, Broadway Parade, Elm Park Avenue,
                  Hornchurch, Essex, England, RM12 4RS
                </p>
              </div>
              <div className="rounded-xl border border-outline-variant/20 bg-surface p-4">
                <p>
                  <strong>Email:</strong> info@cubeproperties.co.uk
                </p>
                <p>
                  <strong>Telephone:</strong> 020 3051 1660
                </p>
                <p>
                  <strong>ICO Registration Number:</strong> ZC110845
                </p>
                <p>
                  <strong>Property Redress Scheme:</strong> PRS057741
                </p>
              </div>
            </div>
          </PolicySection>

          <PolicySection number="2" title="The Information We Collect">
            <p>
              Depending on your relationship with us, we may collect and process
              the following categories of personal data:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-outline-variant/20 bg-surface p-4">
                <h3 className="text-base font-semibold text-primary">
                  Identity and contact data:
                </h3>
                <BulletList items={identityAndContactData} />
              </div>
              <div className="rounded-xl border border-outline-variant/20 bg-surface p-4">
                <h3 className="text-base font-semibold text-primary">
                  Financial data:
                </h3>
                <BulletList items={financialData} />
              </div>
              <div className="rounded-xl border border-outline-variant/20 bg-surface p-4">
                <h3 className="text-base font-semibold text-primary">
                  Tenancy and property data:
                </h3>
                <BulletList items={tenancyAndPropertyData} />
              </div>
              <div className="rounded-xl border border-outline-variant/20 bg-surface p-4">
                <h3 className="text-base font-semibold text-primary">
                  Special category data (where necessary):
                </h3>
                <BulletList items={specialCategoryData} />
              </div>
            </div>
          </PolicySection>

          <PolicySection number="3" title="How We Use Your Data and Our Lawful Basis">
            <p>
              Under the UK GDPR, we must have a lawful basis for processing your
              personal data. The table below sets out how and why we use your
              data, and the lawful basis we rely on:
            </p>
            <div className="overflow-hidden rounded-xl border border-outline-variant/20">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm md:text-[15px]">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Purpose</th>
                      <th className="px-4 py-3 font-semibold">Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {lawfulBasisRows.map((row, index) => (
                      <tr
                        key={row.purpose}
                        className={
                          index % 2 === 0
                            ? 'bg-surface-container-low'
                            : 'bg-white'
                        }
                      >
                        <td className="px-4 py-3 align-top text-on-surface-variant">
                          {row.purpose}
                        </td>
                        <td className="px-4 py-3 align-top text-on-surface-variant">
                          {row.lawfulBasis}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </PolicySection>

          <PolicySection number="4" title="Who We Share Your Data With">
            <p>
              We only share your personal data where necessary, and we never
              sell it. We may share data with:
            </p>
            <BulletList items={sharingItems} />
            <p>
              Where we use third-party processors, we put in place contracts
              requiring them to safeguard your data and to process it only on
              our instructions.
            </p>
          </PolicySection>

          <PolicySection number="5" title="How Long We Keep Your Data">
            <p>
              We retain personal data only for as long as necessary for the
              purposes for which it was collected, and to meet our legal and
              regulatory obligations. As a general guide:
            </p>
            <BulletList items={retentionItems} />
            <p>Once data is no longer required, we securely delete or anonymise it.</p>
          </PolicySection>

          <PolicySection number="6" title="How We Protect Your Data">
            <p>
              We take the security of your personal data seriously and use
              appropriate technical and organisational measures to protect it
              against unauthorised access, loss, or misuse. These measures
              include secure storage, restricted access, and staff
              confidentiality obligations. All client monies are held in a
              dedicated client account, separate from our own funds, and we
              hold Client Money Protection.
            </p>
          </PolicySection>

          <PolicySection number="7" title="International Transfers">
            <p>
              We primarily store and process your data within the UK. Where any
              data is transferred outside the UK, we ensure that appropriate
              safeguards are in place in accordance with UK data protection law,
              such as an adequacy decision or standard contractual clauses.
            </p>
          </PolicySection>

          <PolicySection number="8" title="Your Rights">
            <p>
              Under the UK GDPR, you have the following rights in relation to
              your personal data:
            </p>
            <BulletList items={rightsItems} />
            <p>
              To exercise any of these rights, please contact us using the
              details in Section 1. We will respond within one month, as
              required by law.
            </p>
          </PolicySection>

          <PolicySection number="9" title="Cookies and Our Website">
            <p>
              Where you use our website, we may collect limited data through
              cookies and similar technologies to help the site function and to
              understand how it is used. You can control cookies through your
              browser settings. Where required, we will request your consent
              before placing non-essential cookies.
            </p>
          </PolicySection>

          <PolicySection number="10" title="How to Complain">
            <p>
              If you have any concern about how we handle your personal data,
              please contact us first and we will do our best to resolve it. You
              also have the right to lodge a complaint with the Information
              Commissioner&apos;s Office (ICO), the UK supervisory authority for data
              protection:
            </p>
            <div className="rounded-xl border border-outline-variant/20 bg-surface p-4">
              <p className="font-semibold text-primary">
                Information Commissioner&apos;s Office
              </p>
              <p>Website: www.ico.org.uk</p>
              <p>Helpline: 0303 123 1113</p>
              <p>
                Address: Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9
                5AF
              </p>
            </div>
          </PolicySection>

          <PolicySection number="11" title="Changes to This Notice">
            <p>
              We may update this Privacy Notice from time to time to reflect
              changes in our practices or legal requirements. The latest version
              will always be available on request and, where applicable, on our
              website. The version number and date at the top of this document
              indicate when it was last reviewed.
            </p>
            <p>
              This Privacy Notice is provided for transparency and does not form
              part of any contract between you and Cube Properties Group Ltd.
            </p>
          </PolicySection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
