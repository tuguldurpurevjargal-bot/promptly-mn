import Image from "next/image";
import Link from "next/link";
import { footerCols, site } from "@/app/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e5ebe8] bg-[#f5f7f6]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="Promptly лого"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-lg font-semibold text-[#101614]">Promptly</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b8b86]">
              {site.mission}
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6b8b86]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.target}
                      className="text-sm text-[#4a5a55] transition-colors hover:text-[#101614]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#e5ebe8] pt-8">
          <p className="text-sm text-[#6b8b86]">
            © 2026 Promptly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
