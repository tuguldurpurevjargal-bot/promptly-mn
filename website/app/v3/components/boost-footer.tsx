import Image from "next/image";
import Link from "next/link";
import { footerCols } from "@/app/data/content";

export function BoostFooter() {
  return (
    <footer className="border-t border-[#244348]">
      <div className="mx-auto max-w-[1200px] px-5 py-20">
        <p className="max-w-2xl text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[#fffffa] sm:text-4xl">
          Хүн бүрт <span className="lime-underline">AI.</span>
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.35em] text-[#79fa4b]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.target}
                      className="text-sm text-[#9eaeb0] transition-colors hover:text-[#fffffa]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-[#244348] pt-8">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Promptly лого" width={22} height={22} className="h-5 w-5" />
            <span className="text-sm font-medium text-[#fffffa]">Promptly</span>
          </div>
          <p className="text-xs text-[#7d8f92]">© 2026 Promptly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
