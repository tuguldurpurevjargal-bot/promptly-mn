import type { Metadata } from "next";
import { CoursesBody } from "./courses-body";

export const metadata: Metadata = {
  title: "Сургалтууд",
  description:
    "Promptly Beginner болон Intermediate сургалтуудтай танилцаж, өөрт тохирох түвшнээ сонго. Expert сургалт удахгүй.",
};

export default function CoursesPage() {
  return <CoursesBody />;
}
