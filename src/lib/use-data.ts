"use client";

import { useLocale } from "next-intl";
import { useMemo } from "react";
import { getData } from "@/data/resume";
import type { Locale } from "@/data/resume";

export function useData() {
  const locale = useLocale() as Locale;
  return useMemo(() => getData(locale), [locale]);
}
