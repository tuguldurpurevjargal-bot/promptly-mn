"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/context";
import { Header } from "@/app/components/header";

const platforms = [
  { name: "Facebook", priorityKey: "primary" as const },
  { name: "YouTube Shorts", priorityKey: "primary" as const },
  { name: "Instagram", priorityKey: "secondary" as const },
  { name: "Threads", priorityKey: "secondary" as const },
  { name: "LinkedIn", priorityKey: "secondary" as const },
  { name: "YouTube Longform", priorityKey: "secondary" as const },
];

export default function Home() {
  const { t } = useLanguage();

  const audiences = [
    { key: "individuals" as const },
    { key: "teams" as const },
    { key: "businesses" as const },
  ];

  const courses = [
    { key: "beginner" as const },
    { key: "intermediate" as const },
    { key: "advanced" as const },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#F8FDFB] text-[#0a1a1a] dark:bg-[#071414] dark:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00E5D4]/20 via-transparent to-transparent dark:from-[#00F0FF]/10" />
      <div className="pointer-events-none fixed -right-40 top-0 h-[60vw] w-[60vw] rounded-full bg-[#00E5D4]/20 blur-[140px] dark:bg-[#00F0FF]/10" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 h-[60vw] w-[60vw] rounded-full bg-[#4FFFB0]/20 blur-[140px] dark:bg-[#4FFFB0]/10" />

      <Header />

      <main className="flex-1 pt-16">
        <section className="relative px-4 sm:px-6 pb-20 pt-20 sm:pb-28 sm:pt-24 md:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-[#00E5D4]/30 bg-white/60 px-4 py-1.5 text-xs font-medium text-[#0a1a1a] backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:text-white/90">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#00E5D4]"></span>
              {t.hero.badge}
            </div>

            <h1 className="font-[family-name:var(--font-arimo)] mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#0a1a1a] sm:text-5xl md:text-7xl dark:text-white">
              {t.hero.headline}{" "}
              <span className="gradient-text">{t.hero.headlineHighlight}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#3a5a56] md:text-xl dark:text-white/80">
              {t.hero.subheadline}
            </p>

            <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-[#0a1a1a] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-[#071414]"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="#path"
                className="rounded-full border border-[#0a1a1a]/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#0a1a1a] transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        <section id="why" className="px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00B8A8] dark:text-[#4FFFB0]">
                {t.mission.label}
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-2xl font-semibold tracking-tight text-[#0a1a1a] sm:text-3xl md:text-5xl dark:text-white">
                {t.mission.title}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#3a5a56] dark:text-white/80">
                {t.mission.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {audiences.map((audience) => {
                const data = t.audiences[audience.key];
                return (
                  <div
                    key={audience.key}
                    className="rounded-3xl bg-white p-3 shadow-sm shadow-[#00E5D4]/5 dark:bg-[#0f1f1f] sm:p-6 md:p-8"
                  >
                    <h3 className="font-[family-name:var(--font-arimo)] text-sm font-semibold text-[#0a1a1a] sm:text-xl dark:text-white">
                      {data.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#3a5a56] sm:mt-3 sm:text-base dark:text-white/75">{data.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="path" className="px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00B8A8] dark:text-[#00F0FF]">
                {t.path.label}
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-2xl font-semibold tracking-tight text-[#0a1a1a] sm:text-3xl md:text-5xl dark:text-white">
                {t.path.title}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {courses.map((course) => {
                const data = t.path[course.key];
                return (
                  <article
                    key={course.key}
                    className="relative flex flex-col rounded-3xl bg-white p-3 shadow-sm shadow-[#00E5D4]/5 transition-transform hover:-translate-y-1 dark:bg-[#0f1f1f] sm:p-6 md:p-8"
                  >
                    {course.key === "advanced" && (
                      <span className="absolute -top-3 right-6 rounded-full bg-[#f0f9f6] px-3 py-1 text-xs font-semibold text-[#0a1a1a] dark:bg-[#162727] dark:text-white/90">
                        {data.soon}
                      </span>
                    )}
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#00B8A8] dark:text-[#4FFFB0] sm:text-xs">
                      {data.subtitle}
                    </span>
                    <h3 className="font-[family-name:var(--font-arimo)] mt-1 text-lg font-semibold text-[#0a1a1a] sm:mt-2 sm:text-2xl dark:text-white">
                      {data.level}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#0a1a1a]/90 dark:text-white/90 sm:text-sm">{data.tagline}</p>
                    <p className="mt-2 flex-1 text-xs text-[#3a5a56] dark:text-white/70 sm:text-base">{data.description}</p>
                    <ul className="mt-4 space-y-1 sm:mt-6 sm:space-y-2">
                      {data.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center gap-2 text-xs text-[#6b8b86] dark:text-white/60 sm:text-sm"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00E5D4]" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <button
                      disabled={course.key === "advanced"}
                      className={`mt-6 w-full rounded-full py-2.5 text-xs font-semibold transition-colors sm:mt-8 sm:py-3 sm:text-sm ${
                        course.key !== "advanced"
                          ? "bg-[#0a1a1a] text-white hover:bg-[#1a2a2a] dark:bg-white dark:text-[#071414] dark:hover:bg-white/90"
                          : "cursor-not-allowed border border-[#0a1a1a]/15 bg-transparent text-[#0a1a1a]/45 dark:border-white/15 dark:text-white/45"
                      }`}
                    >
                      {course.key !== "advanced" ? data.cta : data.soon}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="platform" className="px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00B8A8] dark:text-[#00F0FF]">
                {t.platform.label}
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-2xl font-semibold tracking-tight text-[#0a1a1a] sm:text-3xl md:text-4xl dark:text-white">
                {t.platform.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[#3a5a56] dark:text-white/70">
                {t.platform.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex flex-col items-center justify-center rounded-2xl bg-white p-5 text-center shadow-sm shadow-[#00E5D4]/5 transition-colors hover:bg-[#f0f9f6] dark:bg-[#0f1f1f] dark:hover:bg-[#162727] sm:p-6"
                >
                  <span className="font-[family-name:var(--font-arimo)] text-base font-semibold text-[#0a1a1a] dark:text-white">
                    {platform.name}
                  </span>
                  <span className="mt-1 text-xs text-[#6b8b86] dark:text-white/50">
                    {t.platform[platform.priorityKey]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 text-center shadow-sm shadow-[#00E5D4]/5 sm:p-8 md:p-14 dark:bg-[#0f1f1f]"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00B8A8] dark:text-[#4FFFB0]">
              {t.newsletter.label}
            </span>
            <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold tracking-tight text-[#0a1a1a] md:text-4xl dark:text-white">
              {t.newsletter.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-[#3a5a56] dark:text-white/75">
              {t.newsletter.description}
            </p>
            <form className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 rounded-full border border-[#00E5D4]/25 bg-[#F8FDFB] px-5 py-3.5 text-sm text-[#0a1a1a] outline-none transition-colors placeholder:text-[#6b8b86] focus:border-[#00E5D4] dark:border-white/20 dark:bg-[#071414] dark:text-white dark:placeholder:text-white/50"
              />
              <button
                type="submit"
                className="rounded-full bg-[#0a1a1a] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-[#071414]"
              >
                {t.newsletter.cta}
              </button>
            </form>
            <p className="mt-4 text-sm text-[#6b8b86] dark:text-white/50">
              {t.newsletter.disclaimer}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#00E5D4]/15 bg-white px-4 sm:px-6 py-10 dark:border-white/10 dark:bg-[#071414]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Promptly"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-[family-name:var(--font-arimo)] text-xl font-semibold text-[#0a1a1a] dark:text-white">Promptly</span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[#6b8b86] dark:text-white/60">
            {platforms.map((p) => (
              <Link key={p.name} href="#" className="hover:text-[#0a1a1a] dark:hover:text-white">
                {p.name}
              </Link>
            ))}
          </div>

          <p className="text-sm text-[#6b8b86] dark:text-white/45">
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
