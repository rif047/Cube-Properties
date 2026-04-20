'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { withBasePath } from '@/lib/base-path';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = pathname === '/';
  const useSolidStyle = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const normalizePath = (path: string) => {
    if (!path) return '/';
    const withoutQuery = path.split('?')[0].split('#')[0];
    if (withoutQuery === '/') return '/';
    return withoutQuery.replace(/\/+$/, '') || '/';
  };

  const isActivePath = (href: string) =>
    normalizePath(pathname) === normalizePath(href);

  const navLinks = [
    { name: 'Home', href: '/', active: isActivePath('/') },
    { name: 'Our Services', href: '/services', active: isActivePath('/services') },
    {
      name: 'Join User',
      href: '#',
      active: false,
      children: [
        { name: 'I am a Landlord', href: '/i-am-a-landlord' },
        { name: 'I am a Tenant', href: '/i-am-a-tenant' },
        { name: 'Work With Us', href: '/work-with-us' },
      ],
    },
    { name: 'Contact', href: '/contact', active: isActivePath('/contact') },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${useSolidStyle
        ? 'bg-white/95 backdrop-blur-lg border-b border-outline-variant/20 shadow-md'
        : 'bg-white/80 backdrop-blur-md border-b border-white/40'
        }`}
    >
      <div className="max-w-7xl mx-auto h-[82px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Cube Properties home"
          className="flex items-center shrink-0"
        >
          <Image
            src={withBasePath('/images/logo.png')}
            alt="Cube Properties logo"
            width={646}
            height={203}
            className="h-11 sm:h-12 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 rounded-full border border-outline-variant/25 bg-white/85 backdrop-blur px-4 lg:px-6 py-2">
          {navLinks.map((link) => (
            link.children ? (
              <div key={link.name} className="relative group">
                <button
                  className={`text-[11px] lg:text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:text-gold-accent flex items-center py-2 px-2 ${useSolidStyle ? 'text-primary-container' : 'text-primary-container'
                    }`}
                >
                  {link.name}
                  <ChevronDown size={14} className="ml-1.5 -mt-0.5" />
                </button>
                <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                  <div className="min-w-[210px] rounded-xl border border-outline-variant/20 bg-white shadow-xl p-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-xs font-semibold text-primary-container hover:bg-surface-container-low transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] lg:text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:text-gold-accent py-2 px-2 ${link.active
                  ? 'text-gold-accent'
                  : useSolidStyle ? 'text-primary-container' : 'text-primary-container'
                  }`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${useSolidStyle ? 'text-primary-container' : 'text-primary-container'
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-outline-variant/20 p-6 flex flex-col space-y-6 shadow-xl"
          >
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.name} className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-wider text-primary-container">
                    {link.name}
                  </p>
                  <div className="pl-3 border-l border-outline-variant/30 space-y-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-xs font-semibold text-primary-container/80 hover:text-gold-accent transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium uppercase tracking-wider ${link.active ? 'text-gold-accent' : 'text-primary-container'
                    }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
