import type { Metadata } from "next";
import { CoursePage } from "@/app/components/course-page";

export const metadata: Metadata = {
  title: "Promptly Expert — Удахгүй",
  description:
    "AI систем, агент, optimization болон бизнесийн хэрэгжилтийн ахисан шатны сургалт. Хүлээлгийн жагсаалтад нэгдээрэй.",
};

export default function ExpertPage() {
  return <CoursePage slug="expert" />;
}
