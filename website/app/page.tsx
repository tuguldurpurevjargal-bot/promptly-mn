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
        <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 sm:pt-44">
          <div className="mx-auto max-w-[1200px] text-center">
            <p className="kicker">{hero.eyebrow}</p>
            <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#101614]">
              Хүн бүрт{" "}
              <span className="text-[#00b8a8]">AI.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[#4a5a55]">
              {hero.description}
            </p>

            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {hero.supportingPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-medium text-[#4a5a55]"
                >
                  <Check className="h-4 w-4 text-[#00b8a8]" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={hero.primaryCta.target} className="btn-primary">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={hero.secondaryCta.target} className="btn-secondary">
                {hero.secondaryCta.label}
              </Link>
            </div>

            <div className="mx-auto mt-20 flex max-w-3xl items-center justify-center">
              <div
                className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl border border-[#e5ebe8] bg-[#f5f7f6] sm:h-56"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #d3dedb 1.25px, transparent 1.25px)",
                  backgroundSize: "22px 22px",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#f5f7f6_85%)]" />
                <Image
                  src="/logo.svg"
                  alt="Promptly брэнд дүрс"
                  width={104}
                  height={104}
                  className="relative h-20 w-20 sm:h-24 sm:w-24"
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
                <div key={card.number} className="card card-hover p-6 sm:p-8">
                  <span className="text-sm font-semibold text-[#00b8a8]">
                    {card.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-[#101614]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5a55]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-[#4a5a55] sm:text-lg">
              {problem.transition}
            </p>
          </div>
        </section>

        {/* Courses selector */}
        <section id="courses" className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
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
                <div key={item} className="card card-hover flex items-start gap-3 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00b8a8]" />
                  <span className="text-sm leading-relaxed text-[#101614]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={howItWorks.headline} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {howItWorks.steps.map((step) => (
                <div key={step.number} className="card card-hover p-5">
                  <span className="text-sm font-semibold text-[#00b8a8]">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-semibold text-[#101614]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5a55]">
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
        <section id="why-promptly" className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={whyPromptly.headline} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyPromptly.items.map((item) => (
                <div key={item.title} className="card card-hover p-6">
                  <Sparkles className="h-6 w-6 text-[#00b8a8]" />
                  <h3 className="mt-4 font-semibold text-[#101614]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5a55]">
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
                <div key={member.name} className="card card-hover flex items-start gap-5 p-6 sm:p-8">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#f5f7f6]">
                    <User className="h-8 w-8 text-[#6b8b86]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101614]">
                      <PlaceholderTag value={member.name} />
                    </h3>
                    <p className="mt-1 text-sm text-[#00b8a8]">
                      <PlaceholderTag value={member.role} />
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4a5a55]">
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
          <div className="tinted-panel mx-auto max-w-[1200px] px-6 py-14 text-center sm:px-12">
            <FileText className="mx-auto h-10 w-10 text-[#00b8a8]" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#101614] sm:text-4xl">
              {leadMagnet.headline}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#4a5a55]">
              {leadMagnet.description}
            </p>
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white/80 p-4 sm:p-5">
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
                <div key={item.title} className="card card-hover overflow-hidden">
                  <div className="flex h-40 items-center justify-center bg-[#f5f7f6]">
                    <ImageIcon className="h-8 w-8 text-[#6b8b86]" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#00b8a8]">
                      {item.type}
                    </span>
                    <h3 className="mt-2 font-semibold leading-snug text-[#101614]">
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
        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              title={proof.headline}
              description={proof.launchNote}
            />
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
              {proof.launchOptions.map((option) => (
                <span
                  key={option}
                  className="rounded-full border border-[#e5ebe8] bg-white px-4 py-2 text-sm text-[#4a5a55]"
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
          <div className="mx-auto max-w-[1200px] rounded-3xl border border-[#e5ebe8] bg-[#f5f7f6] px-6 py-16 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-[#101614] sm:text-4xl">
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
