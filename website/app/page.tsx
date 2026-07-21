"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";
import { Header } from "@/app/components/header";
import { ParticleSphere } from "@/app/components/particle-sphere";
import { GeometricMolecule } from "@/app/components/geometric-molecule";

const platforms = [
  { name: "Facebook", priorityKey: "primary" as const },
  { name: "YouTube Shorts", priorityKey: "primary" as const },
  { name: "Instagram", priorityKey: "secondary" as const },
  { name: "Threads", priorityKey: "secondary" as const },
  { name: "LinkedIn", priorityKey: "secondary" as const },
  { name: "YouTube Longform", priorityKey: "secondary" as const },
];

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

export default function Home() {
  const { t } = useLanguage();
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});

  const toggleCourse = (key: string) => {
    setExpandedCourses((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#012624] text-[#bbc7c6]">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <ParticleSphere />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] text-center">
            <p className="kicker">{t.hero.badge}</p>

            <h1 className="mx-auto mt-6 max-w-5xl text-[clamp(3rem,9vw,6rem)] font-medium leading-none tracking-[-0.04em] text-white">
              {t.hero.headline}{" "}
              <span className="text-[#edfffe]">{t.hero.headlineHighlight}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-base leading-[1.4] text-[#bbc7c6] md:text-lg">
              {t.hero.subheadline}
            </p>

            <div className="mx-auto mt-12 flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#contact" className="aurora-btn px-8 py-4">
                {t.hero.ctaPrimary}
              </Link>
              <Link href="#path" className="ghost-btn px-8 py-4">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 py-[68px] sm:px-6">
          <div className="mx-auto max-w-[1440px]">
            <p className="kicker text-center">{t.stats.label}</p>
            <div className="mt-12 grid grid-cols-3 gap-6 md:gap-20">
              {t.stats.items.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="stat-number text-[clamp(2.5rem,7vw,5.375rem)]">
                    {stat.value}
                  </div>
                  <div className="stat-label mt-4">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Why */}
        <section id="why" className="px-4 py-[68px] sm:px-6">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="kicker">{t.mission.label}</p>
                <h2 className="mt-4 text-[clamp(2.25rem,5vw,3.8rem)] font-medium leading-[1] tracking-[-0.04em] text-white">
                  {t.mission.title}
                </h2>
                <p className="mt-6 max-w-[600px] text-base leading-[1.4] text-[#bbc7c6]">
                  {t.mission.description}
                </p>
              </div>
              <div className="hidden items-center justify-center lg:flex">
                <div className="h-80 w-80">
                  <GeometricMolecule />
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {audiences.map((audience) => {
                const data = t.audiences[audience.key];
                return (
                  <div key={audience.key} className="surface-card p-6 sm:p-9">
                    <h3 className="text-xl font-medium leading-none text-white sm:text-2xl">
                      {data.title}
                    </h3>
                    <p className="mt-4 text-sm leading-[1.4] text-[#bbc7c6] sm:text-base">
                      {data.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Learning path */}
        <section id="path" className="px-4 py-[68px] sm:px-6">
          <div className="mx-auto max-w-[1440px]">
            <p className="kicker text-center">{t.path.label}</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center text-[clamp(2.25rem,5vw,3.8rem)] font-medium leading-[1] tracking-[-0.04em] text-white">
              {t.path.title}
            </h2>

            <div className="mx-auto mt-16 max-w-4xl">
              {courses.map((course, index) => {
                const data = t.path[course.key];
                const isExpanded = !!expandedCourses[course.key];
                const isAdvanced = course.key === "advanced";
                return (
                  <div
                    key={course.key}
                    className="feature-row border-b border-white/10 py-8 first:border-t sm:py-12"
                  >
                    <div className="flex items-start justify-between gap-6 px-2 sm:px-4">
                      <div className="flex items-start gap-4 sm:gap-8">
                        <span className="mt-1 text-xs uppercase tracking-[0.15em] text-[#707777]">
                          0{index + 1}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-2xl font-medium leading-none text-white sm:text-4xl">
                              {data.level}
                            </h3>
                            {isAdvanced && (
                              <span className="rounded-md bg-[#011d1c] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#edfffe]">
                                {data.soon}
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-sm text-[#bbc7c6] sm:text-base">
                            {data.tagline}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleCourse(course.key)}
                        className="arrow-icon-btn"
                        aria-label={isExpanded ? "Show less" : "Show more"}
                        aria-expanded={isExpanded}
                      >
                        <ArrowUpRight
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded
                          ? "mt-6 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2 sm:px-4 sm:pl-16">
                          <p className="max-w-[600px] text-sm leading-[1.4] text-[#bbc7c6] sm:text-base">
                            {data.description}
                          </p>
                          <ul className="mt-6 space-y-2">
                            {data.topics.map((topic) => (
                              <li
                                key={topic}
                                className="flex items-center gap-3 text-sm text-[#edfffe]"
                              >
                                <span className="h-1 w-1 rounded-full bg-[#cbfffc]" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                          <button
                            disabled={isAdvanced}
                            className={`mt-8 px-8 py-3 ${
                              !isAdvanced
                                ? "aurora-btn"
                                : "cursor-not-allowed rounded-md border border-white/10 text-sm uppercase tracking-[0.08em] text-[#707777]"
                            }`}
                          >
                            {!isAdvanced ? data.cta : data.soon}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="px-4 py-[68px] sm:px-6">
          <div className="mx-auto max-w-[1440px]">
            <p className="kicker text-center">{t.platform.label}</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center text-[clamp(2.25rem,5vw,3.8rem)] font-medium leading-[1] tracking-[-0.04em] text-white">
              {t.platform.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-center text-base leading-[1.4] text-[#bbc7c6]">
              {t.platform.description}
            </p>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="surface-card flex flex-col items-center justify-center p-6 text-center transition-colors hover:bg-[#004540]"
                >
                  <span className="text-base font-medium text-white">
                    {platform.name}
                  </span>
                  <span className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#bbc7c6]">
                    {t.platform[platform.priorityKey]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section id="contact" className="px-4 py-[68px] sm:px-6">
          <div className="recessed-card mx-auto max-w-[1440px] px-6 py-[120px] text-center sm:px-12">
            <p className="kicker kicker--mist">{t.newsletter.label}</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(2.25rem,5vw,3.8rem)] font-medium leading-[1] tracking-[-0.04em] text-white">
              {t.newsletter.title}
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-[1.4] text-[#bbc7c6]">
              {t.newsletter.description}
            </p>
            <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 rounded-md border border-white/10 bg-[#012624] px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-[#707777] focus:border-[#cbfffc]/50"
              />
              <button type="submit" className="aurora-btn px-8 py-3.5">
                {t.newsletter.cta}
              </button>
            </form>
            <p className="mt-6 text-xs text-[#707777]">
              {t.newsletter.disclaimer}
            </p>
          </div>
        </section>
      </main>

      {/* Footer — recessed well */}
      <footer className="bg-[#011d1c] px-4 py-[120px] sm:px-6">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Promptly"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-lg font-medium text-white">Promptly</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {platforms.map((p) => (
              <Link key={p.name} href="#" className="nav-ghost-link">
                {p.name}
              </Link>
            ))}
          </div>

          <p className="text-xs text-[#707777]">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
