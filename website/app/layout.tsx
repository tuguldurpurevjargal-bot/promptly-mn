import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { LanguageProvider } from "./i18n/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Promptly — AI Education for Mongolia",
  description:
    "Make artificial intelligence practical, understandable, and accessible for everyone through education, tools, and community.",
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
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
