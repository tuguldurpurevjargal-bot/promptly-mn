import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "Promptly-ийн үйлчилгээний нөхцөл.",
};

export default function TermsPage() {
  return <LegalPage page="terms" />;
}
