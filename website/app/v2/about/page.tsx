import type { Metadata } from "next";
import { Link2, Sparkles, Target, User } from "lucide-react";
import { V2Header } from "../components/v2-header";
import { V2Footer } from "../components/v2-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { PlaceholderTag } from "@/app/components/placeholder-tag";
import { founders, site, whyPromptly } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Бидний тухай (v2) | Promptly",
};

export default function V2AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fefffc]">
      <V2Header />

      <main className="flex-1">
        <section className="px-4 pb-16 pt-36 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              kicker="Бидний тухай"
              title="Хүн бүрт AI."
              description="Promptly нь Монгол хэл дээрх практик AI боловсролын брэнд юм."
            />
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <Target className="h-7 w-7 text-[#41a1cf]" />
              <h2 className="mt-4 text-[13px] font-medium text-[#646464]">
                Алсын хараа
              </h2>
              <p className="serif mt-3 text-[27px] leading-[1.3] tracking-[-0.02em] text-[#2c2c2c]">
                {site.vision}
              </p>
            </div>
            <div className="card p-8 sm:p-10">
              <Sparkles className="h-7 w-7 text-[#41a1cf]" />
              <h2 className="mt-4 text-[13px] font-medium text-[#646464]">
                Эрхэм зорилго
              </h2>
              <p className="serif mt-3 text-[27px] leading-[1.3] tracking-[-0.02em] text-[#2c2c2c]">
                {site.mission}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#dee2de] bg-[#f9faf7] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading title="Бид юунд анхаардаг вэ?" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyPromptly.items.map((item) => (
                <div key={item.title} className="card card-hover p-6">
                  <Sparkles className="h-5 w-5 text-[#41a1cf]" />
                  <h3 className="mt-4 text-[18px] font-medium tracking-[-0.01em] text-[#2c2c2c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-[#646464]">
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
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {founders.members.map((member) => (
                <div key={member.name} className="card flex items-start gap-5 p-6 sm:p-8">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#f9faf7]">
                    <User className="h-8 w-8 text-[#b4b8b4]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-[#2c2c2c]">
                      <PlaceholderTag value={member.name} />
                    </h3>
                    <p className="mt-1 text-[13px] text-[#41a1cf]">
                      <PlaceholderTag value={member.role} />
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.5] text-[#646464]">
                      <PlaceholderTag value={member.bio} />
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-[13px] text-[#646464]">
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

      <V2Footer />
    </div>
  );
}
