import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { QuizApp } from "@/app/components/quiz-app";

export const metadata: Metadata = {
  title: "AI хэрэглээний түвшнээ тодорхойлох",
  description:
    "11 асуулт, 3 минут — AI хэрэглээний одоогийн түвшин, давуу тал болон хөгжүүлэх боломжоо тодорхойлж, танд тохирох Promptly сургалтыг олоорой.",
};

export default function TestPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#002025]">
      <SiteHeader />

      <main className="flex-1">
        <section className="px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
          <div className="mx-auto max-w-[1200px]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#9eaeb0] transition-colors hover:text-[#fffffa]"
            >
              <ArrowLeft className="h-4 w-4" />
              Нүүр хуудас
            </Link>
            <div className="mt-8">
              <QuizApp />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
