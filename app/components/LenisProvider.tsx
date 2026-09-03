"use client";

import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";

// Windows' "Roll the mouse wheel to scroll: One screen at a time" setting makes
// physical mouse wheels report deltaMode 2 (DOM_DELTA_PAGE), which Lenis expands
// to a full viewport height per notch — a single click then reads as an instant
// jump instead of a smooth glide. Trackpads never use this mode. Clamp the delta
// so no single wheel input can produce an oversized, non-smooth-looking jump.
const MAX_WHEEL_DELTA = 150;

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        anchors: true,
        virtualScroll: (data) => {
          if (data.event.type === "wheel") {
            data.deltaX = Math.max(-MAX_WHEEL_DELTA, Math.min(MAX_WHEEL_DELTA, data.deltaX));
            data.deltaY = Math.max(-MAX_WHEEL_DELTA, Math.min(MAX_WHEEL_DELTA, data.deltaY));
          }
          return true;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export function useLenisControl() {
  const lenis = useLenis();
  return {
    stop: () => lenis?.stop(),
    start: () => lenis?.start(),
  };
}
