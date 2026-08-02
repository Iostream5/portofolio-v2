"use client";

import { forwardRef, type ReactNode } from "react";
import { useLocale } from "next-intl";
import { usePageTransition } from "./provider";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  function TransitionLink(
    { href, children, className, target, rel, onClick, ...props },
    ref
  ) {
  const { navigate } = usePageTransition();
  const locale = useLocale();

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel");

  const localizedHref =
    isExternal || href.startsWith("#")
      ? href
      : href === "/"
        ? `/${locale}`
        : `/${locale}${href}`;

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (isExternal || href.startsWith("#")) return;
    if (target === "_blank" || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    await navigate(localizedHref);
  };

  return (
    <a
      ref={ref}
      href={localizedHref}
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
);
