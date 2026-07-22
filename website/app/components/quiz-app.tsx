"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  RotateCcw,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/app/i18n/context";
import type { QuizOption, QuizQuestion } from "@/app/data/quiz";

type Stage = "intro" | "quiz" | "results";

interface ShuffledQuestion extends QuizQuestion {
  shuffledOptions: QuizOption[];
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const ui = {
  mn: {
    start: "Тест эхлүүлэх",
    question: "Асуулт",
    previous: "Өмнөх",
    next: "Дараах",
    seeResults: "Үр дүн харах",
    yourResult: "Таны үр дүн",
    breakdown: "Чиглэл бүрийн задаргаа",
    strengths: "Давуу тал",
    growth: "Хөгжүүлэх боломж",
    nextSteps: "Танд тохирох дараагийн алхам",
    recommendedCourse: "Санал болгох сургалт",
    restart: "Дахин тестлэх",
    questionsChip: "асуулт",
    minutesChip: "минут",
  },
  en: {
    start: "Start the test",
    question: "Question",
    previous: "Previous",
    next: "Next",
    seeResults: "See results",
    yourResult: "Your result",
    breakdown: "Breakdown by dimension",
    strengths: "Strengths",
    growth: "Growth opportunities",
    nextSteps: "Your next steps",
    recommendedCourse: "Recommended course",
    restart: "Retake the test",
    questionsChip: "questions",
    minutesChip: "minutes",
  },
};

export function QuizApp() {
  const { quiz, locale } = useLanguage();
  const L = ui[locale];
  const { questions, quizMeta, ratingBands, resultLevels, dimensions, dimensionFeedback } = quiz;

  const [stage, setStage] = useState<Stage>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<ShuffledQuestion[]>([]);

  const start = () => {
    setShuffledQuestions(
      questions.map((q) => ({ ...q, shuffledOptions: shuffle(q.options) }))
    );
    setAnswers({});
    setCurrent(0);
    setStage("quiz");
  };

  const results = useMemo(() => {
    if (stage !== "results") return null;

    let total = 0;
    const perDimension: Record<string, number> = {};
    questions.forEach((q) => {
      const chosenId = answers[q.id];
      const opt = q.options.find((o) => o.id === chosenId);
      const score = opt?.score ?? 0;
      total += score;
      perDimension[q.dimension] = (perDimension[q.dimension] ?? 0) + score;
    });

    const bandFor = (pct: number) =>
      ratingBands.find((b) => pct >= b.min && pct <= b.max) ?? ratingBands[0];

    const dimResults = dimensions.map((d) => {
      const earned = perDimension[d.id] ?? 0;
      const pct = Math.round((earned / d.maximumScore) * 100);
      const band = bandFor(pct);
      return {
        ...d,
        earned,
        pct,
        bandCode: band.code,
        bandLabel: band.label,
        feedback: dimensionFeedback[d.id]?.[band.code] ?? "",
      };
    });

    const level =
      resultLevels.find((l) => total >= l.min && total <= l.max) ?? resultLevels[0];

    const sortedDesc = [...dimResults].sort((a, b) => b.pct - a.pct);
    const strengths = sortedDesc.filter((d) => d.pct >= 70).slice(0, 2);
    if (strengths.length === 0) strengths.push(sortedDesc[0]);

    const growth = [...dimResults].sort((a, b) => a.pct - b.pct).slice(0, 2);

    return { total, dimResults, level, strengths, growth };
  }, [stage, answers, questions, dimensions, ratingBands, resultLevels, dimensionFeedback]);

  const finish = () => setStage("results");

  if (stage === "intro") {
    return (
      <div className="card mx-auto max-w-2xl p-6 text-center sm:p-12">
        <ClipboardList className="mx-auto h-10 w-10 text-[#79fa4b]" />
        <h1 className="mt-5 text-3xl font-light tracking-tight text-[#fffffa] sm:text-4xl">
          {quizMeta.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#7d8f92]">
          {quizMeta.instructions}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#244348] bg-[#002025] px-4 py-1.5 text-sm font-medium text-[#9eaeb0]">
            <ClipboardList className="h-4 w-4 text-[#79fa4b]" />
            {quizMeta.questionCount} {L.questionsChip}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#244348] bg-[#002025] px-4 py-1.5 text-sm font-medium text-[#9eaeb0]">
            <Clock className="h-4 w-4 text-[#79fa4b]" />
            {quizMeta.durationMinutes} {L.minutesChip}
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[#9eaeb0]">
          {quizMeta.disclaimer}
        </p>

        <button onClick={start} className="btn-primary mt-8">
          {L.start}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (stage === "quiz") {
    const q = shuffledQuestions[current];
    const selected = answers[q.id];
    const isLast = current === shuffledQuestions.length - 1;
    const progress = Math.round(((current + 1) / shuffledQuestions.length) * 100);

    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm font-medium text-[#9eaeb0]">
            <span>
              {L.question} {current + 1} / {shuffledQuestions.length}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#244348]">
            <div
              className="h-full rounded-full bg-[#79fa4b] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="card p-6 sm:p-10">
          <h2 className="text-xl font-medium leading-snug text-[#fffffa] sm:text-2xl">
            {q.question}
          </h2>

          <div className="mt-7 space-y-3">
            {q.shuffledOptions.map((opt) => {
              const isSelected = selected === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                  className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                    isSelected
                      ? "border-[#79fa4b] bg-[#79fa4b]/10"
                      : "border-[#244348] bg-[rgba(36,67,72,0.5)] hover:border-[#79fa4b]/50"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isSelected ? "border-[#79fa4b] bg-[#79fa4b]" : "border-[#455c60]"
                    }`}
                  >
                    {isSelected && (
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#fffffa" }}
                      />
                    )}
                  </span>
                  <span className="text-sm leading-relaxed text-[#fffffa] sm:text-base">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="btn-secondary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            {L.previous}
          </button>

          {isLast ? (
            <button
              onClick={finish}
              disabled={!selected}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              {L.seeResults}
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              disabled={!selected}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              {L.next}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  const r = results!;
  const { level } = r;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="card p-6 text-center sm:p-12">
        <p className="kicker">{L.yourResult}</p>
        <div className="mt-4 text-6xl font-light tracking-tight text-[#fffffa] sm:text-7xl">
          {r.total}
          <span className="text-2xl font-light text-[#7d8f92]">
            /{quizMeta.maximumScore}
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-medium text-[#79fa4b] sm:text-3xl">
          {level.title}
        </h2>
        <p className="mt-1 text-sm font-medium text-[#9eaeb0]">
          {level.mongolianTitle}
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#7d8f92]">
          {level.summary}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#fffffa]">
          {level.encouragingStatement}
        </p>
        {level.accuracyNote && (
          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-[#9eaeb0]">
            {level.accuracyNote}
          </p>
        )}
      </div>

      <div className="card mt-6 p-6 sm:p-10">
        <h3 className="text-lg font-semibold text-[#fffffa]">{L.breakdown}</h3>
        <div className="mt-6 space-y-6">
          {r.dimResults.map((d) => (
            <div key={d.id}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-semibold text-[#fffffa]">{d.label}</span>
                <span className="text-sm font-medium text-[#9eaeb0]">
                  {d.earned}/{d.maximumScore} · {d.pct}%
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#244348]">
                <div
                  className="h-full rounded-full bg-[#79fa4b]"
                  style={{ width: `${d.pct}%` }}
                />
              </div>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-[#79fa4b]">
                {d.bandLabel}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#7d8f92]">{d.feedback}</p>
              {d.caveat && (
                <p className="mt-1 text-xs italic text-[#9eaeb0]">{d.caveat}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#79fa4b]" />
            <h3 className="font-semibold text-[#fffffa]">{L.strengths}</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {r.strengths.map((s) => (
              <li key={s.id}>
                <p className="text-sm font-semibold text-[#fffffa]">
                  {s.label} · {s.pct}%
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#7d8f92]">{s.feedback}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#79fa4b]" />
            <h3 className="font-semibold text-[#fffffa]">{L.growth}</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {r.growth.map((g) => (
              <li key={g.id}>
                <p className="text-sm font-semibold text-[#fffffa]">{g.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#7d8f92]">{g.feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mt-6 p-6 sm:p-10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[#79fa4b]" />
          <h3 className="font-semibold text-[#fffffa]">{L.nextSteps}</h3>
        </div>
        <ul className="mt-4 space-y-2">
          {level.nextSteps.map((step) => (
            <li key={step} className="flex items-start gap-2 text-sm leading-relaxed text-[#7d8f92]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#79fa4b]" />
              {step}
            </li>
          ))}
        </ul>

        <div className="mt-7 border-t border-[#244348] pt-6">
          <p className="text-sm font-semibold text-[#fffffa]">
            {L.recommendedCourse}: <span className="text-[#79fa4b]">{level.recommendedCourse}</span>
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href={level.primaryCta.target} className="btn-primary">
              {level.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {level.secondaryCta && (
              <Link href={level.secondaryCta.target} className="btn-secondary">
                {level.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-[#9eaeb0]">
        {quizMeta.resultDisclaimer}
      </p>

      <div className="mt-6 text-center">
        <button onClick={start} className="btn-secondary">
          <RotateCcw className="h-4 w-4" />
          {L.restart}
        </button>
      </div>
    </div>
  );
}
