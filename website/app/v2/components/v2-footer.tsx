import Image from "next/image";
import Link from "next/link";
import { footerCols, site } from "@/app/data/content";

export function V2Footer() {
  return (
    <footer className="border-t border-[#dee2de] bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6">
        <p className="serif max-w-2xl text-3xl leading-[1.1] tracking-[-0.02em] text-[#2c2c2c] sm:text-4xl">
          {site.primaryMessage}
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-[1.5] text-[#646464]">
          {site.mission}
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-medium tracking-[-0.01em] text-[#646464]">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => {
                  const isV2Route = ["/courses", "/about", "/resources", "/contact"].some(
                    (r) => link.target === r || link.target.startsWith(`${r}/`)
                  );
                  const href = isV2Route
                    ? `/v2${link.target}`
                    : link.target === "/"
                      ? "/v2"
                      : link.target;
                  return (
                    <li key={link.label}>
                      <Link
                        href={href}
                        className="text-[15px] font-medium text-[#444141] transition-colors hover:text-[#171717]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-[#dee2de] pt-8">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Promptly лого"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-[15px] font-medium text-[#2c2c2c]">Promptly</span>
          </div>
          <p className="text-[13px] text-[#646464]">
            © 2026 Promptly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
