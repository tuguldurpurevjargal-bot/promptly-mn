"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import * as mnContent from "@/app/data/content";
import * as enContent from "@/app/data/en-content";
import * as mnQuiz from "@/app/data/quiz";
import * as enQuiz from "@/app/data/quiz-en";

export type Locale = "mn" | "en";

const contentDict = { mn: mnContent, en: enContent };
const quizDict = { mn: mnQuiz, en: enQuiz };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof mnContent;
  quiz: typeof mnQuiz;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("mn");

  useEffect(() => {
    const saved = window.localStorage.getItem("promptly-locale");
    if (saved === "en" || saved === "mn") setLocaleState(saved);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("promptly-locale", next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: contentDict[locale], quiz: quizDict[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
