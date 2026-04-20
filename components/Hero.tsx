'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { withBasePath } from '@/lib/base-path';

const Hero = () => {
  const slides = [
    {
      id: 1,
      src: withBasePath('/images/slider-1.jpg'),
      alt: 'Premium London living room interior',
    },
    {
      id: 2,
      src: withBasePath('/images/slider-2.jpg'),
      alt: 'Luxury furnished apartment in London',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(sliderTimer);
  }, [slides.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative mt-[82px] min-h-[calc(100svh-82px)] overflow-hidden flex items-center py-10 sm:py-12 md:py-16"
    >
      {/* Background slider with premium right-fade transition */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.03,
                x: isActive ? 0 : -20,
                filter: isActive ? 'blur(0px)' : 'blur(2px)',
              }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute inset-0"
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                loading="eager"
                priority={index === 0}
              />
            </motion.div>
          );
        })}

        <motion.div
          key={`right-fade-${activeSlide}`}
          initial={{ opacity: 0.4, x: 35 }}
          animate={{ opacity: 0, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-[#051934]/35 via-[#051934]/10 to-transparent pointer-events-none z-20"
        />

        <div className="absolute inset-0 hero-gradient opacity-65 z-10"></div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <motion.div 
          variants={containerVariants}
          initial={false}
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-[1px] bg-gold-accent"></div>
            <span className="text-gold-accent font-bold text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.4em]">
              Cube Properties Group
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold text-white leading-[0.95] mb-6 sm:mb-8 tracking-tighter"
          >
            Hands-Free <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-accent to-white/80">
              Property Income.
            </span>
            <br />
            Done Right.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/70 text-base md:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed font-light"
          >
            Maximise rental income with fully managed property services across London.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl rounded-2xl border border-white/20 bg-[#091f3d]/55 backdrop-blur-xl p-2 sm:p-3 shadow-[0_30px_70px_-40px_rgba(5,25,52,0.9)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 cube-row">
              <button className="group cube-btn cube-btn-gold text-primary px-5 py-4 text-[11px] font-black tracking-[0.18em] uppercase">
                <span className="relative z-10 flex items-center justify-center">
                  I am a Landlord
                  <ArrowRight className="ml-2.5 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                </span>
                <span className="cube-top-shine" aria-hidden="true" />
                <span className="cube-side-face" aria-hidden="true" />
              </button>

              <button className="group cube-btn cube-btn-ice text-white hover:text-primary px-5 py-4 text-[11px] font-black tracking-[0.18em] uppercase">
                <span className="flex items-center justify-center">
                  I am a Tenant
                </span>
                <span className="cube-top-shine" aria-hidden="true" />
                <span className="cube-side-face" aria-hidden="true" />
              </button>

              <button className="group cube-btn cube-btn-navy text-gold-accent px-5 py-4 text-[11px] font-black tracking-[0.18em] uppercase">
                <span className="flex items-center justify-center">
                  Work With Us
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
                <span className="cube-top-shine" aria-hidden="true" />
                <span className="cube-side-face" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Floating Brand Card */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:block relative"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-7 lg:p-8 rounded-2xl editorial-shadow max-w-[280px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-accent"></div>
            <div className="relative z-10">
              <span className="text-[#e8cb96] text-xs font-extrabold uppercase tracking-[0.2em] block mb-4">Guaranteed Rent In London</span>
              <div className="text-3xl font-headline font-extrabold text-white mb-2 leading-tight">Predictable income. Zero hassle.</div>
              <p className="text-white/70 text-[10px] leading-relaxed uppercase tracking-wider">
                Guaranteed monthly rent with full management support.
              </p>
            </div>
            {/* Animated background glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </motion.div>
      </div>

      {/* Vertical Accent Line */}
      <div className="absolute left-4 sm:left-6 lg:left-8 bottom-0 w-[1px] h-24 sm:h-32 bg-gradient-to-t from-gold-accent to-transparent hidden md:block"></div>

      {/* Slide Indicators - Refined */}
      <div className="absolute bottom-8 right-4 sm:right-6 lg:right-12 z-30 hidden md:flex flex-col space-y-4 items-end">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`flex items-center space-x-4 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
            >
              <span className="text-white/50 text-[10px] font-bold tracking-widest">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={`h-[2px] transition-all duration-500 ${isActive ? 'w-16 bg-gold-accent' : 'w-8 bg-white/90'}`}></div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
