"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useSplash } from "@/components/splash-context";
import gsap from "gsap";

export default function SplashScreen() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const splashRef = useRef<HTMLDivElement>(null);
  const splashRef2 = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [hidden, setHidden] = useState(false);
  const { onSplashDone } = useSplash();

  useEffect(() => {
    if (isHome) {
      // ####### V E R S I   2  (open from center) with text #######
      const splash = splashRef.current;
      const bg = bgRef.current;
      const splash2 = splashRef2.current;
      const bg2 = bgRef2.current;
      const text = textRef.current;
      if (!splash || !text || !bg || !splash2 || !bg2) return;

      const tl = gsap.timeline({
        onComplete: () => setHidden(true),
      });

      tl.fromTo(
        text,
        { filter: "blur(20px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, duration: 1, ease: "power3.out" }
      )
        .to(text, { duration: 0.6 })
        .to(text, {
          filter: "blur(20px)",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        })
        .to(
          splash,
          { x: "-100%", duration: 1.5, ease: "power3.inOut" },
          "-=0.3"
        )
        .to(
          splash2,
          { x: "100%", duration: 1.5, ease: "power3.inOut" },
          "-=1.5"
        )
        .to(
          bg,
          { x: "-100%", duration: 1.2, ease: "power3.inOut" },
          "-=1.3"
        )
        .to(
          bg2,
          { x: "100%", duration: 1.2, ease: "power3.inOut" },
          "-=1.3"
        )
        .call(() => onSplashDone(), [], "-=1")

      return () => {
        tl.kill();
      };
    }

    // ####### V E R S I   1  (slide diagonal) without text #######
    const splash = splashRef.current;
    const bg = bgRef.current;
    if (!splash || !bg) return;

    const tl = gsap.timeline({
      onComplete: () => setHidden(true),
    });

    tl.to({}, { duration: 0.5 })
      .to(splash, {
        x: "-110%",
        y: "-110%",
        duration: 2,
        ease: "power4.inOut",
      })
      .to(
        bg,
        {
          x: "-110%",
          y: "-110%",
          duration: 1.5,
          ease: "power4.inOut",
        },
        "-=1.6"
      )
      .call(() => onSplashDone(), [], "-=1")

    return () => {
      tl.kill();
    };
  }, [isHome]);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {isHome ? (
        <>
          <div
            ref={bgRef}
            className="absolute bg-zinc-800 dark:bg-white"
            style={{
              width: "300vw",
              height: "500vh",
              right: "51%",
            }}
          />
          <div
            ref={bgRef2}
            className="absolute bg-zinc-800 dark:bg-white"
            style={{
              width: "300vw",
              height: "500vh",
              left: "51%",
            }}
          />
          <div
            ref={splashRef}
            className="absolute bg-black"
            style={{
              width: "300vw",
              height: "500vh",
              right: "50%",
            }}
          />
          <div
            ref={splashRef2}
            className="absolute bg-black"
            style={{
              width: "300vw",
              height: "500vh",
              left: "50%",
            }}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <h1
              ref={textRef}
              className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center px-4"
              style={{
                filter: "blur(20px)",
                opacity: 0,
              }}
            >
              Welcome to my portfolio
            </h1>
          </div>
        </>
      ) : (
        <>
          <div
            ref={bgRef}
            className="absolute bg-zinc-800 dark:bg-white"
            style={{
              width: "300vw",
              height: "500vh",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />
          <div
            ref={splashRef}
            className="absolute bg-black"
            style={{
              width: "300vw",
              height: "500vh",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />
        </>
      )}
    </div>
  );
}
