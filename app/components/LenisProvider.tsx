"use client";

import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";

// A physical mouse wheel fires one large, discrete delta per notch (often
// 100+ px), while a touchpad fires a dense stream of small deltas. Lenis's
// lerp damping moves a fixed *percentage* of the remaining distance per
// frame, so a big per-notch delta still produces a large, visible first-frame
// jump even though the math is "smooth" — that jump is what reads as
// un-smoothed scrolling. Clamping every wheel delta to a small max forces
// each notch to glide in over several frames instead of snapping ahead, for
// both mouse and touchpad alike.
const MAX_WHEEL_DELTA = 60;

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        smoothWheel: true,
        // Lenis silently forces wheel scroll to "immediate" (no smoothing at
        // all) whenever the OS reports prefers-reduced-motion: reduce — a
        // setting many Windows users have on without realizing it (Settings >
        // Accessibility > Visual effects > Animation effects). That fully
        // explains "smooth on touchpad, instant on mouse wheel" with zero
        // config change needed elsewhere: touchpads still *look* smooth when
        // un-smoothed because the hardware sends a continuous stream of tiny
        // deltas, while a mouse notch un-smoothed is one big instant jump.
        // Smooth scroll is core interaction behavior for this site, not a
        // decorative animation, so we opt out of that gate.
        respectReducedMotion: false,
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
