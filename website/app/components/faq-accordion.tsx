"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PlaceholderTag } from "./placeholder-tag";

export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#e6eceb] rounded-2xl border border-[#e6eceb] bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const isPlaceholder = item.answer.startsWith("[");
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-[#0a1a1a]">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-[#6b8b86] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-[#40514e]">
                  {isPlaceholder ? (
                    <PlaceholderTag value={item.answer} />
                  ) : (
                    item.answer
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
