import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Course } from "@/app/data/content";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card flex flex-col p-6 transition-shadow hover:shadow-md sm:p-8">
      <span className="kicker">
        {course.slug === "beginner"
          ? "Анхан шат"
          : course.slug === "intermediate"
            ? "Дунд шат"
            : "Ахисан шат"}
      </span>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0a1a1a]">
        {course.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-[#00b8a8]">{course.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#40514e]">
        {course.description}
      </p>

      {course.bestFor && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6b8b86]">
            Хэнд тохирох вэ
          </p>
          <ul className="mt-3 space-y-2">
            {course.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#40514e]">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00b8a8]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="mt-5 flex-1 space-y-1.5 border-t border-[#e6eceb] pt-5">
        {course.topics.map((topic) => (
          <li key={topic} className="flex items-center gap-2 text-sm text-[#40514e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00e5d4]" />
            {topic}
          </li>
        ))}
      </ul>

      <Link
        href={course.cta.target}
        className="btn-primary mt-6 w-full justify-center"
      >
        {course.cta.label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function ExpertTeaser({ course }: { course: Course }) {
  return (
    <article className="card flex flex-col items-start gap-4 border-dashed p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-[#0a1a1a]">
            {course.name}
          </h3>
          <span className="rounded-full bg-[#f4f7f6] px-3 py-1 text-xs font-semibold text-[#6b8b86]">
            Удахгүй
          </span>
        </div>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#40514e]">
          {course.description}
        </p>
      </div>
      <Link href={course.cta.target} className="btn-secondary whitespace-nowrap">
        {course.cta.label}
      </Link>
    </article>
  );
}
