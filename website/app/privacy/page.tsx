import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Promptly-ийн хувийн мэдээлэл хамгаалах бодлого.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Хувийн мэдээлэл хамгаалах бодлого"
      description="Promptly нь таны хувийн мэдээллийг хэрхэн цуглуулж, ашиглаж, хамгаалдаг талаар энд танилцуулна."
      sections={[
        {
          heading: "Цуглуулдаг мэдээлэл",
          body: "[PRIVACY_DATA_COLLECTION]",
        },
        {
          heading: "Мэдээллийн ашиглалт",
          body: "[PRIVACY_DATA_USAGE]",
        },
        {
          heading: "Мэдээлэл хуваалцах",
          body: "[PRIVACY_DATA_SHARING]",
        },
        {
          heading: "Таны эрх",
          body: "[PRIVACY_USER_RIGHTS]",
        },
        {
          heading: "Холбоо барих",
          body: "[CONTACT_EMAIL]",
        },
      ]}
    />
  );
}
