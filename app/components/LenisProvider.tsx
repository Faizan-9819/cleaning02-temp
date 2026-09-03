"use client";

import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        anchors: true,
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
