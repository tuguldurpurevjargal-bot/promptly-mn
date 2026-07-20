"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/context";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#071414]/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="Promptly"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="font-[family-name:var(--font-arimo)] text-xl font-semibold tracking-tight text-[#0a1a1a] dark:text-white">Promptly</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link href="#why" className="text-sm text-[#5C6B6B] hover:text-[#0a1a1a] dark:text-white/70 dark:hover:text-white">
            {t.nav.why}
          </Link>
          <Link href="#path" className="text-sm text-[#5C6B6B] hover:text-[#0a1a1a] dark:text-white/70 dark:hover:text-white">
            {t.nav.path}
          </Link>
          <Link href="#platform" className="text-sm text-[#5C6B6B] hover:text-[#0a1a1a] dark:text-white/70 dark:hover:text-white">
            {t.nav.platform}
          </Link>
          <Link href="#contact" className="text-sm text-[#5C6B6B] hover:text-[#0a1a1a] dark:text-white/70 dark:hover:text-white">
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="#contact"
            className="rounded-full bg-[#0a1a1a] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-[#071414]"
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
