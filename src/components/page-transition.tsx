"use client";

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

type TransitionState = "idle" | "exiting" | "navigating" | "entering";

interface TransitionContextType {
  navigate: (href: string) => Promise<void>;
}

const TransitionContext = createContext<TransitionContextType>({
  navigate: async () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const exitRef = useRef<HTMLDivElement>(null);
  const exitBgRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<TransitionState>("idle");

  // Init: hide squares off-screen
  useEffect(() => {
    gsap.set(exitRef.current, { x: "-110%", y: "-110%", autoAlpha: 0 });
    gsap.set(exitBgRef.current, { x: "-110%", y: "-110%", autoAlpha: 0 });
  }, []);

  // Route change → play enter animation after new page mounts
  useEffect(() => {
    if (stateRef.current !== "navigating") return;

    stateRef.current = "entering";

    playEnterAnimation()
      .then(() => {
        stateRef.current = "idle";
      })
      .catch(() => {
        gsap.set(exitRef.current, { autoAlpha: 0 });
        gsap.set(exitBgRef.current, { autoAlpha: 0 });
        stateRef.current = "idle";
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const playExitAnimation = useCallback(async (): Promise<void> => {
    const el = exitRef.current;
    const bg = exitBgRef.current;
    if (!el || !bg) return;

    const tl = gsap.timeline();
    tl.fromTo(
      el,
      { x: "110%", y: "110%", autoAlpha: 1 },
      { x: "0%", y: "0%", duration: 0.4, ease: "power4.in" }
    ).fromTo(
      bg,
      { x: "110%", y: "110%", autoAlpha: 1 },
      { x: "0%", y: "0%", duration: 0.3, ease: "power4.in" },
      0
    );

    return new Promise((r) => tl.eventCallback("onComplete", r));
  }, []);

  const playEnterAnimation = useCallback(async (): Promise<void> => {
    const el = exitRef.current;
    const bg = exitBgRef.current;
    if (!el || !bg) return;

    const tl = gsap.timeline();
    tl.to(el, {
      x: "-110%",
      y: "-110%",
      duration: 0.4,
      ease: "power4.out",
    }).to(
      bg,
      { x: "-110%", y: "-110%", duration: 0.3, ease: "power4.out" },
      0
    );

    return new Promise((r) => {
      tl.eventCallback("onComplete", () => {
        gsap.set(el, { autoAlpha: 0 });
        gsap.set(bg, { autoAlpha: 0 });
        r();
      });
    });
  }, []);

  const navigate = useCallback(
    async (href: string) => {
      if (stateRef.current !== "idle") return;
      if (href.startsWith("#")) return;

      const targetPath = href.split("?")[0].split("#")[0];
      if (targetPath === window.location.pathname) return;

      if (
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel")
      ) {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }

      stateRef.current = "exiting";

      try {
        await playExitAnimation();

        stateRef.current = "navigating";
        router.push(href);
      } catch {
        gsap.set(exitRef.current, { autoAlpha: 0 });
        gsap.set(exitBgRef.current, { autoAlpha: 0 });
        stateRef.current = "idle";
      }
    },
    [router]
  );

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          ref={exitBgRef}
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
          ref={exitRef}
          className="absolute bg-black"
          style={{
            width: "300vw",
            height: "500vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(45deg)",
          }}
        />
      </div>
    </TransitionContext.Provider>
  );
}

export function TransitionLink({
  href,
  children,
  className,
  target,
  rel,
  ...props
}: {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">) {
  const { navigate } = usePageTransition();

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel");

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isExternal || href.startsWith("#")) return;
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    await navigate(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={isExternal ? "_blank" : target}
      rel={isExternal ? "noopener noreferrer" : rel}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
