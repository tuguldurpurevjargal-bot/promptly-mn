"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function LeadForm({
  cta,
  success,
  namePlaceholder,
  emailPlaceholder,
}: {
  cta: string;
  success: string;
  namePlaceholder: string;
  emailPlaceholder: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Нэрээ оруулна уу.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Зөв и-мэйл хаяг оруулна уу.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-full border border-[#00b8a8]/30 bg-[#00e5d4]/10 px-6 py-4 text-sm font-medium text-[#0a1a1a]">
        <CheckCircle2 className="h-5 w-5 text-[#00b8a8]" />
        {success}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row" noValidate>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={namePlaceholder}
        aria-label={namePlaceholder}
        className="flex-1 rounded-full border border-[#e6eceb] bg-white px-5 py-3.5 text-sm text-[#0a1a1a] outline-none transition-colors placeholder:text-[#6b8b86] focus:border-[#00b8a8]"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={emailPlaceholder}
        aria-label={emailPlaceholder}
        className="flex-1 rounded-full border border-[#e6eceb] bg-white px-5 py-3.5 text-sm text-[#0a1a1a] outline-none transition-colors placeholder:text-[#6b8b86] focus:border-[#00b8a8]"
      />
      <button type="submit" className="btn-primary whitespace-nowrap">
        {cta}
      </button>
      {error && <p className="text-sm text-red-600 sm:col-span-3">{error}</p>}
    </form>
  );
}
