import { resumeEn } from "./resume-en";
import { resumeId } from "./resume-id";
import type { Resume } from "./types";

export type { Locale } from "@/i18n/routing";
export type { Resume } from "./types";

export const DATA = {
  id: resumeId,
  en: resumeEn,
} as const;

export function getData(locale: string): Resume {
  return locale === "en" ? resumeEn : resumeId;
}
