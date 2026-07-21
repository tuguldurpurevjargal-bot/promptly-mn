import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "Promptly-ийн үйлчилгээний нөхцөл.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Үйлчилгээний нөхцөл"
      description="Promptly-ийн вэбсайт болон сургалтыг ашиглах үндсэн нөхцөлүүд."
      sections={[
        {
          heading: "Үйлчилгээний тодорхойлолт",
          body: "[TERMS_SERVICE_DESCRIPTION]",
        },
        {
          heading: "Бүртгэл ба төлбөр",
          body: "[TERMS_PAYMENT]",
        },
        {
          heading: "Агуулгын эзэмшил",
          body: "[TERMS_CONTENT_OWNERSHIP]",
        },
        {
          heading: "Хариуцлагын хязгаарлалт",
          body: "[TERMS_LIABILITY]",
        },
        {
          heading: "Холбоо барих",
          body: "[CONTACT_EMAIL]",
        },
      ]}
    />
  );
}
