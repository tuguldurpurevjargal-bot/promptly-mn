import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";

export const metadata: Metadata = {
  title: "Refund policy",
  description: "Promptly-ийн буцан олголтын бодлого.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Буцан олголтын бодлого"
      description="Сургалтын төлбөрийг буцаан олгох нөхцөл ба процесс."
      sections={[
        {
          heading: "Буцан олголт авах нөхцөл",
          body: "[REFUND_ELIGIBILITY]",
        },
        {
          heading: "Буцан олголтын хугацаа",
          body: "[REFUND_TIMEFRAME]",
        },
        {
          heading: "Хүсэлт гаргах процесс",
          body: "[REFUND_PROCESS]",
        },
        {
          heading: "Холбоо барих",
          body: "[CONTACT_EMAIL]",
        },
      ]}
    />
  );
}
