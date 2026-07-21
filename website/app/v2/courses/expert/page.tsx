import type { Metadata } from "next";
import { V2Header } from "../../components/v2-header";
import { V2Footer } from "../../components/v2-footer";
import { CoursePage } from "@/app/components/course-page";
import { coursePages } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Promptly Expert (v2) — Удахгүй",
};

export default function V2ExpertPage() {
  return (
    <>
      <V2Header />
      <CoursePage data={coursePages.expert} bare basePath="/v2" />
      <V2Footer />
    </>
  );
}
