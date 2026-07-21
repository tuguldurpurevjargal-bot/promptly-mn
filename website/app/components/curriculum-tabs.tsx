"use client";

import Link from "next/link";
import { useState } from "react";
import { BookOpen } from "lucide-react";

export function CurriculumTabs({
  tabs,
}: {
  tabs: { label: string; target: string; ctaLabel: string; modules: string[] }[];
}) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      <div className="mx-auto flex w-fit rounded-full border border-[#e6eceb] bg-[#f4f7f6] p-1">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              active === i
                ? "bg-white text-[#0a1a1a] shadow-sm"
                : "text-[#6b8b86] hover:text-[#0a1a1a]"
            }`}
            aria-pressed={active === i}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="card mx-auto mt-8 max-w-3xl p-6 sm:p-10">
        <ul className="space-y-4">
          {tab.modules.map((module) => (
            <li key={module} className="flex items-start gap-3">
              <BookOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00b8a8]" />
              <span className="text-[#0a1a1a]">{module}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-[#e6eceb] pt-6">
          <Link href={tab.target} className="btn-primary">
            {tab.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
