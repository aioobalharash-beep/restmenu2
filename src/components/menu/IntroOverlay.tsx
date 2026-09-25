"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { brand } from "@/brand.config";

// Runs before paint on the client; falls back to useEffect during SSR.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** A one-time cinematic brand reveal on first load (per session). */
export default function IntroOverlay() {
  const reduce = useReducedMotion();
  // Start visible so the very first paint is the loader, never the menu.
  const [show, setShow] = useState(true);

  useIsoLayoutEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("rm_intro") === "1";
    } catch {
      /* ignore */
    }
    // Repeat visit / reduced motion: drop the overlay before paint.
    if (seen || reduce) {
      setShow(false);
      return;
    }
    try {
      sessionStorage.setItem("rm_intro", "1");
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-overlay fixed inset-0 z-[60] grid place-items-center px-6 text-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setShow(false)}
        >
          <div className="flex max-w-[86vw] flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3"
            >
              {brand.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={brand.logo} alt={brand.name} className="h-16 w-auto max-w-[220px] object-contain" />
              ) : (
                <span className="brand-wordmark text-balance font-display text-[clamp(1.8rem,7vw,2.8rem)] leading-tight tracking-tight text-ink">
                  {brand.name}
                  {brand.tagline && <span className="brand-tagline italic text-saffron"> · {brand.tagline}</span>}
                </span>
              )}
            </motion.div>

            <motion.span
              className="block h-[2px] w-14 origin-center bg-saffron"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
