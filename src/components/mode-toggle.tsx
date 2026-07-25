"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/components/page-transition";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const { transitionTheme } = usePageTransition();

  const handleToggleTheme = async () => {
    const currentTheme = resolvedTheme ?? theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    const direction = currentTheme === "dark" ? "in" : "out";

    await transitionTheme(direction, () => setTheme(nextTheme));
  };

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={handleToggleTheme}
    >
      <SunIcon className="h-full w-full" />
      <MoonIcon className="hidden h-full w-full" />
    </Button>
  );
}
