import type { Metadata } from "next";
import { HomeBody } from "./home-body";

export const metadata: Metadata = {
  title: "Promptly — Хүн бүрт AI | Монгол хэл дээрх практик AI сургалт",
};

export default function HomePage() {
  return <HomeBody />;
}
