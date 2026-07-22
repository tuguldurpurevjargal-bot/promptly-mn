"use client";

import { useLanguage } from "@/app/i18n/context";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { SectionHeading } from "@/app/components/section-heading";
import { PlaceholderTag } from "@/app/components/placeholder-tag";

type LegalKey = "privacy" | "terms" | "refund";

const sectionTitles: Record<LegalKey, { mn: string[]; en: string[] }> = {
  privacy: {
    mn: ["Цуглуулдаг мэдээлэл", "Мэдээллийн ашиглалт", "Мэдээлэл хуваалцах", "Таны эрх", "Холбоо барих"],
    en: ["Data we collect", "How we use data", "Data sharing", "Your rights", "Contact"],
  },
  terms: {
    mn: ["Үйлчилгээний тодорхойлолт", "Бүртгэл ба төлбөр", "Агуулгын эзэмшил", "Хариуцлагын хязгаарлалт", "Холбоо барих"],
    en: ["Service description", "Registration and payment", "Content ownership", "Limitation of liability", "Contact"],
  },
  refund: {
    mn: ["Буцан олголт авах нөхцөл", "Буцан олголтын хугацаа", "Хүсэлт гаргах процесс", "Холбоо барих"],
    en: ["Refund eligibility", "Refund timeframe", "How to request", "Contact"],
  },
};

const sectionPlaceholders: Record<LegalKey, string[]> = {
  privacy: [
    "[PRIVACY_DATA_COLLECTION]",
    "[PRIVACY_DATA_USAGE]",
    "[PRIVACY_DATA_SHARING]",
    "[PRIVACY_USER_RIGHTS]",
    "[CONTACT_EMAIL]",
  ],
  terms: [
    "[TERMS_SERVICE_DESCRIPTION]",
    "[TERMS_PAYMENT]",
    "[TERMS_CONTENT_OWNERSHIP]",
    "[TERMS_LIABILITY]",
    "[CONTACT_EMAIL]",
  ],
  refund: [
    "[REFUND_ELIGIBILITY]",
    "[REFUND_TIMEFRAME]",
    "[REFUND_PROCESS]",
    "[CONTACT_EMAIL]",
  ],
};

export function LegalPage({ page }: { page: LegalKey }) {
  const { t, locale } = useLanguage();
  const mn = locale === "mn";
  const info = t.legal[page];
  const titles = sectionTitles[page][locale];
  const placeholders = sectionPlaceholders[page];

  return (
    <div className="flex min-h-screen flex-col bg-[#002025]">
      <SiteHeader />
      <main className="flex-1">
        <section className="px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading kicker="Legal" title={info.title} description={info.description} align="left" />
            <div className="mt-12 space-y-10">
              {titles.map((heading, i) => (
                <div key={heading}>
                  <h2 className="text-lg font-semibold text-[#fffffa]">{heading}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#7d8f92]">
                    <PlaceholderTag value={placeholders[i]} />
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-sm text-[#6b8b86]">
              {mn ? "Сүүлийн шинэчлэл: " : "Last updated: "}
              <PlaceholderTag value="[LAST_UPDATED]" />
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
