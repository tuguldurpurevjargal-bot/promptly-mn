"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

const navLinks: { href: string; labelKey: "why" | "path" | "platform" | "contact" }[] = [
  { href: "#why", labelKey: "why" },
  { href: "#path", labelKey: "path" },
  { href: "#platform", labelKey: "platform" },
  { href: "#contact", labelKey: "contact" },
];

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#00E5D4]/15 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#071414]/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Promptly"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="font-[family-name:var(--font-arimo)] text-lg font-semibold tracking-tight text-[#0a1a1a] dark:text-white">
            Promptly
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#5C6B6B] transition-colors hover:text-[#0a1a1a] dark:text-white/70 dark:hover:text-white"
            >
              {t.nav[link.labelKey]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="#contact"
            className="rounded-full bg-[#0a1a1a] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-[#071414]"
          >
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0a1a1a]/10 bg-[#0a1a1a]/5 text-[#0a1a1a] dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-[#00E5D4]/15 bg-white transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-[#071414] md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#0a1a1a] transition-colors hover:bg-[#00E5D4]/10 dark:text-white dark:hover:bg-white/10"
            >
              {t.nav[link.labelKey]}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between rounded-lg bg-[#00E5D4]/5 px-4 py-3 dark:bg-white/5"
          >
            <span className="text-sm text-[#5C6B6B] dark:text-white/70">
              Theme
            </span>
            <ThemeToggle />
          </div>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-[#0a1a1a] px-4 py-3 text-center text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-[#071414]"
          >
            {t.nav.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
