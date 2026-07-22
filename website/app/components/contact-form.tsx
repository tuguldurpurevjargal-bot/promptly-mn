"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/app/i18n/context";

const inputClass =
  "w-full rounded-xl border border-[#244348] bg-[rgba(0,32,37,0.6)] px-4 py-3 text-sm text-[#fffffa] outline-none transition-colors placeholder:text-[#7d8f92] focus:border-[#79fa4b]";

export function ContactForm() {
  const { t, locale } = useLanguage();
  const mn = locale === "mn";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError(mn ? "Нэрээ оруулна уу." : "Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(mn ? "Зөв и-мэйл хаяг оруулна уу." : "Please enter a valid email address.");
      return;
    }
    if (!form.message.trim()) {
      setError(mn ? "Зурвасаа бичнэ үү." : "Please write your message.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-[#79fa4b]/30 bg-[#79fa4b]/10 p-6">
        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#79fa4b]" />
        <p className="font-medium text-[#fffffa]">{t.contact.form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
          {t.contact.form.name} *
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
          {t.contact.form.email} *
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#fffffa]">
          {t.contact.form.message} *
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button type="submit" className="btn-primary w-full sm:w-auto">
        {t.contact.form.submit}
      </button>
    </form>
  );
}
