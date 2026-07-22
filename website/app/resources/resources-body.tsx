"use client";

import { FileText, ImageIcon } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { LeadForm } from "@/app/components/lead-form";
import { PlaceholderTag } from "@/app/components/placeholder-tag";

export function ResourcesBody() {
  const { t, locale } = useLanguage();
  const mn = locale === "mn";

  return (
    <div className="flex min-h-screen flex-col bg-[#002025]">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              kicker={mn ? "Контент" : "Content"}
              title={mn ? "Үнэгүй суралцаж эхлээрэй" : "Start learning for free"}
              description={
                mn
                  ? "Promptly-ийн үнэгүй контент, гарын авлага болон нийгмийн сувгууд."
                  : "Promptly's free content, guides, and social channels."
              }
            />
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-5 sm:grid-cols-3">
              {t.resourcesPreview.items.map((item) => (
                <div key={item.title} className="card overflow-hidden">
                  <div className="flex h-44 items-center justify-center bg-[#f5f7f6]">
                    <ImageIcon className="h-8 w-8 text-[#6b8b86]" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#00b8a8]">
                      {item.type}
                    </span>
                    <h3 className="mt-2 font-semibold leading-snug text-[#fffffa]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {t.socials.map((social) => (
                <PlaceholderTag key={social.label} value={social.target} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6">
          <div className="tinted-panel mx-auto max-w-[1200px] px-6 py-14 text-center sm:px-12">
            <FileText className="mx-auto h-10 w-10 text-[#79fa4b]" />
            <h2 className="mt-4 text-3xl font-light tracking-tight text-[#fffffa] sm:text-4xl">
              {t.leadMagnet.headline}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#7d8f92]">
              {t.leadMagnet.description}
            </p>
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white/80 p-4 sm:p-5">
              <LeadForm
                cta={t.leadMagnet.cta}
                success={t.leadMagnet.success}
                namePlaceholder={t.leadMagnet.namePlaceholder}
                emailPlaceholder={t.leadMagnet.emailPlaceholder}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
