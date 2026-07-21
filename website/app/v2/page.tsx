import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  ImageIcon,
  Link2,
  Sparkles,
  User,
} from "lucide-react";
import { V2Header } from "./components/v2-header";
import { V2Footer } from "./components/v2-footer";
import { NightSkyline } from "./components/night-skyline";
import { MeadowField } from "./components/meadow-field";
import { PixelFlower } from "./components/pixel-flower";
import { Reveal } from "./components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { CourseCard, ExpertTeaser } from "@/app/components/course-card";
import { FaqAccordion } from "@/app/components/faq-accordion";
import { CurriculumTabs } from "@/app/components/curriculum-tabs";
import { LeadForm } from "@/app/components/lead-form";
import { PlaceholderTag } from "@/app/components/placeholder-tag";
import {
  courses,
  curriculum,
  faq,
  finalCta,
  founders,
  hero,
  howItWorks,
  leadMagnet,
  outcomes,
  problem,
  proof,
  resourcesPreview,
  whyPromptly,
} from "@/app/data/content";

export const metadata: Metadata = {
  title: "Promptly — Хүн бүрт AI (v2)",
};

export default function JournalHomePage() {
  const availableCourses = courses.filter((c) => c.status === "available");
  const expertCourse = courses.find((c) => c.status === "coming_soon")!;

  return (
    <div className="flex min-h-screen flex-col bg-[#fefffc]">
      <V2Header />

      <main className="flex-1">
        {/* Hero — 100vh illustrated skyline with frosted overlay */}
        <section className="relative flex min-h-screen items-end overflow-hidden">
          <NightSkyline />

          {/* Floating pixel flower — deliberate game-art contrast */}
          <div className="anim-bob pointer-events-none absolute right-[12%] top-[22%] z-10 hidden sm:block">
            <PixelFlower className="h-24 w-16 drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pb-20 pt-40 sm:px-6">
            <div
              className="anim-rise-in max-w-xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl sm:p-10"
              style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 2px 0px" }}
            >
              <p className="text-[13px] font-medium tracking-[-0.01em] text-white/80">
                {hero.eyebrow}
              </p>
              <h1 className="serif mt-4 text-[44px] leading-[1.1] tracking-[-0.02em] text-white sm:text-[54px]">
                {hero.headline}
              </h1>
              <p className="mt-4 text-[16px] leading-[1.5] text-white/80">
                {hero.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/v2/courses"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#41a1cf] bg-white/5 px-4 py-2.5 text-[15px] font-medium text-[#7ec3e8] backdrop-blur transition-colors hover:bg-[#41a1cf]/10"
                >
                  {hero.primaryCta.label}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current">
                    <ArrowRight className="h-2.5 w-2.5" />
                  </span>
                </Link>
                <Link
                  href="/v2#courses"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2.5 text-[15px] font-medium text-white/90 transition-colors hover:bg-white/10"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading title={problem.headline} align="left" />
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {problem.cards.map((card, index) => (
                <Reveal key={card.number} delay={index * 120}>
                  <div className="card card-hover h-full p-6">
                    <span className="text-[13px] font-medium text-[#646464]">
                      {card.number}
                    </span>
                    <h3 className="mt-3 text-[27px] leading-[1.1] tracking-[-0.02em]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.5] text-[#646464]">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="serif mt-12 max-w-3xl text-[27px] leading-[1.3] tracking-[-0.02em] text-[#2c2c2c]">
                {problem.transition}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="border-t border-[#dee2de] bg-[#f9faf7] px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading
                kicker="Сургалтууд"
                title="Танд аль сургалт тохирох вэ?"
                description="Өөрийн одоогийн мэдлэг, хэрэглээ болон зорилгод тохирох түвшнээ сонго."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {availableCourses.map((course, index) => (
                <Reveal key={course.slug} delay={index * 150}>
                  <CourseCard
                    course={{
                      ...course,
                      cta: { ...course.cta, target: `/v2${course.cta.target}` },
                    }}
                  />
                </Reveal>
              ))}
            </div>
            <div className="mt-5">
              <Reveal>
                <ExpertTeaser
                  course={{
                    ...expertCourse,
                    cta: { ...expertCourse.cta, target: `/v2${expertCourse.cta.target}` },
                  }}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading title={outcomes.headline} />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outcomes.items.map((item) => (
                <div key={item} className="card card-hover flex items-start gap-3 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#41a1cf]" />
                  <span className="text-[15px] leading-[1.5] text-[#444141]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-[#dee2de] bg-[#f9faf7] px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading title={howItWorks.headline} />
            </Reveal>
            <div className="mx-auto mt-12 max-w-3xl">
              {howItWorks.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 100}>
                  <div className="flex gap-6 border-b border-[#dee2de] py-7 first:border-t">
                    <span className="serif text-[27px] leading-[1.1] text-[#b4b8b4]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-[18px] font-medium tracking-[-0.01em] text-[#2c2c2c]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-[1.5] text-[#646464]">
                        {step.description}
                      </p>
                    </div>
                    {index < howItWorks.steps.length - 1 && <span className="sr-only">/</span>}
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {howItWorks.placeholders.map((p) => (
                <div key={p.label} className="flex items-center gap-2 text-[13px]">
                  <span className="text-[#646464]">{p.label}:</span>
                  <PlaceholderTag value={p.value} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading title={curriculum.headline} />
            </Reveal>
            <div className="mt-12">
              <CurriculumTabs
                tabs={curriculum.tabs.map((tab) => ({
                  ...tab,
                  target: `/v2${tab.target}`,
                }))}
              />
            </div>
          </div>
        </section>

        {/* Why Promptly */}
        <section id="why-promptly" className="border-t border-[#dee2de] bg-[#f9faf7] px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading title={whyPromptly.headline} />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyPromptly.items.map((item) => (
                <div key={item.title} className="card card-hover p-6">
                  <Sparkles className="h-5 w-5 text-[#41a1cf]" />
                  <h3 className="mt-4 text-[18px] font-medium tracking-[-0.01em] text-[#2c2c2c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-[#646464]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meadow divider */}
        <section className="relative h-64 overflow-hidden sm:h-80" aria-hidden="true">
          <MeadowField />
          <div className="anim-bob pointer-events-none absolute bottom-6 right-[8%] hidden sm:block">
            <PixelFlower className="h-20 w-14 drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]" />
          </div>
        </section>

        {/* Founders */}
        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading
                title={founders.headline}
                description={founders.description}
              />
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {founders.members.map((member) => (
                <div key={member.name} className="card flex items-start gap-5 p-6 sm:p-8">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#f9faf7]">
                    <User className="h-8 w-8 text-[#b4b8b4]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-[#2c2c2c]">
                      <PlaceholderTag value={member.name} />
                    </h3>
                    <p className="mt-1 text-[13px] text-[#41a1cf]">
                      <PlaceholderTag value={member.role} />
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.5] text-[#646464]">
                      <PlaceholderTag value={member.bio} />
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-[13px] text-[#646464]">
                      <Link2 className="h-4 w-4" />
                      <PlaceholderTag value={member.linkedin} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead magnet — Cerulean atmospheric card */}
        <section id="free-resource" className="px-4 pb-20 sm:px-6 sm:pb-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-[#0081c0] px-6 py-16 text-center sm:px-12 sm:py-20">
                {/* Painterly waves */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 1200 500"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="lm-brush">
                      <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" />
                    </filter>
                  </defs>
                  <g filter="url(#lm-brush)" fill="none" strokeLinecap="round">
                    <path d="M-50 420 C 200 360, 400 450, 650 390 C 900 330, 1100 420, 1250 380" stroke="#5cb4dd" strokeWidth="34" opacity="0.4" />
                    <path d="M-50 470 C 220 410, 460 490, 700 440 C 940 390, 1120 460, 1250 430" stroke="#8fcbe9" strokeWidth="22" opacity="0.3" />
                    <path d="M-50 80 C 240 40, 480 110, 720 70 C 960 30, 1140 90, 1250 60" stroke="#4aa8d4" strokeWidth="26" opacity="0.25" />
                  </g>
                  {/* Floating light particles */}
                  {[
                    { x: 180, y: 120, d: "anim-pollen" },
                    { x: 520, y: 90, d: "anim-pollen-d1" },
                    { x: 860, y: 140, d: "anim-pollen-d2" },
                    { x: 340, y: 200, d: "anim-pollen-d1" },
                    { x: 1050, y: 110, d: "anim-pollen" },
                    { x: 700, y: 220, d: "anim-pollen-d2" },
                  ].map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#cfeafa" className={p.d} />
                  ))}
                </svg>

                <div className="relative">
                  <FileText className="mx-auto h-9 w-9 text-white/90" />
                  <h2 className="serif mt-5 text-4xl leading-[1.1] tracking-[-0.02em] text-white sm:text-[48px]">
                    {leadMagnet.headline}
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.5] text-white/85">
                    {leadMagnet.description}
                  </p>
                  <div className="mx-auto mt-9 max-w-2xl rounded-2xl bg-white p-4 sm:p-5">
                    <LeadForm
                      cta={leadMagnet.cta}
                      success={leadMagnet.success}
                      namePlaceholder={leadMagnet.namePlaceholder}
                      emailPlaceholder={leadMagnet.emailPlaceholder}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Resources preview */}
        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading title={resourcesPreview.headline} />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {resourcesPreview.items.map((item) => (
                <div key={item.title} className="card card-hover overflow-hidden">
                  <div className="flex h-40 items-center justify-center bg-[#f9faf7]">
                    <ImageIcon className="h-8 w-8 text-[#b4b8b4]" />
                  </div>
                  <div className="p-5">
                    <span className="text-[13px] font-medium text-[#41a1cf]">
                      {item.type}
                    </span>
                    <h3 className="mt-2 text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-[#2c2c2c]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={resourcesPreview.primaryCta.target} className="btn-primary">
                {resourcesPreview.primaryCta.label}
              </Link>
              <Link href="/v2/resources" className="btn-secondary">
                {resourcesPreview.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* Proof — launch state */}
        <section className="border-t border-[#dee2de] bg-[#f9faf7] px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <SectionHeading title={proof.headline} description={proof.launchNote} />
            </Reveal>
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
              {proof.launchOptions.map((option) => (
                <span
                  key={option}
                  className="rounded-lg border border-[#dee2de] bg-white px-4 py-2 text-[15px] text-[#444141]"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <SectionHeading title={faq.headline} />
            </Reveal>
            <div className="mt-12">
              <FaqAccordion items={faq.items} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-[1200px] rounded-3xl border border-[#dee2de] bg-white px-6 py-16 text-center sm:px-12">
            <h2 className="serif mx-auto max-w-2xl text-4xl leading-[1.1] tracking-[-0.02em] text-[#2c2c2c] sm:text-[48px]">
              {finalCta.headline}
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/v2/courses/beginner"
                className="inline-flex items-center gap-2 rounded-lg border border-[#282834] bg-[#1f1f29] px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#282834]"
              >
                {finalCta.primaryCta.label}
              </Link>
              <Link href="/v2/courses/intermediate" className="btn-secondary">
                {finalCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <V2Footer />

      {/* Version switcher */}
      <Link
        href="/"
        className="fixed bottom-6 right-6 z-[60] rounded-full border border-[#282834] bg-white/80 px-5 py-2.5 text-[13px] font-medium text-[#282834] backdrop-blur-xl transition-colors hover:bg-white"
      >
        v1 →
      </Link>
    </div>
  );
}
