"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/app/data/content";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "border-[#e5ebe8]" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          isScrolled ? "h-14" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Promptly нүүр хуудас">
          <Image
            src="/logo.svg"
            alt="Promptly лого"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-[#101614]">
            Promptly
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Үндсэн цэс">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.target}
              className="text-sm font-medium text-[#4a5a55] transition-colors hover:text-[#101614]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/courses" className="btn-primary">
            Сургалтад бүртгүүлэх
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e5ebe8] bg-white text-[#101614] lg:hidden"
          aria-label={isMenuOpen ? "Цэс хаах" : "Цэс нээх"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-b border-[#e5ebe8] bg-white transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Гар утасны цэс">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.target}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#101614] transition-colors hover:bg-[#f5f7f6]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/courses"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary mt-3"
          >
            Сургалтад бүртгүүлэх
          </Link>
        </nav>
      </div>
    </header>
  );
}
