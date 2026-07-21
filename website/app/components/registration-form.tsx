"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { registration } from "@/app/data/content";

const inputClass =
  "w-full rounded-xl border border-[#e6eceb] bg-white px-4 py-3 text-sm text-[#0a1a1a] outline-none transition-colors placeholder:text-[#6b8b86] focus:border-[#00b8a8]";

export function RegistrationForm({
  defaultCourse,
  courses,
}: {
  defaultCourse?: string;
  courses: { value: string; label: string }[];
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse ?? "",
    level: "",
    expectation: "",
  });
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Овог нэрээ оруулна уу.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Зөв и-мэйл хаяг оруулна уу.");
      return;
    }
    if (!form.course) {
      setError("Сургалтаа сонгоно уу.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-[#00b8a8]/30 bg-[#00e5d4]/10 p-6">
        <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#00b8a8]" />
        <div>
          <p className="font-semibold text-[#0a1a1a]">{registration.success}</p>
          <p className="mt-1 text-sm text-[#40514e]">
            Бүртгэл: {form.name} — {form.course}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {registration.fields.name} *
        </label>
        <input
          type="text"
          value={form.name}
          onChange={set("name")}
          className={inputClass}
          placeholder={registration.fields.name}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {registration.fields.email} *
        </label>
        <input
          type="email"
          value={form.email}
          onChange={set("email")}
          className={inputClass}
          placeholder="name@example.com"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {registration.fields.phone}
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={set("phone")}
          className={inputClass}
          placeholder="99XXXXXX"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {registration.fields.course} *
        </label>
        <select value={form.course} onChange={set("course")} className={inputClass}>
          <option value="">Сонгох...</option>
          {courses.map((c) => (
            <option key={c.value} value={c.label}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {registration.fields.level}
        </label>
        <select value={form.level} onChange={set("level")} className={inputClass}>
          <option value="">Сонгох...</option>
          {registration.levelOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {registration.fields.expectation}
        </label>
        <textarea
          value={form.expectation}
          onChange={set("expectation")}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Жишээ нь: Ажлын тайлан, контент бичихдээ AI-г зөв ашиглаж сурах..."
        />
      </div>

      {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          {registration.submit}
        </button>
      </div>
    </form>
  );
}
