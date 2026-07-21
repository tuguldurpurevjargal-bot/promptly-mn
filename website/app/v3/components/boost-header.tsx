"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Сургалтууд", href: "#courses" },
  { label: "Яагаад Promptly", href: "#why-promptly" },
  { label: "Тест", href: "/test" },
  { label: "FAQ", href: "#faq" },
];

export function BoostHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#002025]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5">
        <Link href="/v3" className="flex items-center gap-2.5" aria-label="Promptly v3">
          <Image src="/logo.svg" alt="Promptly лого" width={30} height={30} className="h-8 w-8" priority />
          <span className="text-lg font-medium tracking-[-0.01em] text-[#fffffa]">Promptly</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Үндсэн цэс">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-normal text-[#fffffa] transition-opacity hover:opacity-70"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/courses"
            className="inline-flex items-center rounded-full border border-[#fffffa] px-5 py-2.5 text-sm font-medium text-[#fffffa] transition-opacity hover:opacity-75"
          >
            Бүртгүүлэх
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#244348] text-[#fffffa] lg:hidden"
          aria-label={open ? "Цэс хаах" : "Цэс нээх"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-b border-[#244348] bg-[#002025] transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Гар утасны цэс">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base text-[#fffffa] transition-colors hover:bg-[#05333a]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/courses"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-[#fffffa] px-4 py-3 text-center text-sm font-medium text-[#fffffa]"
          >
            Бүртгүүлэх
          </Link>
        </nav>
      </div>
    </header>
  );
}
