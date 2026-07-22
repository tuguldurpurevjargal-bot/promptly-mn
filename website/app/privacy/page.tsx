import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Promptly-ийн хувийн мэдээлэл хамгаалах бодлого.",
};

export default function PrivacyPage() {
  return <LegalPage page="privacy" />;
}
