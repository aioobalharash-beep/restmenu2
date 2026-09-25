"use client";

/**
 * The card behind the whole menu: a champagne parchment (or deep forest green,
 * in the evening) wash with a single faint tonal pool for depth and a subtle grain. The real
 * light — the spotlight — lives behind each dish, so this stays understated.
 */
export default function BackgroundField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base wash */}
      <div className="bg-wash absolute inset-0" />

      {/* One faint drifting pool, tied to the shared --sy scroll variable */}
      <div
        className="absolute right-[-8vw] top-[24vh] h-[52vh] w-[52vh] rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--color-saffron) 18%, transparent), color-mix(in srgb, var(--color-sage) 10%, transparent) 42%, transparent 68%)",
          transform: "translateY(calc(var(--sy, 0) * 0.04px))",
        }}
      />

      {/* Paper grain */}
      <div className="paper-grain" />
    </div>
  );
}
