import type { Metadata } from "next";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { PlaceholderTag } from "@/app/components/placeholder-tag";

export function LegalPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#002025]">
      <SiteHeader />
      <main className="flex-1">
        <section className="px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading kicker="Legal" title={title} description={description} align="left" />
            <div className="mt-12 space-y-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-lg font-semibold text-[#101614]">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4a5a55]">
                    {section.body.startsWith("[") ? (
                      <PlaceholderTag value={section.body} />
                    ) : (
                      section.body
                    )}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-sm text-[#6b8b86]">
              Сүүлийн шинэчлэл: <PlaceholderTag value="[LAST_UPDATED]" />
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export function legalMetadata(title: string, description: string): Metadata {
  return { title, description };
}
