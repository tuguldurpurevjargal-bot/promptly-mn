"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";
import { LanguageProvider } from "@/app/i18n/context";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
