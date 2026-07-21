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
import {
  dimensions,
  dimensionFeedback,
  questions,
  quizMeta,
  ratingBands,
  resultLevels,
  type QuizOption,
  type QuizQuestion,
} from "@/app/data/quiz";

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

function bandFor(pct: number) {
  return ratingBands.find((b) => pct >= b.min && pct <= b.max) ?? ratingBands[0];
}

export function QuizApp() {
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
  }, [stage, answers]);

  const finish = () => setStage("results");

  /* ---------- INTRO ---------- */
  if (stage === "intro") {
    return (
      <div className="card mx-auto max-w-2xl p-6 text-center sm:p-12">
        <ClipboardList className="mx-auto h-10 w-10 text-[#00b8a8]" />
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#101614] sm:text-4xl">
          {quizMeta.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#4a5a55]">
          {quizMeta.instructions}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5ebe8] bg-[#f5f7f6] px-4 py-1.5 text-sm font-medium text-[#4a5a55]">
            <ClipboardList className="h-4 w-4 text-[#00b8a8]" />
            {quizMeta.questionCount} асуулт
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5ebe8] bg-[#f5f7f6] px-4 py-1.5 text-sm font-medium text-[#4a5a55]">
            <Clock className="h-4 w-4 text-[#00b8a8]" />
            {quizMeta.durationMinutes} минут
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[#6b8b86]">
          {quizMeta.disclaimer}
        </p>

        <button onClick={start} className="btn-primary mt-8">
          Тест эхлүүлэх
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  /* ---------- QUIZ ---------- */
  if (stage === "quiz") {
    const q = shuffledQuestions[current];
    const selected = answers[q.id];
    const isLast = current === shuffledQuestions.length - 1;
    const progress = Math.round(((current + 1) / shuffledQuestions.length) * 100);

    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm font-medium text-[#4a5a55]">
            <span>
              Асуулт {current + 1} / {shuffledQuestions.length}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#e5ebe8]">
            <div
              className="h-full rounded-full bg-[#00b8a8] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="card p-6 sm:p-10">
          <h2 className="text-xl font-semibold leading-snug text-[#101614] sm:text-2xl">
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
                      ? "border-[#00b8a8] bg-[#e0faf5]"
                      : "border-[#e5ebe8] bg-white hover:border-[#00b8a8]/50"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isSelected ? "border-[#00b8a8] bg-[#00b8a8]" : "border-[#c3d2cf]"
                    }`}
                  >
                    {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                  </span>
                  <span className="text-sm leading-relaxed text-[#101614] sm:text-base">
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
            Өмнөх
          </button>

          {isLast ? (
            <button
              onClick={finish}
              disabled={!selected}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Үр дүн харах
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              disabled={!selected}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Дараах
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  /* ---------- RESULTS ---------- */
  const r = results!;
  const { level } = r;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Level card */}
      <div className="card p-6 text-center sm:p-12">
        <p className="kicker">Таны үр дүн</p>
        <div className="mt-4 text-6xl font-bold tracking-tight text-[#101614] sm:text-7xl">
          {r.total}
          <span className="text-2xl font-semibold text-[#6b8b86]">
            /{quizMeta.maximumScore}
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-[#00b8a8] sm:text-3xl">
          {level.title}
        </h2>
        <p className="mt-1 text-sm font-medium text-[#4a5a55]">
          {level.mongolianTitle}
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#4a5a55]">
          {level.summary}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#101614]">
          {level.encouragingStatement}
        </p>
        {level.accuracyNote && (
          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-[#6b8b86]">
            {level.accuracyNote}
          </p>
        )}
      </div>

      {/* Dimension breakdown */}
      <div className="card mt-6 p-6 sm:p-10">
        <h3 className="text-lg font-bold text-[#101614]">Чиглэл бүрийн задаргаа</h3>
        <div className="mt-6 space-y-6">
          {r.dimResults.map((d) => (
            <div key={d.id}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-semibold text-[#101614]">{d.label}</span>
                <span className="text-sm font-medium text-[#4a5a55]">
                  {d.earned}/{d.maximumScore} · {d.pct}%
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#e5ebe8]">
                <div
                  className="h-full rounded-full bg-[#00b8a8]"
                  style={{ width: `${d.pct}%` }}
                />
              </div>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-[#00b8a8]">
                {d.bandLabel}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#4a5a55]">{d.feedback}</p>
              {d.caveat && (
                <p className="mt-1 text-xs italic text-[#6b8b86]">{d.caveat}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & growth */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#00b8a8]" />
            <h3 className="font-bold text-[#101614]">Давуу тал</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {r.strengths.map((s) => (
              <li key={s.id}>
                <p className="text-sm font-semibold text-[#101614]">
                  {s.label} · {s.pct}%
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#4a5a55]">{s.feedback}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#00b8a8]" />
            <h3 className="font-bold text-[#101614]">Хөгжүүлэх боломж</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {r.growth.map((g) => (
              <li key={g.id}>
                <p className="text-sm font-semibold text-[#101614]">{g.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#4a5a55]">{g.feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next steps & CTA */}
      <div className="card mt-6 p-6 sm:p-10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[#00b8a8]" />
          <h3 className="font-bold text-[#101614]">Танд тохирох дараагийн алхам</h3>
        </div>
        <ul className="mt-4 space-y-2">
          {level.nextSteps.map((step) => (
            <li key={step} className="flex items-start gap-2 text-sm leading-relaxed text-[#4a5a55]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00b8a8]" />
              {step}
            </li>
          ))}
        </ul>

        <div className="mt-7 border-t border-[#e5ebe8] pt-6">
          <p className="text-sm font-semibold text-[#101614]">
            Санал болгох сургалт: <span className="text-[#00b8a8]">{level.recommendedCourse}</span>
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

      <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-[#6b8b86]">
        {quizMeta.resultDisclaimer}
      </p>

      <div className="mt-6 text-center">
        <button onClick={start} className="btn-secondary">
          <RotateCcw className="h-4 w-4" />
          Дахин тестлэх
        </button>
      </div>
    </div>
  );
}
