import { Inter } from "next/font/google";
import "./boost.css";

const inter = Inter({
  variable: "--font-boost",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

export default function V3Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`boost ${inter.variable}`}>{children}</div>;
}
