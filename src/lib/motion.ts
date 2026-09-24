/**
 * Motion tokens for framer-motion (seconds + bezier arrays), mirroring the
 * CSS tokens in globals.css (transitions.dev motion scale). Pick by usage,
 * not by the nearest number.
 */
export const MOTION = {
  quick: 0.15, // modal/dropdown close, text swap
  fast: 0.25, // dropdown/modal open, tabs, page slide
  medium: 0.35, // panel close, toast close
  slow: 0.4, // panel open, skeleton reveal
  verySlow: 0.5, // emphasis, badge appear, text reveal
  smoothOut: [0.22, 1, 0.36, 1] as [number, number, number, number],
  distanceMicro: 4,
  distanceMedium: 12,
  blurMedium: "blur(3px)",
} as const;
