import type { Metadata } from "next";
import { CoursePage } from "@/app/components/course-page";

export const metadata: Metadata = {
  title: "Promptly Intermediate — AI-г ажлын системийн нэг хэсэг болго",
  description:
    "Advanced prompting, workflow болон automation сурах хүмүүст зориулсан дунд шатны практик сургалт.",
};

export default function IntermediatePage() {
  return <CoursePage slug="intermediate" />;
}
