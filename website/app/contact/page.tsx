import type { Metadata } from "next";
import { ContactBody } from "./contact-body";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description: "Сургалт, байгууллагын хэрэгцээ болон бусад асуултын талаар Promptly-тэй холбогдоорой.",
};

export default function ContactPage() {
  return <ContactBody />;
}
