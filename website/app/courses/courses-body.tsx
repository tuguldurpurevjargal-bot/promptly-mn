"use client";

import Link from "next/link";
import { useLanguage } from "@/app/i18n/context";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { CourseCard, ExpertTeaser } from "@/app/components/course-card";
import { CurriculumTabs } from "@/app/components/curriculum-tabs";
import { RegistrationForm } from "@/app/components/registration-form";

export function CoursesBody() {
  const { t, locale } = useLanguage();

  const availableCourses = t.courses.filter((c) => c.status === "available");
  const expertCourse = t.courses.find((c) => c.status === "coming_soon")!;

  return (
    <div className="flex min-h-screen flex-col bg-[#002025]">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              kicker={locale === "mn" ? "Сургалтууд" : "Courses"}
              title={locale === "mn" ? "Өөрт тохирох түвшнээ сонго" : "Choose the level that fits you"}
              description={
                locale === "mn"
                  ? "Beginner сургалт AI-г анхнаас нь, Intermediate сургалт AI-г ажлын систем болгон хэрэгжүүлэхэд зориулагдсан."
                  : "Beginner teaches AI from the ground up; Intermediate helps you integrate AI into your work system."
              }
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

        <section className="bg-[#f5f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title={t.curriculum.headline} />
            <div className="mt-12">
              <CurriculumTabs tabs={t.curriculum.tabs} />
            </div>
          </div>
        </section>

        <section id="register" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading
              kicker={locale === "mn" ? "Бүртгэл" : "Registration"}
              title={t.registration.title}
              description={
                locale === "mn"
                  ? "Доорх мэдээллийг бөглөнө үү. Promptly-ийн баг удахгүй холбогдож, сургалтын дэлгэрэнгүйг хүргэх болно."
                  : "Fill out the form below. The Promptly team will contact you soon with course details."
              }
            />
            <div className="card mt-10 p-6 sm:p-10">
              <RegistrationForm
                courses={availableCourses.map((c) => ({
                  value: c.slug,
                  label: c.name,
                }))}
              />
            </div>
            <p className="mt-6 text-center text-sm text-[#6b8b86]">
              {locale === "mn" ? "Байгууллагын сургалтын хүсэлт байвал " : "For organizational training requests, "}
              <Link href="/contact" className="font-medium text-[#00b8a8] hover:underline">
                {locale === "mn" ? "холбоо барина уу" : "contact us"}
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
