import type { Metadata } from "next";
import { CoursePage } from "@/app/components/course-page";
import { coursePages } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Promptly Beginner — AI-г анхнаас нь зөв ойлго",
  description:
    "AI-ийн талаар бага мэдлэгтэй эсвэл хаанаас эхлэхээ мэдэхгүй хүмүүст зориулсан практик сургалт.",
};

export default function BeginnerPage() {
  return <CoursePage data={coursePages.beginner} />;
}
