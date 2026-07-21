import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geistmono",
  subsets: ["latin"],
});

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={geistMono.variable}>{children}</div>;
}
