"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Check, CheckCircle2, FileText, User } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { RegistrationForm } from "@/app/components/registration-form";
import { WaitlistForm } from "@/app/components/waitlist-form";
import { PlaceholderTag } from "@/app/components/placeholder-tag";

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-[#244348] bg-[#f5f7f6] px-4 py-3">
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b8b86]">
        {label}
      </span>
      <PlaceholderTag value={value} />
    </div>
  );
}

export function CoursePage({ slug }: { slug: "beginner" | "intermediate" | "expert" }) {
  const { t, locale } = useLanguage();
  const data = t.coursePages[slug];
  const availableCourses = t.courses.filter((c) => c.status === "available");
  const mn = locale === "mn";

  if (data.waitlist) {
    return (
      <div className="flex min-h-screen flex-col bg-[#002025]">
        <SiteHeader />
        <main className="flex-1">
          <section className="px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
            <div className="mx-auto max-w-[800px] text-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-sm text-[#9eaeb0] transition-colors hover:text-[#fffffa]"
              >
                <ArrowLeft className="h-4 w-4" />
                {mn ? "Бүх сургалтууд" : "All courses"}
              </Link>
              <p className="kicker mt-8">{data.levelLabel}</p>
              <h1 className="mt-4 text-4xl font-light tracking-tight text-[#fffffa] sm:text-5xl">
                {data.headline}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#7d8f92]">
                {data.description}
              </p>

              <ul className="mx-auto mt-10 grid max-w-xl gap-3 text-left sm:grid-cols-2">
                {data.modules.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-2 rounded-xl border border-[#244348] bg-[rgba(36,67,72,0.5)] px-4 py-3 text-sm text-[#fffffa]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#79fa4b]" />
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="card mx-auto mt-12 max-w-xl p-6 sm:p-10">
                <h2 className="text-xl font-semibold text-[#fffffa]">
                  {t.waitlist.title}
                </h2>
                <p className="mt-2 text-sm text-[#7d8f92]">{t.waitlist.description}</p>
                <div className="mt-6">
                  <WaitlistForm
                    emailPlaceholder={t.waitlist.emailPlaceholder}
                    submit={t.waitlist.submit}
                    success={t.waitlist.success}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#002025]">
      <SiteHeader />
      <main className="flex-1">
        <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm text-[#9eaeb0] transition-colors hover:text-[#fffffa]"
            >
              <ArrowLeft className="h-4 w-4" />
              {mn ? "Бүх сургалтууд" : "All courses"}
            </Link>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="kicker">{data.levelLabel}</p>
                <h1 className="mt-4 text-4xl font-light leading-[1.1] tracking-[-0.02em] text-[#fffffa] sm:text-5xl">
                  {data.headline}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#7d8f92]">
                  {data.description}
                </p>
                <div className="mt-8">
                  <a href="#register" className="btn-primary">
                    {data.primaryCta}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MetaRow label={mn ? "Хэлбэр" : "Format"} value="[ONLINE_OR_OFFLINE]" />
                <MetaRow label={mn ? "Хугацаа" : "Duration"} value="[COURSE_DURATION]" />
                <MetaRow label={mn ? "Багтаамж" : "Capacity"} value="[CLASS_CAPACITY]" />
                <MetaRow label={mn ? "Үнэ" : "Price"} value="[COURSE_PRICE]" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              title={mn ? "Энэ сургалт хэнд зориулагдсан бэ?" : "Who is this course for?"}
              align="left"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.bestFor.map((item) => (
                <div key={item} className="card flex items-start gap-3 p-5">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00b8a8]" />
                  <span className="text-sm leading-relaxed text-[#101614]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={mn ? "Сургалтын үр дүн" : "Learning outcomes"} align="left" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {data.outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-[#244348] bg-[rgba(36,67,72,0.5)] p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#79fa4b]" />
                  <span className="text-sm leading-relaxed text-[#fffffa]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading title={mn ? "Дэлгэрэнгүй хөтөлбөр" : "Detailed curriculum"} />
            <div className="card mt-10 p-6 sm:p-10">
              <ul className="space-y-4">
                {data.modules.map((module) => (
                  <li key={module} className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00b8a8]" />
                    <span className="text-[#101614]">{module}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
            <div className="card p-6 sm:p-10">
              <h2 className="text-xl font-semibold text-[#fffffa]">
                {mn ? "Сургалтын хэлбэр ба хуваарь" : "Course format and schedule"}
              </h2>
              <div className="mt-6 space-y-4">
                {t.howItWorks.placeholders.map((p) => (
                  <div key={p.label} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-[#9eaeb0]">{p.label}</span>
                    <PlaceholderTag value={p.value} />
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6 sm:p-10">
              <h2 className="text-xl font-semibold text-[#fffffa]">
                {mn ? "Сургалтад юу багтдах вэ?" : "What's included?"}
              </h2>
              <ul className="mt-6 space-y-3">
                {(mn
                  ? [
                      "Prompt загварууд",
                      "Дасгалын шалгах жагсаалт",
                      "Хэрэгжүүлэх материал",
                      "Нийгэмлэгт нэгдэх эрх",
                    ]
                  : [
                      "Prompt templates",
                      "Exercise checklists",
                      "Implementation materials",
                      "Community access",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#9eaeb0]">
                    <FileText className="h-4 w-4 text-[#79fa4b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading title={mn ? "Багш" : "Instructor"} />
            <div className="card mt-10 flex items-start gap-5 p-6 sm:p-10">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#f5f7f6]">
                <User className="h-8 w-8 text-[#6b8b86]" />
              </div>
              <div>
                <PlaceholderTag value="[INSTRUCTOR_INFORMATION]" />
                <p className="mt-3 text-sm leading-relaxed text-[#4a5a55]">
                  {mn
                    ? "Багшийн нэр, туршлага, мэргэжлийн мэдээллийг сургалт нээгдэх үед тодорхой танилцуулна."
                    : "Instructor name, experience, and credentials will be introduced when the course opens."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="register" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading
              kicker={mn ? "Бүртгэл" : "Registration"}
              title={data.primaryCta}
              description={
                mn
                  ? "Доорх мэдээллийг бөглөнө үү. Promptly-ийн баг удахгүй холбогдож, төлбөр болон хуваарийн талаар тодруулах болно."
                  : "Fill out the form below. The Promptly team will contact you soon about payment and scheduling."
              }
            />
            <div className="card mt-10 p-6 sm:p-10">
              <RegistrationForm
                defaultCourse={data.name}
                courses={availableCourses.map((c) => ({
                  value: c.slug,
                  label: c.name,
                }))}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
