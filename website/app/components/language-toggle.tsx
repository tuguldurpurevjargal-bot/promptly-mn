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
      className="flex items-center gap-1.5 rounded-full border border-[#0a1a1a]/10 bg-[#0a1a1a]/5 px-3 py-2 text-sm font-medium text-[#0a1a1a] transition-colors hover:bg-[#0a1a1a]/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      aria-label="Toggle language"
    >
      <Globe className="h-3.5 w-3.5" />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
