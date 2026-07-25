import gsap from "gsap";
import type { AnimationRefs } from "./types";

export function initOverlay(refs: AnimationRefs): void {
  gsap.set(refs.diagonal.current, { x: "-110%", y: "-110%", autoAlpha: 0 });
  gsap.set(refs.diagonalBg.current, { x: "-110%", y: "-110%", autoAlpha: 0 });
  gsap.set(refs.splashLeft.current, { x: "0%", autoAlpha: 0 });
  gsap.set(refs.splashRight.current, { x: "0%", autoAlpha: 0 });
  gsap.set(refs.bgLeft.current, { x: "0%", autoAlpha: 0 });
  gsap.set(refs.bgRight.current, { x: "0%", autoAlpha: 0 });
  gsap.set(refs.text.current, { filter: "blur(20px)", autoAlpha: 0 });
}

export function resetOverlay(refs: AnimationRefs): void {
  gsap.set(refs.diagonal.current, { x: "-110%", y: "-110%", autoAlpha: 0 });
  gsap.set(refs.diagonalBg.current, { x: "-110%", y: "-110%", autoAlpha: 0 });
  gsap.set(refs.splashLeft.current, { x: "0%", autoAlpha: 0 });
  gsap.set(refs.splashRight.current, { x: "0%", autoAlpha: 0 });
  gsap.set(refs.bgLeft.current, { x: "0%", autoAlpha: 0 });
  gsap.set(refs.bgRight.current, { x: "0%", autoAlpha: 0 });
  gsap.set(refs.text.current, { filter: "blur(20px)", autoAlpha: 0 });
}

export function playSplashHome(refs: AnimationRefs, onSplashDone: () => void): Promise<void> {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });
    tl
      .set(refs.diagonal.current, { autoAlpha: 0 })
      .set(refs.diagonalBg.current, { autoAlpha: 0 })
      .fromTo(
        refs.text.current,
        { filter: "blur(20px)", opacity: 0, autoAlpha: 1 },
        { filter: "blur(0px)", opacity: 1, duration: 1, ease: "power3.out" }
      )
      .to(refs.text.current, { duration: 0.6 })
      .to(refs.text.current, {
        filter: "blur(20px)",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      })
      .fromTo(
        refs.splashLeft.current,
        { x: "0%", autoAlpha: 1 },
        { x: "-100%", duration: 1.5, ease: "power3.inOut" },
        "-=0.3"
      )
      .fromTo(
        refs.splashRight.current,
        { x: "0%", autoAlpha: 1 },
        { x: "100%", duration: 1.5, ease: "power3.inOut" },
        "-=1.5"
      )
      .fromTo(
        refs.bgLeft.current,
        { x: "0%", autoAlpha: 1 },
        { x: "-100%", duration: 1.2, ease: "power3.inOut" },
        "-=1.3"
      )
      .fromTo(
        refs.bgRight.current,
        { x: "0%", autoAlpha: 1 },
        { x: "100%", duration: 1.2, ease: "power3.inOut" },
        "-=1.3"
      )
      .call(onSplashDone, [], "-=1");
  });
}

export function playSplashOther(refs: AnimationRefs, onSplashDone: () => void): Promise<void> {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });
    tl
      .set(refs.splashLeft.current, { autoAlpha: 0 })
      .set(refs.splashRight.current, { autoAlpha: 0 })
      .set(refs.bgLeft.current, { autoAlpha: 0 })
      .set(refs.bgRight.current, { autoAlpha: 0 })
      .set(refs.text.current, { autoAlpha: 0 })
      .to({}, { duration: 0.5 })
      .fromTo(
        refs.diagonal.current,
        { x: "0%", y: "0%", autoAlpha: 1 },
        { x: "-110%", y: "-110%", duration: 2, ease: "power4.inOut" }
      )
      .fromTo(
        refs.diagonalBg.current,
        { x: "0%", y: "0%", autoAlpha: 1 },
        { x: "-110%", y: "-110%", duration: 1.5, ease: "power4.inOut" },
        "-=1.6"
      )
      .call(onSplashDone, [], "-=1");
  });
}

export function playExit(refs: AnimationRefs): Promise<void> {
  return new Promise((resolve) => {
    const el = refs.diagonal.current;
    const bg = refs.diagonalBg.current;

    if (!el || !bg) {
      resolve();
      return;
    }

    gsap.killTweensOf([el, bg]);
    gsap.set(el, { x: "-110%", y: "-110%", autoAlpha: 1 });
    gsap.set(bg, { x: "-110%", y: "-110%", autoAlpha: 1 });

    const tl = gsap.timeline({ onComplete: resolve });
    tl
      .to(el, { x: "0%", y: "0%", duration: 2.5, ease: "power4.inOut" })
      .to(bg, { x: "0%", y: "0%", duration: 2.2, ease: "power4.inOut" }, 0);
  });
}

export function playEnter(refs: AnimationRefs): Promise<void> {
  return new Promise((resolve) => {
    const el = refs.diagonal.current;
    const bg = refs.diagonalBg.current;

    if (!el || !bg) {
      resolve();
      return;
    }

    gsap.killTweensOf([el, bg]);
    gsap.set(el, { x: "0%", y: "0%", autoAlpha: 1 });
    gsap.set(bg, { x: "0%", y: "0%", autoAlpha: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(el, { autoAlpha: 0 });
        gsap.set(bg, { autoAlpha: 0 });
        resolve();
      },
    });
    tl
      .to(el, { x: "-110%", y: "-110%", duration: 2.5, ease: "power4.inOut" })
      .to(bg, { x: "-110%", y: "-110%", duration: 2.2, ease: "power4.inOut" }, 0);
  });
}
