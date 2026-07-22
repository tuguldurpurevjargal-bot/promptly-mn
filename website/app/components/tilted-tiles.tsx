"use client";

import { BookOpen, Globe2, RefreshCw, Wrench } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";

const icons = [
  <Globe2 key="0" className="h-4 w-4" />,
  <Wrench key="1" className="h-4 w-4" />,
  <RefreshCw key="2" className="h-4 w-4" />,
  <BookOpen key="3" className="h-4 w-4" />,
];

export function TiltedTiles() {
  const { t } = useLanguage();

  return (
    <div
      className="rounded-[30px] border border-[#244348] p-8"
      style={{ boxShadow: "0 0 0 1px #244348, inset 0 0 80px rgba(0, 32, 37, 0.6)" }}
    >
      <div className="grid rotate-[-3deg] grid-cols-2 gap-4">
        {t.whyPromptly.items.map((item, i) => (
          <div
            key={item.title}
            className={`rounded-2xl border border-[#244348] bg-[#05333a] p-4 ${
              i % 2 === 1 ? "translate-y-3" : ""
            }`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#0b3222] to-[#1a5c35] text-[#79fa4b]">
              {icons[i % icons.length]}
            </div>
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#30d7f1] to-[#79fa4b] opacity-50" />
              <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-[#30d7f1] to-[#79fa4b] opacity-25" />
            </div>
            <p className="mt-3 text-xs font-medium text-[#b7c6c9]">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
