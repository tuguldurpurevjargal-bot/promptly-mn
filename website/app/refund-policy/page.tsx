import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";

export const metadata: Metadata = {
  title: "Refund policy",
  description: "Promptly-ийн буцан олголтын бодлого.",
};

export default function RefundPolicyPage() {
  return <LegalPage page="refund" />;
}
