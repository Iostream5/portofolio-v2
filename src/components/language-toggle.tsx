"use client";

import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/components/page-transition";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const { navigate } = usePageTransition();

  const nextLocale = locale === "id" ? "en" : "id";

  const handleToggle = async () => {
    await navigate(`/${nextLocale}${pathname}`);
  };

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={handleToggle}
      aria-label={t("language")}
      title={t("language")}
    >
      <span className="h-full w-full flex items-center justify-center text-sm font-semibold uppercase">
        {nextLocale}
      </span>
    </Button>
  );
}
