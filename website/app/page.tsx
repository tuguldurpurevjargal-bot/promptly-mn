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
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
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
  title: "Promptly — Хүн бүрт AI | Монгол хэл дээрх практик AI сургалт",
};

export default function HomePage() {
  const availableCourses = courses.filter((c) => c.status === "available");
  const expertCourse = courses.find((c) => c.status === "coming_soon")!;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,212,0.14),transparent_65%)]" />
            <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(79,255,176,0.16),transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-[1200px] text-center">
            <p className="kicker">{hero.eyebrow}</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#0a1a1a] sm:text-7xl">
              Хүн бүрт{" "}
              <span className="brand-gradient-text">AI.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#40514e]">
              {hero.description}
            </p>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {hero.supportingPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-medium text-[#40514e]"
                >
                  <Check className="h-4 w-4 text-[#00b8a8]" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={hero.primaryCta.target} className="btn-primary">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={hero.secondaryCta.target} className="btn-secondary">
                {hero.secondaryCta.label}
              </Link>
            </div>

            <div className="mx-auto mt-16 flex max-w-3xl items-center justify-center">
              <div className="relative flex h-40 w-full items-center justify-center rounded-2xl border border-[#e6eceb] bg-[#f4f7f6] sm:h-52">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(0,229,212,0.12),transparent_70%)]" />
                <Image
                  src="/logo.svg"
                  alt="Promptly брэнд дүрс"
                  width={96}
                  height={96}
                  className="relative h-20 w-20 opacity-90 sm:h-24 sm:w-24"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={problem.headline} />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {problem.cards.map((card) => (
                <div key={card.number} className="card p-6 sm:p-8">
                  <span className="text-sm font-semibold text-[#00b8a8]">
                    {card.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-[#0a1a1a]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#40514e]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-[#40514e] sm:text-lg">
              {problem.transition}
            </p>
          </div>
        </section>

        {/* Courses selector */}
        <section id="courses" className="bg-[#f4f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              kicker="Сургалтууд"
              title="Танд аль сургалт тохирох вэ?"
              description="Өөрийн одоогийн мэдлэг, хэрэглээ болон зорилгод тохирох түвшнээ сонго."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {availableCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
            <div className="mt-6">
              <ExpertTeaser course={expertCourse} />
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={outcomes.headline} />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outcomes.items.map((item) => (
                <div key={item} className="card flex items-start gap-3 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00b8a8]" />
                  <span className="text-sm leading-relaxed text-[#0a1a1a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[#f4f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={howItWorks.headline} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {howItWorks.steps.map((step) => (
                <div key={step.number} className="card p-5">
                  <span className="text-sm font-semibold text-[#00b8a8]">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-semibold text-[#0a1a1a]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#40514e]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {howItWorks.placeholders.map((p) => (
                <div key={p.label} className="flex items-center gap-2 text-sm">
                  <span className="text-[#6b8b86]">{p.label}:</span>
                  <PlaceholderTag value={p.value} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={curriculum.headline} />
            <div className="mt-12">
              <CurriculumTabs tabs={curriculum.tabs} />
            </div>
          </div>
        </section>

        {/* Why Promptly */}
        <section id="why-promptly" className="bg-[#f4f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={whyPromptly.headline} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyPromptly.items.map((item) => (
                <div key={item.title} className="card p-6">
                  <Sparkles className="h-6 w-6 text-[#00b8a8]" />
                  <h3 className="mt-4 font-semibold text-[#0a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#40514e]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              title={founders.headline}
              description={founders.description}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {founders.members.map((member) => (
                <div key={member.name} className="card flex items-start gap-5 p-6 sm:p-8">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#f4f7f6]">
                    <User className="h-8 w-8 text-[#6b8b86]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1a1a]">
                      <PlaceholderTag value={member.name} />
                    </h3>
                    <p className="mt-1 text-sm text-[#00b8a8]">
                      <PlaceholderTag value={member.role} />
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#40514e]">
                      <PlaceholderTag value={member.bio} />
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-[#6b8b86]">
                      <Link2 className="h-4 w-4" />
                      <PlaceholderTag value={member.linkedin} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead magnet */}
        <section id="free-resource" className="px-4 py-20 sm:px-6">
          <div className="brand-gradient mx-auto max-w-[1200px] rounded-3xl px-6 py-14 text-center sm:px-12">
            <FileText className="mx-auto h-10 w-10 text-[#0a1a1a]" />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0a1a1a] sm:text-4xl">
              {leadMagnet.headline}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#0a1a1a]/80">
              {leadMagnet.description}
            </p>
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white/70 p-4 backdrop-blur-sm sm:p-5">
              <LeadForm
                cta={leadMagnet.cta}
                success={leadMagnet.success}
                namePlaceholder={leadMagnet.namePlaceholder}
                emailPlaceholder={leadMagnet.emailPlaceholder}
              />
            </div>
          </div>
        </section>

        {/* Resources preview */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={resourcesPreview.headline} />
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {resourcesPreview.items.map((item) => (
                <div key={item.title} className="card overflow-hidden">
                  <div className="flex h-40 items-center justify-center bg-[#f4f7f6]">
                    <ImageIcon className="h-8 w-8 text-[#6b8b86]" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#00b8a8]">
                      {item.type}
                    </span>
                    <h3 className="mt-2 font-semibold leading-snug text-[#0a1a1a]">
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
              <Link href={resourcesPreview.secondaryCta.target} className="btn-secondary">
                {resourcesPreview.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* Proof — launch state */}
        <section className="bg-[#f4f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              title={proof.headline}
              description={proof.launchNote}
            />
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
              {proof.launchOptions.map((option) => (
                <span
                  key={option}
                  className="rounded-full border border-[#e6eceb] bg-white px-4 py-2 text-sm text-[#40514e]"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[900px]">
            <SectionHeading title={faq.headline} />
            <div className="mt-12">
              <FaqAccordion items={faq.items} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pb-24 pt-4 sm:px-6">
          <div className="mx-auto max-w-[1200px] rounded-3xl border border-[#e6eceb] bg-[#f4f7f6] px-6 py-16 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-[#0a1a1a] sm:text-4xl">
              {finalCta.headline}
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={finalCta.primaryCta.target} className="btn-primary">
                {finalCta.primaryCta.label}
              </Link>
              <Link href={finalCta.secondaryCta.target} className="btn-secondary">
                {finalCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
