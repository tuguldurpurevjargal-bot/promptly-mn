import type { Metadata } from "next";
import { AboutBody } from "./about-body";

export const metadata: Metadata = {
  title: "Бидний тухай",
  description:
    "Promptly-ийн алсын хараа, эрхэм зорилго болон багийн тухай. Монголын практик AI боловсролын брэнд.",
};

export default function AboutPage() {
  return <AboutBody />;
}
