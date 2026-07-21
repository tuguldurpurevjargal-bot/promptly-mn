export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[#0a1a1a] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#40514e] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
