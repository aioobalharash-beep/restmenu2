import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Libre_Franklin,
  Aref_Ruqaa,
  Tajawal,
  Poppins,
  Open_Sans,
  Comfortaa,
  Almarai,
} from "next/font/google";
import { brand } from "@/brand.config";
import { THEMES } from "@/themes";
import "./globals.css";
import "@/themes/letsgo.css";

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

// "letsgo" preset fonts (see src/themes/letsgo.css). Not preloaded, so they
// cost nothing while another preset is active.
const lgDisplay = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lg-display",
  display: "swap",
  preload: false,
});

const lgBody = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lg-body",
  display: "swap",
  preload: false,
});

const lgLogo = Comfortaa({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-lg-logo",
  display: "swap",
  preload: false,
});

const lgArDisplay = Almarai({
  subsets: ["arabic"],
  weight: ["700", "800"],
  variable: "--font-lg-ar-display",
  display: "swap",
  preload: false,
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
      className={`${serif.variable} ${humanist.variable} ${arDisplay.variable} ${tajawal.variable} ${lgDisplay.variable} ${lgBody.variable} ${lgLogo.variable} ${lgArDisplay.variable}`}
      data-brand={brand.theme}
      style={brandVars}
    >
      <body>{children}</body>
    </html>
  );
}
