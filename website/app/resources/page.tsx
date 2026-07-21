import type { Metadata } from "next";
import { FileText, ImageIcon } from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { LeadForm } from "@/app/components/lead-form";
import { PlaceholderTag } from "@/app/components/placeholder-tag";
import { leadMagnet, resourcesPreview, socials } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Контент ба нөөц",
  description:
    "Promptly-ийн үнэгүй контент, starter pack болон нийгмийн сувгууд. AI-г үнэгүй суралцаж эхлээрэй.",
};

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              kicker="Контент"
              title="Үнэгүй суралцаж эхлээрэй"
              description="Promptly-ийн үнэгүй контент, гарын авлага болон нийгмийн сувгууд."
            />
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-5 sm:grid-cols-3">
              {resourcesPreview.items.map((item) => (
                <div key={item.title} className="card overflow-hidden">
                  <div className="flex h-44 items-center justify-center bg-[#f4f7f6]">
                    <ImageIcon className="h-8 w-8 text-[#6b8b86]" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#00b8a8]">
                      {item.type}
                    </span>
                    <h3 className="mt-2 font-semibold leading-snug text-[#0a1a1a]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {socials.map((social) => (
                <PlaceholderTag key={social.label} value={social.target} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6">
          <div className="brand-gradient mx-auto max-w-[1200px] rounded-3xl px-6 py-14 text-center sm:px-12">
            <FileText className="mx-auto h-10 w-10 text-[#0a1a1a]" />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0a1a1a] sm:text-4xl">
              {leadMagnet.headline}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#0a1a1a]/80">
              {leadMagnet.description}
            </p>
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white/70 p-4 backdrop-blur-sm sm:p-5">
              <LeadForm
                cta={leadMagnet.cta}
                success={leadMagnet.success}
                namePlaceholder={leadMagnet.namePlaceholder}
                emailPlaceholder={leadMagnet.emailPlaceholder}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
