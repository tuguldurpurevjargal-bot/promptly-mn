import type { Metadata } from "next";
import { V2Header } from "../../components/v2-header";
import { V2Footer } from "../../components/v2-footer";
import { CoursePage } from "@/app/components/course-page";
import { coursePages } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Promptly Intermediate (v2)",
};

export default function V2IntermediatePage() {
  return (
    <>
      <V2Header />
      <CoursePage data={coursePages.intermediate} bare basePath="/v2" />
      <V2Footer />
    </>
  );
}
