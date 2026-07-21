"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav } from "@/app/data/content";

export function V2Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
      <div
        className="journal-pill anim-pill-in flex items-center justify-between gap-4 rounded-full border border-[#dee2de] bg-white/70 py-2 pl-5 pr-2 backdrop-blur-xl"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 6px 0px" }}
      >
        <Link href="/v2" className="flex items-center gap-2" aria-label="Promptly v2">
          <Image
            src="/logo.svg"
            alt="Promptly лого"
            width={24}
            height={24}
            className="h-6 w-6"
            priority
          />
          <span className="text-[15px] font-medium tracking-[-0.01em] text-[#2c2c2c]">
            Promptly
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Үндсэн цэс">
          {nav.slice(0, 5).map((item) => (
            <Link
              key={item.label}
              href={item.target === "/" ? "/v2" : `/v2${item.target}`}
              className="text-[15px] font-medium tracking-[-0.01em] text-[#444141] transition-colors hover:text-[#171717]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/v2/courses"
            className="hidden items-center gap-1.5 rounded-lg border border-[#41a1cf] px-3 py-1.5 text-[15px] font-medium text-[#41a1cf] transition-colors hover:bg-[#41a1cf]/5 md:inline-flex"
          >
            Бүртгүүлэх
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#41a1cf]">
              <ArrowRight className="h-2.5 w-2.5" />
            </span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dee2de] bg-white text-[#2c2c2c] md:hidden"
            aria-label={isMenuOpen ? "Цэс хаах" : "Цэс нээх"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={`mt-2 overflow-hidden rounded-2xl border border-[#dee2de] bg-white/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-3" aria-label="Гар утасны цэс">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.target === "/" ? "/v2" : `/v2${item.target}`}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-[#444141] transition-colors hover:bg-[#f9faf7]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/v2/courses"
            onClick={() => setIsMenuOpen(false)}
            className="mt-1 rounded-lg border border-[#41a1cf] px-4 py-2.5 text-center text-[15px] font-medium text-[#41a1cf]"
          >
            Сургалтад бүртгүүлэх
          </Link>
        </nav>
      </div>
    </header>
  );
}
