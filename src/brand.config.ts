/**
 * ─────────────────────────────────────────────────────────────
 *  BRAND CONFIG — the only file you edit to white-label a client.
 * ─────────────────────────────────────────────────────────────
 *  1. name / tagline   → shown in the floating logo pill + page title.
 *  2. logo             → drop the client's file at  public/brand/logo.svg
 *                        (or .png) and set the path here, or leave null to
 *                        use the built-in fork-&-knife mark + wordmark.
 *  3. accent / accentDeep → the brand colour (buttons, highlights, price unit).
 *                        Leave both "" to use the built-in champagne-gold accent.
 *                        Set a hex to override it site-wide (light + dark).
 *  4. contact          → location / Instagram / WhatsApp for the footer.
 *                        (Env vars NEXT_PUBLIC_* override these if set.)
 *
 *  5. theme            → visual preset from src/themes ("bistro" = default).
 *
 *  Favicon: drop a file at  src/app/icon.png  to override the tab icon.
 *
 *  Then push & deploy. Nothing else in the codebase needs to change.
 */
import type { ThemeId } from "@/themes";

export type Brand = {
  /** Visual preset from src/themes (fonts, palette, signature details). */
  theme: ThemeId;
  name: string;
  tagline: string;
  logo: string | null;
  accent: string;
  accentDeep: string;
  contact: {
    /** Google Maps URL, or any address link. */
    map: string;
    /** Instagram profile URL. */
    instagram: string;
    /** A full wa.me URL, or just a phone number (we build the link). */
    whatsapp: string;
  };
  features: {
    /** Enable table QR ordering (cart → order → admin orders board). */
    ordering: boolean;
  };
};

export const brand: Brand = {
  theme: "bistro",
  name: "Café Moderne",
  tagline: "carte du jour",
  logo: null,
  accent: "",
  accentDeep: "",
  contact: {
    map: "",
    instagram: "",
    whatsapp: "",
  },
  features: {
    ordering: false,
  },
};
