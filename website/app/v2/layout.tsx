import { Playfair_Display } from "next/font/google";
import "./journal.css";

const playfair = Playfair_Display({
  variable: "--font-journal-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`journal ${playfair.variable}`}>{children}</div>;
}
