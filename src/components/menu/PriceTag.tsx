"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { splitOmr } from "@/lib/money";
import { useLang } from "./LanguageContext";

/** The price as a menu-card label: humanist sans, tabular digits, gold unit. Counts up. */
export default function PriceTag({ priceBaisa }: { priceBaisa: number }) {
  const { unit } = useLang();
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(priceBaisa);
  const prev = useRef(priceBaisa);

  useEffect(() => {
    if (reduce) {
      setDisplay(priceBaisa);
      prev.current = priceBaisa;
      return;
    }
    const controls = animate(prev.current, priceBaisa, {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    prev.current = priceBaisa;
    return () => controls.stop();
  }, [priceBaisa, reduce]);

  const { whole, fraction } = splitOmr(Math.round(display));
  return (
    <div
      className="price-tag inline-flex items-baseline gap-2.5 border-b border-hairline pb-1.5"
      dir="ltr"
    >
      <span className="price-amount font-mono text-4xl font-light tabular-nums leading-none tracking-tight text-ink sm:text-5xl">
        {whole}
        <span className="price-dot text-ink-faint">.</span>
        <span className="price-fraction text-2xl text-ink-soft sm:text-3xl">{fraction}</span>
      </span>
      <span className="price-unit font-mono text-[0.68rem] font-medium uppercase tracking-[0.24em] text-saffron">
        {unit}
      </span>
    </div>
  );
}
