/**
 * Theme presets. The active one is picked by `theme` in src/brand.config.ts.
 *
 * A preset = this registry entry (default mode, browser theme colour, ambient
 * hues) + a CSS file scoped to `:root[data-brand="<id>"]` that overrides the
 * design tokens and restyles the neutral hook classes (.running-header,
 * .price-tag, .dish-name, .brand-wordmark, .star-accent, …).
 * "bistro" is the base look in globals.css and needs no extra CSS.
 * To pitch a new look, add a preset; to revert, switch `theme` back.
 */
export type ThemeId = "bistro";

export type ThemePreset = {
  label: string;
  /** Which mode a first-time guest sees; the light/evening toggle still works. */
  defaultMode: "light" | "dark";
  /** Browser UI colour (viewport.themeColor). */
  themeColor: string;
  /** Per-course ambient tints, cross-faded as guests scroll. */
  hues: string[];
};

export const THEMES: Record<ThemeId, ThemePreset> = {
  bistro: {
    label: "The Parisian Bistro Moderne",
    defaultMode: "dark",
    themeColor: "#16231E",
    hues: ["var(--color-saffron)", "#8FA39A", "#B89B5E", "#2F5A48", "var(--color-sage)"],
  },
};
