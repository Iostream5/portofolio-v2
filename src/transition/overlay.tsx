"use client";

import type { AnimationRefs } from "./types";

export function TransitionOverlay({ splashLeft, splashRight, bgLeft, bgRight, diagonal, diagonalBg, text }: AnimationRefs) {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        ref={diagonalBg}
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
        ref={diagonal}
        className="absolute bg-black"
        style={{
          width: "300vw",
          height: "500vh",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
      />
      <div
        ref={bgLeft}
        className="absolute bg-zinc-800 dark:bg-white"
        style={{ width: "300vw", height: "500vh", right: "51%" }}
      />
      <div
        ref={bgRight}
        className="absolute bg-zinc-800 dark:bg-white"
        style={{ width: "300vw", height: "500vh", left: "51%" }}
      />
      <div
        ref={splashLeft}
        className="absolute bg-black"
        style={{ width: "300vw", height: "500vh", right: "50%" }}
      />
      <div
        ref={splashRight}
        className="absolute bg-black"
        style={{ width: "300vw", height: "500vh", left: "50%" }}
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <h1
          ref={text}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center px-4"
          style={{ filter: "blur(20px)", opacity: 0 }}
        >
          Welcome to my portfolio
        </h1>
      </div>
    </div>
  );
}
