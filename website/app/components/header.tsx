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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#012624]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Promptly"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-lg font-medium tracking-tight text-white">
            Promptly
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-ghost-link">
              {t.nav[link.labelKey]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Link href="#contact" className="aurora-btn px-5 py-2.5">
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-white/5 bg-[#011d1c] transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-[#bbc7c6] transition-colors hover:bg-white/5 hover:text-white"
            >
              {t.nav[link.labelKey]}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between rounded-md bg-white/5 px-4 py-3">
            <span className="text-xs uppercase tracking-[0.12em] text-[#bbc7c6]">
              Theme
            </span>
            <ThemeToggle />
          </div>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="aurora-btn mt-2 px-4 py-3 text-center"
          >
            {t.nav.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
