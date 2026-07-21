import type { Metadata } from "next";
import { Link2, Sparkles, Target, User } from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { PlaceholderTag } from "@/app/components/placeholder-tag";
import { founders, site, whyPromptly } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Бидний тухай",
  description:
    "Promptly-ийн алсын хараа, эрхэм зорилго болон багийн тухай. Монголын практик AI боловсролын брэнд.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              kicker="Бидний тухай"
              title="Хүн бүрт AI."
              description="Promptly нь Монгол хэл дээрх практик AI боловсролын брэнд юм."
            />
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <Target className="h-8 w-8 text-[#00b8a8]" />
              <h2 className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b8b86]">
                Алсын хараа
              </h2>
              <p className="mt-3 text-xl font-medium leading-relaxed text-[#0a1a1a]">
                {site.vision}
              </p>
            </div>
            <div className="card p-8 sm:p-10">
              <Sparkles className="h-8 w-8 text-[#00b8a8]" />
              <h2 className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b8b86]">
                Эрхэм зорилго
              </h2>
              <p className="mt-3 text-xl font-medium leading-relaxed text-[#0a1a1a]">
                {site.mission}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f7f6] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title="Бид юунд анхаардаг вэ?" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyPromptly.items.map((item) => (
                <div key={item.title} className="card p-6">
                  <Sparkles className="h-6 w-6 text-[#00b8a8]" />
                  <h3 className="mt-4 font-semibold text-[#0a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#40514e]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              title={founders.headline}
              description={founders.description}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {founders.members.map((member) => (
                <div
                  key={member.name}
                  className="card flex items-start gap-5 p-6 sm:p-8"
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#f4f7f6]">
                    <User className="h-8 w-8 text-[#6b8b86]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1a1a]">
                      <PlaceholderTag value={member.name} />
                    </h3>
                    <p className="mt-1 text-sm text-[#00b8a8]">
                      <PlaceholderTag value={member.role} />
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#40514e]">
                      <PlaceholderTag value={member.bio} />
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-[#6b8b86]">
                      <Link2 className="h-4 w-4" />
                      <PlaceholderTag value={member.linkedin} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
