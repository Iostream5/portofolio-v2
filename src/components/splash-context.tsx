"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface SplashContextType {
  isSplashDone: boolean;
  onSplashDone: () => void;
}

const SplashContext = createContext<SplashContextType>({
  isSplashDone: false,
  onSplashDone: () => {},
});

export function SplashProvider({ children }: { children: ReactNode }) {
  const [isSplashDone, setIsSplashDone] = useState(false);

  return (
    <SplashContext.Provider
      value={{
        isSplashDone,
        onSplashDone: () => setIsSplashDone(true),
      }}
    >
      {children}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  return useContext(SplashContext);
}
