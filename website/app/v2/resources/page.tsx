import type { Metadata } from "next";
import { FileText, ImageIcon } from "lucide-react";
import { V2Header } from "../components/v2-header";
import { V2Footer } from "../components/v2-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { LeadForm } from "@/app/components/lead-form";
import { PlaceholderTag } from "@/app/components/placeholder-tag";
import { leadMagnet, resourcesPreview, socials } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Контент ба нөөц (v2) | Promptly",
};

export default function V2ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fefffc]">
      <V2Header />

      <main className="flex-1">
        <section className="px-4 pb-16 pt-36 sm:px-6">
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
                <div key={item.title} className="card card-hover overflow-hidden">
                  <div className="flex h-44 items-center justify-center bg-[#f9faf7]">
                    <ImageIcon className="h-8 w-8 text-[#b4b8b4]" />
                  </div>
                  <div className="p-5">
                    <span className="text-[13px] font-medium text-[#41a1cf]">
                      {item.type}
                    </span>
                    <h3 className="mt-2 text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-[#2c2c2c]">
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
          <div className="mx-auto max-w-[1200px] rounded-3xl bg-[#0081c0] px-6 py-16 text-center sm:px-12">
            <FileText className="mx-auto h-9 w-9 text-white/90" />
            <h2 className="serif mt-5 text-4xl leading-[1.1] tracking-[-0.02em] text-white sm:text-[48px]">
              {leadMagnet.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.5] text-white/85">
              {leadMagnet.description}
            </p>
            <div className="mx-auto mt-9 max-w-2xl rounded-2xl bg-white p-4 sm:p-5">
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

      <V2Footer />
    </div>
  );
}
