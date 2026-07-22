"use client";

import { useLanguage } from "@/app/i18n/context";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "mn" ? "en" : "mn")}
      className="flex items-center gap-1.5 rounded-full border border-[#244348] px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-[#fffffa] transition-opacity hover:opacity-75"
      aria-label="Switch language"
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{locale === "mn" ? "EN" : "MN"}</span>
    </button>
  );
}
