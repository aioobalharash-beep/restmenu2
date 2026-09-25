import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Libre_Franklin,
  Aref_Ruqaa,
  Tajawal,
} from "next/font/google";
import { brand } from "@/brand.config";
import { THEMES } from "@/themes";
import "./globals.css";

// Dramatic wide serif (with its italic) for headers, dish names + course numerals.
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Classic humanist sans for body, prices and the spaced-caps label voice
// (globals.css points --font-mono-face at this same face).
const humanist = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

// Arabic pairing: Aref Ruqaa (calligraphic display) + Tajawal (clean body).
const arDisplay = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-ar-display",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} — The Menu`,
  description:
    "A quiet, beautiful menu. Scroll through each course; swipe between dishes.",
};

export const viewport: Viewport = {
  themeColor: THEMES[brand.theme].themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // White-label accent: only override the palette default when a client sets one.
  const brandVars = (
    brand.accent
      ? { "--color-saffron": brand.accent, "--color-saffron-deep": brand.accentDeep || brand.accent }
      : {}
  ) as React.CSSProperties;

  return (
    <html
      lang="en"
      className={`${serif.variable} ${humanist.variable} ${arDisplay.variable} ${tajawal.variable}`}
      data-brand={brand.theme}
      style={brandVars}
    >
      <body>{children}</body>
    </html>
  );
}
