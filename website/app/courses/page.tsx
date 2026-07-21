import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { CourseCard, ExpertTeaser } from "@/app/components/course-card";
import { CurriculumTabs } from "@/app/components/curriculum-tabs";
import { RegistrationForm } from "@/app/components/registration-form";
import { courses, curriculum, registration } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Сургалтууд",
  description:
    "Promptly Beginner болон Intermediate сургалтуудтай танилцаж, өөрт тохирох түвшнээ сонго. Expert сургалт удахгүй.",
};

export default function CoursesPage() {
  const availableCourses = courses.filter((c) => c.status === "available");
  const expertCourse = courses.find((c) => c.status === "coming_soon")!;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              kicker="Сургалтууд"
              title="Өөрт тохирох түвшнээ сонго"
              description="Beginner сургалт AI-г анхнаас нь, Intermediate сургалт AI-г ажлын систем болгон хэрэгжүүлэхэд зориулагдсан."
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
            <SectionHeading title="Сургалтын хөтөлбөр" />
            <div className="mt-12">
              <CurriculumTabs tabs={curriculum.tabs} />
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
            <p className="mt-6 text-center text-sm text-[#6b8b86]">
              Байгууллагын сургалтын хүсэлт байвал{" "}
              <Link href="/contact" className="font-medium text-[#00b8a8] hover:underline">
                холбоо барина уу
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
