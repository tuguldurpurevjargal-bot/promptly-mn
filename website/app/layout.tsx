import type { Metadata } from "next";
import { Arimo, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { LanguageProvider } from "./i18n/context";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
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
      className={`${arimo.variable} ${roboto.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0a1a1a] dark:bg-[#071414] dark:text-white">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
