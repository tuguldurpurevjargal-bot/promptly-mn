"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { contact } from "@/app/data/content";

const inputClass =
  "w-full rounded-xl border border-[#e6eceb] bg-white px-4 py-3 text-sm text-[#0a1a1a] outline-none transition-colors placeholder:text-[#6b8b86] focus:border-[#00b8a8]";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Нэрээ оруулна уу.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Зөв и-мэйл хаяг оруулна уу.");
      return;
    }
    if (!form.message.trim()) {
      setError("Зурвасаа бичнэ үү.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-[#00b8a8]/30 bg-[#00e5d4]/10 p-6">
        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#00b8a8]" />
        <p className="font-medium text-[#0a1a1a]">{contact.form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {contact.form.name} *
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {contact.form.email} *
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#0a1a1a]">
          {contact.form.message} *
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="btn-primary w-full sm:w-auto">
        {contact.form.submit}
      </button>
    </form>
  );
}
