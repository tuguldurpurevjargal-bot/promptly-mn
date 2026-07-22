"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Clock,
  FileText,
  GraduationCap,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/app/i18n/context";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { ProductVisual } from "@/app/components/product-visual";
import { TiltedTiles } from "@/app/components/tilted-tiles";
import { Reveal } from "@/app/components/reveal";
import { FaqAccordion } from "@/app/components/faq-accordion";
import { LeadForm } from "@/app/components/lead-form";

const levelIcons = {
  beginner: <GraduationCap className="h-5 w-5" />,
  intermediate: <Layers className="h-5 w-5" />,
  expert: <Rocket className="h-5 w-5" />,
};

export function HomeBody() {
  const { t, locale } = useLanguage();

  const availableCourses = t.courses.filter((c) => c.status === "available");
  const expertCourse = t.courses.find((c) => c.status === "coming_soon")!;
  const { hero, howItWorks, leadMagnet, whyPromptly, faq, finalCta } = t;

  const mn = locale === "mn";

  return (
    <div className="flex min-h-screen flex-col bg-[#002025]">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-5 pb-24 pt-36 sm:pt-44">
          <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="mt-6 text-[clamp(3.5rem,9vw,7.5rem)] font-light leading-[0.9] tracking-[-0.04em] text-[#fffffa]">
                {mn ? (
                  <>
                    Хүн бүрт <span className="lime-underline">AI.</span>
                  </>
                ) : (
                  <>
                    AI for <span className="lime-underline">everyone.</span>
                  </>
                )}
              </h1>
              <p className="mt-8 max-w-md text-lg leading-[1.45] text-[#7d8f92]">
                {hero.description}
              </p>

              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                {hero.supportingPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[#9eaeb0]">
                    <Check className="h-4 w-4 text-[#79fa4b]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={hero.primaryCta.target} className="btn-primary">
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={hero.secondaryCta.target} className="btn-secondary">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <ProductVisual />
            </div>
          </div>
        </section>

        {/* Quiz band */}
        <section className="px-5 py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[30px] border border-[#244348] p-8 sm:p-12">
                <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
                  <div>
                    <p className="eyebrow">{mn ? "AI Literacy тест" : "AI Literacy test"}</p>
                    <h2 className="mt-4 text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[#fffffa] sm:text-4xl">
                      {mn ? (
                        <>
                          Түвшнээ тодорхойлж,{" "}
                          <span className="lime-underline">тохирох сургалтаа</span>{" "}
                          ол.
                        </>
                      ) : (
                        <>
                          Find your level and the{" "}
                          <span className="lime-underline">right course</span>{" "}
                          for you.
                        </>
                      )}
                    </h2>
                    <p className="mt-4 max-w-lg text-base text-[#7d8f92]">
                      {mn
                        ? "AI хэрэглээний түвшин, давуу тал болон хөгжүүлэх боломжоо ойролцоогоор тодорхойлно."
                        : "Get an approximate read on your AI usage level, strengths, and growth opportunities."}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4 md:items-end">
                    <div className="flex gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#244348] bg-[#002025] px-4 py-1.5 text-sm text-[#9eaeb0]">
                        <ClipboardList className="h-4 w-4 text-[#79fa4b]" />
                        {mn ? "11 асуулт" : "11 questions"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#244348] bg-[#002025] px-4 py-1.5 text-sm text-[#9eaeb0]">
                        <Clock className="h-4 w-4 text-[#79fa4b]" />
                        {mn ? "3 минут" : "3 minutes"}
                      </span>
                    </div>
                    <Link href="/test" className="btn-lime-outline">
                      {mn ? "Тест эхлүүлэх" : "Start the test"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#30d7f1] to-[#79fa4b]" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="px-5 py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <p className="eyebrow">{mn ? "Сургалтууд" : "Courses"}</p>
              <h2 className="mt-4 max-w-3xl text-5xl font-light leading-[1] tracking-[-0.03em] text-[#fffffa] sm:text-6xl">
                {mn ? (
                  <>
                    Танд аль сургалт{" "}
                    <span className="lime-underline">тохирох</span>{" "}
                    вэ?
                  </>
                ) : (
                  <>
                    Which course{" "}
                    <span className="lime-underline">fits</span>{" "}
                    you?
                  </>
                )}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {availableCourses.map((course, index) => (
                <Reveal key={course.slug} delay={index * 150}>
                  <article className="card card-hover flex h-full flex-col p-8 sm:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0b3222] to-[#1a5c35] text-[#79fa4b]">
                        {levelIcons[course.slug as keyof typeof levelIcons]}
                      </div>
                      <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#79fa4b]">
                        {course.slug === "beginner"
                          ? mn ? "Анхан шат" : "Beginner"
                          : mn ? "Дунд шат" : "Intermediate"}
                      </span>
                    </div>
                    <h3 className="mt-5 text-3xl font-light tracking-[-0.02em] text-[#fffffa]">
                      {course.name}
                    </h3>
                    <p className="mt-2 text-base font-medium text-[#b7c6c9]">{course.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-[1.45] text-[#7d8f92]">
                      {course.description}
                    </p>

                    <ul className="mt-6 space-y-2 border-t border-[#244348] pt-6">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2.5 text-sm text-[#9eaeb0]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#79fa4b]" />
                          {topic}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={course.cta.target}
                      className={`mt-8 w-full justify-center ${index === 0 ? "btn-primary" : "btn-secondary"}`}
                    >
                      {course.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="card mt-6 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0b3222] to-[#1a5c35] text-[#79fa4b]">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-light text-[#fffffa]">{expertCourse.name}</h3>
                      <span className="rounded-full border border-[#244348] px-3 py-1 text-xs text-[#7d8f92]">
                        {mn ? "Удахгүй" : "Coming soon"}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm text-[#7d8f92]">
                      {expertCourse.description}
                    </p>
                  </div>
                </div>
                <Link href={expertCourse.cta.target} className="btn-lime-outline whitespace-nowrap">
                  {expertCourse.cta.label}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why Promptly */}
        <section id="why-promptly" className="px-5 py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="eyebrow">{mn ? "Яагаад Promptly" : "Why Promptly"}</p>
                <h2 className="mt-4 text-5xl font-light leading-[1] tracking-[-0.03em] text-[#fffffa] sm:text-6xl">
                  {mn ? (
                    <>
                      Tool биш,{" "}
                      <span className="lime-underline">чадвар.</span>
                    </>
                  ) : (
                    <>
                      Not tools,{" "}
                      <span className="lime-underline">skills.</span>
                    </>
                  )}
                </h2>
              </Reveal>
              <div className="mt-12 space-y-8">
                {whyPromptly.items.map((item, index) => (
                  <Reveal key={item.title} delay={index * 100}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0b3222] to-[#1a5c35] text-[#79fa4b]">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#fffffa]">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-[1.45] text-[#7d8f92]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={150}>
              <TiltedTiles />
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="px-5 py-24">
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <p className="eyebrow">{mn ? "Хэрхэн ажилладаг" : "How it works"}</p>
              <h2 className="mt-4 text-5xl font-light leading-[1] tracking-[-0.03em] text-[#fffffa] sm:text-6xl">
                {mn ? (
                  <>
                    Сургалт хэрхэн{" "}
                    <span className="lime-underline">явагдах</span>{" "}
                    вэ?
                  </>
                ) : (
                  <>
                    How the course{" "}
                    <span className="lime-underline">works</span>
                  </>
                )}
              </h2>
            </Reveal>
            <div>
              {howItWorks.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 80}>
                  <div className="flex gap-6 border-b border-[#244348] py-6 first:border-t">
                    <span className="text-2xl font-light text-[#79fa4b]">{step.number}</span>
                    <div>
                      <h3 className="text-lg font-medium text-[#fffffa]">{step.title}</h3>
                      <p className="mt-1 text-sm leading-[1.45] text-[#7d8f92]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Lead magnet */}
        <section id="free-resource" className="px-5 py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <div className="surface-deep px-6 py-14 text-center sm:px-12 sm:py-16">
                <FileText className="mx-auto h-9 w-9 text-[#79fa4b]" />
                <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.03em] text-[#fffffa] sm:text-5xl">
                  {leadMagnet.headline}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-[#7d8f92]">
                  {leadMagnet.description}
                </p>
                <div className="mx-auto mt-9 max-w-2xl">
                  <LeadForm
                    cta={leadMagnet.cta}
                    success={leadMagnet.success}
                    namePlaceholder={leadMagnet.namePlaceholder}
                    emailPlaceholder={leadMagnet.emailPlaceholder}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 py-24">
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 text-5xl font-light leading-[1] tracking-[-0.03em] text-[#fffffa] sm:text-6xl">
                {mn ? (
                  <>
                    Түгээмэл{" "}
                    <span className="lime-underline">асуултууд</span>
                  </>
                ) : (
                  <>
                    Frequently asked{" "}
                    <span className="lime-underline">questions</span>
                  </>
                )}
              </h2>
            </Reveal>
            <div className="mt-12">
              <FaqAccordion items={faq.items} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-28 pt-8">
          <div className="mx-auto max-w-[1200px] rounded-[30px] border border-[#244348] px-6 py-16 text-center sm:px-12">
            <h2 className="mx-auto max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.03em] text-[#fffffa] sm:text-5xl">
              {mn ? (
                <>
                  AI-г зүгээр сонирхохоо болиод,{" "}
                  <span className="lime-underline">ашиглаж</span>{" "}
                  эхлэхэд бэлэн үү?
                </>
              ) : (
                <>
                  Ready to stop watching and start{" "}
                  <span className="lime-underline">using</span>{" "}
                  AI?
                </>
              )}
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
