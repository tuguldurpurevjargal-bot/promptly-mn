import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { LanguageProvider } from "./i18n/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
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
      className={`${inter.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
