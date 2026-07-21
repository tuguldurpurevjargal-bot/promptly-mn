import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { ContactForm } from "@/app/components/contact-form";
import { PlaceholderTag } from "@/app/components/placeholder-tag";
import { contact, socials } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description: "Сургалт, байгууллагын хэрэгцээ болон бусад асуултын талаар Promptly-тэй холбогдоорой.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeading
                kicker="Холбоо барих"
                title={contact.headline}
                description={contact.description}
                align="left"
              />
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#00b8a8]" />
                  <PlaceholderTag value={contact.email} />
                </div>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <PlaceholderTag key={social.label} value={social.target} />
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
