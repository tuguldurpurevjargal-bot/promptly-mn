"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";
import { LanguageToggle } from "@/app/components/language-toggle";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { DataStream } from "@/app/components/data-stream";
import { VersionSwitcher } from "@/app/components/version-switcher";

const platforms = [
  "Facebook",
  "YouTube Shorts",
  "Instagram",
  "Threads",
  "LinkedIn",
  "YouTube Longform",
];

const audiences = [
  { key: "individuals" as const },
  { key: "teams" as const },
  { key: "businesses" as const },
];

const courses = [
  { key: "beginner" as const, cmd: "enroll --level=beginner" },
  { key: "intermediate" as const, cmd: "enroll --level=intermediate" },
  { key: "advanced" as const, cmd: "enroll --level=advanced" },
];

export default function HomeV2() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#why", label: t.nav.why },
    { href: "#path", label: t.nav.path },
    { href: "#platform", label: t.nav.platform },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-black text-white">
      {/* Neon Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#303236] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <Link href="/v3" className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Promptly"
              width={28}
              height={28}
              className="h-7 w-7"
              priority
            />
            <span className="text-base font-medium tracking-tight text-white">
              Promptly
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#797d86] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#151617] transition-transform hover:scale-105"
            >
              {t.nav.cta}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#303236] bg-[#151617] text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-b border-[#303236] bg-black transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-4 py-3 text-sm text-[#797d86] transition-colors hover:bg-[#151617] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between rounded-md bg-[#151617] px-4 py-3">
              <span className="font-[family-name:var(--font-geistmono)] text-xs text-[#797d86]">
                theme
              </span>
              <ThemeToggle />
            </div>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-[#151617]"
            >
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 sm:px-6">
          <p className="font-[family-name:var(--font-geistmono)] text-xs uppercase tracking-widest text-[#797d86]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#34d59a]" />
            {t.hero.badge}
          </p>

          <h1 className="mt-8 max-w-4xl text-center text-[clamp(2.75rem,8vw,5rem)] font-medium leading-[1] tracking-[-3.2px] text-white">
            {t.hero.headline}{" "}
            <span className="text-[#34d59a]">{t.hero.headlineHighlight}</span>
          </h1>

          <p className="mt-8 max-w-xl text-center text-base leading-[1.5] tracking-[-0.43px] text-[#797d86] md:text-lg">
            {t.hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#151617] transition-transform hover:scale-105"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="#path"
              className="rounded-full border border-[#303236] px-7 py-3 text-sm font-medium text-white transition-colors hover:border-white/40"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 opacity-80">
            <DataStream />
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-center font-[family-name:var(--font-geistmono)] text-xs uppercase tracking-widest text-[#797d86]">
              {t.stats.label}
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {t.stats.items.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-[family-name:var(--font-geistmono)] text-[clamp(2rem,6vw,4rem)] font-medium leading-none text-[#34d59a]">
                    {stat.value}
                  </div>
                  <div className="mt-3 font-[family-name:var(--font-geistmono)] text-xs uppercase tracking-wider text-[#797d86]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="why" className="px-4 py-24 sm:px-6 md:py-32">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="font-[family-name:var(--font-geistmono)] text-xs uppercase tracking-widest text-[#797d86]">
                {t.mission.label}
              </p>
              <h2 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.13] tracking-[-1.2px] text-white">
                {t.mission.title}
              </h2>
              <p className="mt-6 max-w-[520px] text-base leading-[1.5] tracking-[-0.43px] text-[#797d86]">
                {t.mission.description}
              </p>
            </div>

            <ul className="flex flex-col justify-center gap-6">
              {audiences.map((audience) => {
                const data = t.audiences[audience.key];
                return (
                  <li key={audience.key} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#34d59a]" />
                    <div>
                      <h3 className="text-lg font-medium leading-[1.38] tracking-[-0.36px] text-white">
                        {data.title}
                      </h3>
                      <p className="mt-1 text-sm leading-[1.5] tracking-[-0.7px] text-[#797d86]">
                        {data.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Courses — terminal cards */}
        <section id="path" className="px-4 py-24 sm:px-6 md:py-32">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-center font-[family-name:var(--font-geistmono)] text-xs uppercase tracking-widest text-[#797d86]">
              {t.path.label}
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.13] tracking-[-1.2px] text-white">
              {t.path.title}
            </h2>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {courses.map((course) => {
                const data = t.path[course.key];
                const isAdvanced = course.key === "advanced";
                return (
                  <article
                    key={course.key}
                    className="flex flex-col rounded-md bg-[#151617] p-6"
                  >
                    <div className="flex items-center gap-2 border-b border-[#303236] pb-4">
                      <Terminal className="h-3.5 w-3.5 text-[#34d59a]" />
                      <span className="font-[family-name:var(--font-geistmono)] text-xs text-[#797d86]">
                        promptly {course.cmd}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <h3 className="font-[family-name:var(--font-geistmono)] text-base font-medium text-white">
                        {data.level}
                      </h3>
                      {isAdvanced && (
                        <span className="font-[family-name:var(--font-geistmono)] text-xs text-[#ff3621]">
                          [soon]
                        </span>
                      )}
                    </div>

                    <p className="mt-3 font-[family-name:var(--font-geistmono)] text-sm leading-[1.65] tracking-[-0.7px] text-[#797d86]">
                      {data.description}
                    </p>

                    <ul className="mt-4 flex-1 space-y-2">
                      {data.topics.map((topic) => (
                        <li
                          key={topic}
                          className="font-[family-name:var(--font-geistmono)] text-xs leading-[1.65] tracking-[-0.7px] text-[#34d59a]"
                        >
                          <span className="text-[#797d86]">{"> "}</span>
                          {topic}
                        </li>
                      ))}
                    </ul>

                    <button
                      disabled={isAdvanced}
                      className={`mt-6 w-full rounded-full py-2.5 text-sm font-medium transition-transform ${
                        !isAdvanced
                          ? "bg-white text-[#151617] hover:scale-[1.02]"
                          : "cursor-not-allowed border border-[#303236] text-[#797d86]"
                      }`}
                    >
                      {!isAdvanced ? data.cta : data.soon}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms — logo bar */}
        <section id="platform" className="px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-[1200px] text-center">
            <p className="font-[family-name:var(--font-geistmono)] text-xs uppercase tracking-widest text-[#797d86]">
              {t.platform.label}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.13] tracking-[-1.2px] text-white">
              {t.platform.title}
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {platforms.map((name) => (
                <span
                  key={name}
                  className="text-sm font-medium text-[#797d86] transition-colors hover:text-white"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="contact" className="px-4 py-24 sm:px-6 md:py-32">
          <div className="mx-auto max-w-[720px] rounded-md bg-[#151617] p-8 text-center sm:p-14">
            <p className="font-[family-name:var(--font-geistmono)] text-xs uppercase tracking-widest text-[#797d86]">
              {t.newsletter.label}
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.13] tracking-[-1.2px] text-white">
              {t.newsletter.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-[1.5] tracking-[-0.7px] text-[#797d86]">
              {t.newsletter.description}
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 rounded-md border border-[#303236] bg-black px-5 py-3 font-[family-name:var(--font-geistmono)] text-sm text-white outline-none transition-colors placeholder:text-[#797d86] focus:border-[#34d59a]/60"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#151617] transition-transform hover:scale-105"
              >
                {t.newsletter.cta}
              </button>
            </form>
            <p className="mt-5 font-[family-name:var(--font-geistmono)] text-xs text-[#797d86]">
              {t.newsletter.disclaimer}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#303236] px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Promptly"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-sm font-medium text-white">Promptly</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {platforms.map((name) => (
              <Link
                key={name}
                href="#"
                className="text-xs text-[#797d86] transition-colors hover:text-white"
              >
                {name}
              </Link>
            ))}
          </div>

          <p className="font-[family-name:var(--font-geistmono)] text-xs text-[#797d86]">
            {t.footer.rights}
          </p>
        </div>
      </footer>

      <VersionSwitcher to="/" label="v1" variant="neon" />
    </div>
  );
}
