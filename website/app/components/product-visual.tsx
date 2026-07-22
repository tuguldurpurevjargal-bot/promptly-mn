"use client";

import Link from "next/link";
import { GraduationCap, Layers, Rocket, Sparkles } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0b3222] to-[#1a5c35] text-[#79fa4b]">
      {children}
    </div>
  );
}

export function ProductVisual() {
  const { locale } = useLanguage();
  const mn = locale === "mn";

  const tags = [
    { label: "Beginner", icon: <GraduationCap className="h-5 w-5" /> },
    { label: "Intermediate", icon: <Layers className="h-5 w-5" /> },
    { label: "Expert", icon: <Rocket className="h-5 w-5" /> },
  ];

  return (
    <div className="anim-float relative">
      <div
        className="rounded-[30px] border border-[#244348] bg-[rgba(36,67,72,0.5)] p-6 backdrop-blur-md sm:p-8"
        style={{ boxShadow: "0 0 60px rgba(0, 32, 37, 0.4)" }}
      >
        <div className="space-y-2.5">
          {tags.map((tag) => (
            <div
              key={tag.label}
              className="flex items-center gap-3 rounded-[10px] border border-[#244348] bg-[#002025] px-4 py-2.5"
            >
              <span className="text-[#54696c]">{tag.icon}</span>
              <span className="text-sm text-[#7d8f92]">{tag.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[16px] border border-[#244348] bg-[#05333a] p-5">
          <div className="flex items-center gap-3">
            <IconBadge>
              <Sparkles className="h-5 w-5" />
            </IconBadge>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#79fa4b]">
                {mn ? "Таны түвшин" : "Your level"}
              </p>
              <p className="mt-0.5 text-base font-medium text-[#fffffa]">
                {mn ? "Тодорхойлъё" : "Let's find it"}
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-[#30d7f1] to-[#79fa4b] opacity-60" />
            <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-[#30d7f1] to-[#79fa4b] opacity-35" />
            <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-[#30d7f1] to-[#79fa4b] opacity-20" />
          </div>

          <Link
            href="/test"
            className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-[#fffffa]"
            style={{
              background: "linear-gradient(277.33deg, #fce344 -2.48%, #79fa4b 47.21%, #30d7f1 93.62%)",
            }}
          >
            {mn ? "Тест өгөх" : "Take the test"}
          </Link>
        </div>
      </div>
    </div>
  );
}
