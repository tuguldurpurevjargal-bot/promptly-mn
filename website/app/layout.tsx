import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./boost.css";
import "./light.css";
import { ClientProviders } from "./components/client-providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://website-rho-wheat-79.vercel.app"),
  title: {
    default: "Promptly — Хүн бүрт AI | Монгол хэл дээрх практик AI сургалт",
    template: "%s | Promptly",
  },
  description:
    "AI-г ойлгож, зөв ашиглан өдөр тутмын ажил, бүтээмж болон бүтээлч үйл явцаа сайжруулах практик сургалт. Beginner болон Intermediate түвшин.",
  openGraph: {
    title: "Promptly — Хүн бүрт AI",
    description:
      "Монгол хэл дээрх практик AI сургалт. AI-г ойлгож, зөв ашиглан ажил, бүтээмжээ сайжруулаарай.",
    type: "website",
    locale: "mn_MN",
    siteName: "Promptly",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <body className="boost min-h-full flex flex-col">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
