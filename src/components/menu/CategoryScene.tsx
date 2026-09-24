"use client";

import { forwardRef, useState } from "react";
import type { MenuCategory } from "@/lib/types";
import ItemSwiper from "./ItemSwiper";
import ItemDetails from "./ItemDetails";
import CourseIndex from "./CourseIndex";
import ScrollCue from "./ScrollCue";
import { useLang } from "./LanguageContext";

const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const pad = (n: number) => String(n).padStart(2, "0");
const toArabicDigits = (s: string) => s.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);

/** One full-height editorial spread: a course, its copy, and its floating dishes. */
const CategoryScene = forwardRef<
  HTMLElement,
  {
    category: MenuCategory;
    categories: MenuCategory[];
    next: MenuCategory | null;
    active: boolean;
    sceneIndex: number;
    onJumpNext: () => void;
    onJumpTo: (i: number) => void;
  }
>(function CategoryScene(
  { category, categories, next, active, sceneIndex, onJumpNext, onJumpTo },
  ref,
) {
  const { pick, rtl } = useLang();
  const [index, setIndex] = useState(0);
  const items = category.items;
  const item = items[index] ?? items[0];

  const catName = pick(category.name, category.nameAr);
  const issueNo = pad(sceneIndex + 1);

  // Heuristic: show steam for hot categories (drinks/soups), EN or AR.
  const hot = /hot|drink|coffee|tea|latte|soup|قهوة|شاي|ساخن|حساء|لاتيه|مشروب/i.test(
    `${category.name} ${category.nameAr ?? ""}`,
  );

  return (
    <section
      ref={ref}
      data-scene={sceneIndex}
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-6 pb-[max(2.25rem,calc(env(safe-area-inset-bottom)+1.25rem))] pt-[max(5.25rem,calc(env(safe-area-inset-top)+4.5rem))] sm:pt-[max(5.75rem,calc(env(safe-area-inset-top)+4.5rem))] sm:px-12"
      aria-label={catName}
    >
      {/* Giant ghost course name — a faint masthead behind the spread */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-[2%] z-0 select-none whitespace-nowrap font-display leading-none text-ink opacity-[0.05]"
        style={{ insetInlineStart: "3%", fontSize: "clamp(3.5rem,13vw,12rem)" }}
      >
        {catName}
      </span>

      {/* Running header: an editorial issue label — "No. 04 — Appetizers" */}
      <div className="relative z-10 text-center">
        <span className={`text-indigo ${rtl ? "text-[0.95rem]" : "font-mono text-[0.68rem] uppercase tracking-[0.34em]"}`}>
          {rtl ? (
            <>رقم {toArabicDigits(issueNo)} — {catName}</>
          ) : (
            <>
              <span className="font-display text-[0.95rem] normal-case italic tracking-normal">No.</span>{" "}
              <span className="tabular-nums">{issueNo}</span>
              <span className="mx-2 text-saffron">—</span>
              {catName}
            </>
          )}
        </span>
      </div>

      {/* Stage */}
      <div className="relative z-10 grid flex-1 items-center gap-x-8 gap-y-4 md:grid-cols-[0.92fr_1.3fr] lg:gap-x-12">
        {/* Copy */}
        <div className="order-2 md:order-1">
          {item ? (
            <>
              <ItemDetails item={item} />
              <CourseIndex categories={categories} active={sceneIndex} onJump={onJumpTo} />
            </>
          ) : (
            <p className="font-display text-lg italic text-ink-faint">
              {rtl ? "لا أطباق في هذا الطبق بعد." : "No dishes in this course yet."}
            </p>
          )}
        </div>

        {/* Dish */}
        <div className="order-1 flex items-center justify-center md:order-2">
          {item && (
            <ItemSwiper
              items={items}
              index={Math.min(index, items.length - 1)}
              onIndexChange={setIndex}
              active={active}
              hot={hot}
            />
          )}
        </div>
      </div>

      {/* Scroll affordance / footer */}
      <div className="relative z-10 mt-4 flex shrink-0 items-center justify-center">
        <ScrollCue isLast={!next} onJump={onJumpNext} />
      </div>
    </section>
  );
});

export default CategoryScene;
