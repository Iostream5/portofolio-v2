"use client";

import { createContext, useContext, useMemo, useRef, type ReactNode } from "react";
import { TransitionOverlay } from "./overlay";
import { useTransitionManager } from "./manager";
import type { AnimationRefs } from "./types";

interface TransitionContextType {
  navigate: (href: string) => Promise<void>;
}

const TransitionContext = createContext<TransitionContextType>({
  navigate: async () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

interface SplashContextType {
  isSplashDone: boolean;
  onSplashDone: () => void;
}

const SplashContext = createContext<SplashContextType>({
  isSplashDone: false,
  onSplashDone: () => {},
});

export function useSplash() {
  return useContext(SplashContext);
}

export { TransitionLink } from "./link";

export function TransitionProvider({ children }: { children: ReactNode }) {
  const splashLeft = useRef<HTMLDivElement>(null);
  const splashRight = useRef<HTMLDivElement>(null);
  const bgLeft = useRef<HTMLDivElement>(null);
  const bgRight = useRef<HTMLDivElement>(null);
  const diagonal = useRef<HTMLDivElement>(null);
  const diagonalBg = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLHeadingElement>(null);

  const refs: AnimationRefs = useMemo(
    () => ({
      splashLeft,
      splashRight,
      bgLeft,
      bgRight,
      diagonal,
      diagonalBg,
      text,
    }),
    []
  );

  const { navigate, isSplashDone } = useTransitionManager(refs);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <SplashContext.Provider value={{ isSplashDone, onSplashDone: () => {} }}>
        {children}
        <TransitionOverlay {...refs} />
      </SplashContext.Provider>
    </TransitionContext.Provider>
  );
}
