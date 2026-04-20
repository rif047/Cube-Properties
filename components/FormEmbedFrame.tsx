'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type FormEmbedFrameProps = {
  src: string;
  title: string;
};

export default function FormEmbedFrame({ src, title }: FormEmbedFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [frameKey, setFrameKey] = useState(0);

  const loadingTexts = useMemo(
    () => [
      'Preparing the form...',
      'Connecting to secure backend...',
      'Almost there, loading your form...',
    ],
    []
  );

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 rounded-xl border border-outline-variant/15 bg-gradient-to-b from-[#f8fbff] to-[#eef3fa] flex items-center justify-center">
          <div className="w-full max-w-md px-6 py-10 text-center">
            <div className="mx-auto h-10 w-10 rounded-full border-2 border-secondary/30 border-t-secondary animate-spin" />
            <p className="text-primary-container font-semibold text-sm mt-4">
              {loadingTexts[frameKey % loadingTexts.length]}
            </p>
            <p className="text-on-surface-variant text-xs mt-2 leading-relaxed">
              If this takes too long, please retry or open the form in a new tab.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setFrameKey((prev) => prev + 1);
                  setIsLoaded(false);
                }}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-primary-container transition-colors"
              >
                Retry
              </button>
              <Link
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-outline-variant/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-container hover:bg-surface-container-low transition-colors"
              >
                Open Form
              </Link>
            </div>
          </div>
        </div>
      )}

      <iframe
        key={frameKey}
        src={src}
        title={title}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-[700px] sm:h-[760px] md:h-[820px] lg:h-[860px] xl:h-[900px] rounded-xl border border-outline-variant/15 bg-surface-container-low"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}
