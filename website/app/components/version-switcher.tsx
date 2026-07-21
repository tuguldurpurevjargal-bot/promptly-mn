"use client";

import Link from "next/link";

export function VersionSwitcher({
  to,
  label,
  variant,
}: {
  to: string;
  label: string;
  variant: "auros" | "neon";
}) {
  if (variant === "neon") {
    return (
      <Link
        href={to}
        className="fixed bottom-6 right-6 z-[60] rounded-full border border-[#303236] bg-[#151617] px-5 py-2.5 font-[family-name:var(--font-geistmono)] text-xs text-[#34d59a] transition-colors hover:border-[#34d59a]/60"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={to}
      className="fixed bottom-6 right-6 z-[60] rounded-full bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-[#012624] transition-transform hover:scale-105"
    >
      {label}
    </Link>
  );
}
