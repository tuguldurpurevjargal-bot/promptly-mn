"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";

const inputClass =
  "w-full rounded-xl border border-[#244348] bg-[rgba(0,32,37,0.6)] px-4 py-3 text-sm text-[#fffffa] outline-none transition-colors placeholder:text-[#7d8f92] focus:border-[#79fa4b]";

export function RegistrationForm({
  defaultCourse,
  courses,
}: {
  defaultCourse?: string;
  courses: { value: string; label: string }[];
}) {
  const { t, locale } = useLanguage();
  const registration = t.registration;
  const mn = locale === "mn";

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
      setError(mn ? "Овог нэрээ оруулна уу." : "Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(mn ? "Зөв и-мэйл хаяг оруулна уу." : "Please enter a valid email address.");
      return;
    }
    if (!form.course) {
      setError(mn ? "Сургалтаа сонгоно уу." : "Please select a course.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-[#79fa4b]/30 bg-[#79fa4b]/10 p-6">
        <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#79fa4b]" />
        <div>
          <p className="font-semibold text-[#fffffa]">{registration.success}</p>
          <p className="mt-1 text-sm text-[#9eaeb0]">
            {mn ? "Бүртгэл" : "Registration"}: {form.name} — {form.course}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
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
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
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
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
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
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
          {registration.fields.course} *
        </label>
        <select value={form.course} onChange={set("course")} className={inputClass}>
          <option value="">{mn ? "Сонгох..." : "Select..."}</option>
          {courses.map((c) => (
            <option key={c.value} value={c.label}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
          {registration.fields.level}
        </label>
        <select value={form.level} onChange={set("level")} className={inputClass}>
          <option value="">{mn ? "Сонгох..." : "Select..."}</option>
          {registration.levelOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
          {registration.fields.expectation}
        </label>
        <textarea
          value={form.expectation}
          onChange={set("expectation")}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder={mn ? "Жишээ нь: Ажлын тайлан, контент бичихдээ AI-г зөв ашиглаж сурах..." : "E.g. Learn to use AI well for work reports and content..."}
        />
      </div>

      {error && <p className="text-sm text-red-400 sm:col-span-2">{error}</p>}

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          {registration.submit}
        </button>
      </div>
    </form>
  );
}
