import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { withBasePath } from '@/lib/base-path';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cube Properties Group | Hands-Free Property Income. Done Right.',
  description: 'Guaranteed rent in London, full property management, tenant-find services, and HMO setup for landlords and tanents.',
  icons: {
    icon: withBasePath('/images/logo.png'),
    shortcut: withBasePath('/images/logo.png'),
    apple: withBasePath('/images/logo.png'),
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
