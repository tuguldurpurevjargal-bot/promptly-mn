"use client";

import { Mail } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { ContactForm } from "@/app/components/contact-form";
import { PlaceholderTag } from "@/app/components/placeholder-tag";

export function ContactBody() {
  const { t, locale } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-[#002025]">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeading
                kicker={locale === "mn" ? "Холбоо барих" : "Contact"}
                title={t.contact.headline}
                description={t.contact.description}
                align="left"
              />
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#00b8a8]" />
                  <PlaceholderTag value={t.contact.email} />
                </div>
                <div className="flex flex-wrap gap-3">
                  {t.socials.map((social) => (
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
