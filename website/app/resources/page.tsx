import type { Metadata } from "next";
import { ResourcesBody } from "./resources-body";

export const metadata: Metadata = {
  title: "Контент ба нөөц",
  description:
    "Promptly-ийн үнэгүй контент, эхлэл багц болон нийгмийн сувгууд. AI-г үнэгүй суралцаж эхлээрэй.",
};

export default function ResourcesPage() {
  return <ResourcesBody />;
}
