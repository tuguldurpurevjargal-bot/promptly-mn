import type { Metadata } from "next";
import Link from "next/link";
import { V2Header } from "../components/v2-header";
import { V2Footer } from "../components/v2-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { CourseCard, ExpertTeaser } from "@/app/components/course-card";
import { CurriculumTabs } from "@/app/components/curriculum-tabs";
import { RegistrationForm } from "@/app/components/registration-form";
import { courses, curriculum, registration } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Сургалтууд (v2) | Promptly",
};

export default function V2CoursesPage() {
  const availableCourses = courses.filter((c) => c.status === "available");
  const expertCourse = courses.find((c) => c.status === "coming_soon")!;

  return (
    <div className="flex min-h-screen flex-col bg-[#fefffc]">
      <V2Header />

      <main className="flex-1">
        <section className="px-4 pb-16 pt-36 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              kicker="Сургалтууд"
              title="Өөрт тохирох түвшнээ сонго"
              description="Beginner сургалт AI-г анхнаас нь, Intermediate сургалт AI-г ажлын систем болгон хэрэгжүүлэхэд зориулагдсан."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {availableCourses.map((course) => (
                <CourseCard
                  key={course.slug}
                  course={{
                    ...course,
                    cta: { ...course.cta, target: `/v2${course.cta.target}` },
                  }}
                />
              ))}
            </div>
            <div className="mt-5">
              <ExpertTeaser
                course={{
                  ...expertCourse,
                  cta: { ...expertCourse.cta, target: `/v2${expertCourse.cta.target}` },
                }}
              />
            </div>
          </div>
        </section>

        <section className="border-t border-[#dee2de] bg-[#f9faf7] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title="Сургалтын хөтөлбөр" />
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

        <section id="register" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading
              kicker="Бүртгэл"
              title={registration.title}
              description="Доорх мэдээллийг бөглөнө үү. Promptly-ийн баг удахгүй холбогдож, сургалтын дэлгэрэнгүйг хүргэх болно."
            />
            <div className="card mt-10 p-6 sm:p-10">
              <RegistrationForm
                courses={availableCourses.map((c) => ({
                  value: c.slug,
                  label: c.name,
                }))}
              />
            </div>
            <p className="mt-6 text-center text-[15px] text-[#646464]">
              Байгууллагын сургалтын хүсэлт байвал{" "}
              <Link href="/v2/contact" className="font-medium text-[#41a1cf] hover:underline">
                холбоо барина уу
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <V2Footer />
    </div>
  );
}
