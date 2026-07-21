"use client";

import { useLanguage } from "@/app/i18n/context";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === "mn" ? "en" : "mn");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
      aria-label="Toggle language"
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{locale}</span>
    </button>
  );
}
