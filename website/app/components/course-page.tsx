import Link from "next/link";
import { ArrowLeft, BookOpen, Check, CheckCircle2, FileText, User } from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { RegistrationForm } from "@/app/components/registration-form";
import { WaitlistForm } from "@/app/components/waitlist-form";
import { PlaceholderTag } from "@/app/components/placeholder-tag";
import type { CoursePageData } from "@/app/data/content";
import { courses, howItWorks, registration, waitlist } from "@/app/data/content";

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-[#e5ebe8] bg-[#f5f7f6] px-4 py-3">
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b8b86]">
        {label}
      </span>
      <PlaceholderTag value={value} />
    </div>
  );
}

export function CoursePage({ data }: { data: CoursePageData }) {
  const availableCourses = courses.filter((c) => c.status === "available");

  if (data.waitlist) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <SiteHeader />
        <main className="flex-1">
          <section className="px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
            <div className="mx-auto max-w-[800px] text-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-sm text-[#6b8b86] transition-colors hover:text-[#101614]"
              >
                <ArrowLeft className="h-4 w-4" />
                Бүх сургалтууд
              </Link>
              <p className="kicker mt-8">{data.levelLabel}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#101614] sm:text-5xl">
                {data.headline}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#4a5a55]">
                {data.description}
              </p>

              <ul className="mx-auto mt-10 grid max-w-xl gap-3 text-left sm:grid-cols-2">
                {data.modules.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-2 rounded-xl border border-[#e5ebe8] bg-white px-4 py-3 text-sm text-[#101614]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00e5d4]" />
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="card mx-auto mt-12 max-w-xl p-6 sm:p-10">
                <h2 className="text-xl font-semibold text-[#101614]">
                  {waitlist.title}
                </h2>
                <p className="mt-2 text-sm text-[#4a5a55]">{waitlist.description}</p>
                <div className="mt-6">
                  <WaitlistForm
                    emailPlaceholder={waitlist.emailPlaceholder}
                    submit={waitlist.submit}
                    success={waitlist.success}
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
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Course hero */}
        <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,229,212,0.1),transparent_60%)]"
          />
          <div className="mx-auto max-w-[1200px]">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm text-[#6b8b86] transition-colors hover:text-[#101614]"
            >
              <ArrowLeft className="h-4 w-4" />
              Бүх сургалтууд
            </Link>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="kicker">{data.levelLabel}</p>
                <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#101614] sm:text-5xl">
                  {data.headline}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4a5a55]">
                  {data.description}
                </p>
                <div className="mt-8">
                  <a href="#register" className="btn-primary">
                    {data.primaryCta}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MetaRow label="Хэлбэр" value="[ONLINE_OR_OFFLINE]" />
                <MetaRow label="Хугацаа" value="[COURSE_DURATION]" />
                <MetaRow label="Багтаамж" value="[CLASS_CAPACITY]" />
                <MetaRow label="Үнэ" value="[COURSE_PRICE]" />
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title="Энэ сургалт хэнд зориулагдсан бэ?" align="left" />
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

        {/* Outcomes */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title="Сургалтын үр дүн" align="left" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {data.outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-[#e5ebe8] bg-white p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00b8a8]" />
                  <span className="text-sm leading-relaxed text-[#101614]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading title="Дэлгэрэнгүй хөтөлбөр" />
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

        {/* Format & materials */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
            <div className="card p-6 sm:p-10">
              <h2 className="text-xl font-semibold text-[#101614]">
                Сургалтын хэлбэр ба хуваарь
              </h2>
              <div className="mt-6 space-y-4">
                {howItWorks.placeholders.map((p) => (
                  <div key={p.label} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-[#6b8b86]">{p.label}</span>
                    <PlaceholderTag value={p.value} />
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6 sm:p-10">
              <h2 className="text-xl font-semibold text-[#101614]">
                Сургалтад юу багтдах вэ?
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Prompt template-үүд",
                  "Дасгалын checklist",
                  "Хэрэгжүүлэх материал",
                  "Community-д нэгдэх эрх",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#4a5a55]">
                    <FileText className="h-4 w-4 text-[#00b8a8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Instructor */}
        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading title="Багш" />
            <div className="card mt-10 flex items-start gap-5 p-6 sm:p-10">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#f5f7f6]">
                <User className="h-8 w-8 text-[#6b8b86]" />
              </div>
              <div>
                <PlaceholderTag value="[INSTRUCTOR_INFORMATION]" />
                <p className="mt-3 text-sm leading-relaxed text-[#4a5a55]">
                  Багшийн нэр, туршлага, мэргэжлийн мэдээллийг сургалт нээгдэх үед тодорхой
                  танилцуулна.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section id="register" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading
              kicker="Бүртгэл"
              title={data.primaryCta}
              description="Доорх мэдээллийг бөглөнө үү. Promptly-ийн баг удахгүй холбогдож, төлбөр болон хуваарийн талаар тодруулах болно."
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
