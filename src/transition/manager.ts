"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createStateMachine } from "./state-machine";
import { initOverlay, resetOverlay, playExit, playEnter, playSplashHome, playSplashOther, playThemeToggle } from "./animations";
import type { AnimationRefs, ThemeTransitionDirection } from "./types";

export function useTransitionManager(refs: AnimationRefs) {
  const router = useRouter();
  const pathname = usePathname();
  const [machine] = useState(() => createStateMachine("idle"));
  const [isSplashDone, setIsSplashDone] = useState(false);
  const splashStartedRef = useRef(false);
  const pendingPathRef = useRef<string | null>(null);

  useEffect(() => {
    initOverlay(refs);
  }, [refs]);

  const onSplashDone = useCallback(() => {
    setIsSplashDone(true);
  }, []);

  useEffect(() => {
    if (splashStartedRef.current) return;
    splashStartedRef.current = true;

    machine.transition("splash");
    const isHome = pathname === "/";
    const play = isHome ? playSplashHome(refs, onSplashDone) : playSplashOther(refs, onSplashDone);

    play.then(() => {
      resetOverlay(refs);
      machine.transition("idle");
    });
  }, [machine, onSplashDone, pathname, refs]);

  useEffect(() => {
    if (!machine.is("navigating")) return;
    if (pendingPathRef.current && pendingPathRef.current !== pathname) return;

    machine.transition("entering");

    playEnter(refs).then(() => {
      resetOverlay(refs);
      pendingPathRef.current = null;
      machine.transition("idle");
    });
  }, [machine, pathname, refs]);

  const navigate = useCallback(
    async (href: string) => {
      if (!machine.is("idle")) {
        return;
      }
      if (href.startsWith("#")) return;

      const targetPath = href.split("?")[0].split("#")[0];
      const currentPath = `${window.location.pathname}${window.location.search}`;
      if (href === currentPath) return;
      if (targetPath === window.location.pathname) {
        router.push(href);
        return;
      }

      if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }

      machine.transition("exiting");
      pendingPathRef.current = targetPath;

      try {
        await playExit(refs);
        machine.transition("navigating");
        router.push(href);
      } catch {
        resetOverlay(refs);
        pendingPathRef.current = null;
        machine.transition("idle");
      }
    },
    [machine, refs, router]
  );

  const transitionTheme = useCallback(
    async (direction: ThemeTransitionDirection, applyTheme: () => void) => {
      if (!machine.is("idle")) return;

      machine.transition("theming");

      try {
        await playThemeToggle(refs, direction, applyTheme);
        resetOverlay(refs);
      } catch {
        resetOverlay(refs);
      } finally {
        machine.transition("idle");
      }
    },
    [machine, refs]
  );

  return { navigate, transitionTheme, isSplashDone };
}
