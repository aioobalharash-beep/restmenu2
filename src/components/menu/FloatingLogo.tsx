"use client";

import { brand } from "@/brand.config";

/**
 * The brand, top-left: an editorial serif wordmark (or the client's logo image).
 * No pill, no glass — it reads as a masthead, not a button.
 */
export default function FloatingLogo() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-[max(1.75rem,calc(env(safe-area-inset-top)+1rem))] sm:pt-[max(2.25rem,calc(env(safe-area-inset-top)+1rem))] sm:px-12">
        <a
          href="/"
          className="focus-ring pointer-events-auto inline-flex items-center"
          aria-label={`${brand.name} — home`}
        >
          {brand.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-7 w-auto max-w-[170px] object-contain"
              draggable={false}
            />
          ) : (
            <span className="font-display text-[1.3rem] leading-none tracking-[0.01em] text-ink">
              {brand.name}
              {brand.tagline && (
                // Tagline drops on phones so the wordmark clears the controls.
                <span className="hidden sm:inline">
                  <span className="text-saffron"> · </span>
                  <span className="italic text-saffron">{brand.tagline}</span>
                </span>
              )}
            </span>
          )}
        </a>
      </div>
    </header>
  );
}
