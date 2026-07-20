import Image from "next/image";
import Link from "next/link";

const platforms = [
  { name: "Facebook", priority: 1 },
  { name: "Instagram", priority: 2 },
  { name: "Threads", priority: 2 },
  { name: "LinkedIn", priority: 2 },
  { name: "YouTube Shorts", priority: 1 },
  { name: "YouTube Longform", priority: 2 },
];

const funnel = [
  { step: "Free content", desc: "Social posts, clips, and free resources." },
  { step: "Newsletter", desc: "Weekly AI insights delivered to your inbox." },
  { step: "Webinar", desc: "Live sessions that teach practical skills." },
  { step: "Course", desc: "Structured learning paths for every level." },
  { step: "Consulting", desc: "Hands-on guidance for your team." },
  { step: "AI implementation", desc: "End-to-end integration into your workflows." },
  { step: "Monthly retainers", desc: "Ongoing support as you scale." },
];

const products = [
  {
    level: "Анхан шат",
    subtitle: "Beginner",
    desc: "AI-ийн үндэс, ойлголт, өдөр тутмын хэрэглээ.",
    topics: ["AI basics", "Daily AI use", "Prompting fundamentals"],
    available: true,
  },
  {
    level: "Дунд шат",
    subtitle: "Intermediate",
    desc: "Ажлын бүтээмж, workflow, automation, prompt engineering.",
    topics: ["Workflow design", "Automation", "Prompt engineering"],
    available: true,
  },
  {
    level: "Ахисан шат",
    subtitle: "Advanced",
    desc: "AI систем, агент, optimization, бизнесийн хэрэгжилт.",
    topics: ["AI systems", "Agents", "Business optimization"],
    available: false,
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#071414]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00F0FF]/10 via-transparent to-transparent" />
      <div className="pointer-events-none fixed -right-40 top-0 h-[60vw] w-[60vw] rounded-full bg-[#00F0FF]/10 blur-[140px]" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 h-[60vw] w-[60vw] rounded-full bg-[#4FFFB0]/10 blur-[140px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071414]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Promptly"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="font-[family-name:var(--font-arimo)] text-xl font-semibold tracking-tight text-white">Promptly</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <Link href="#mission" className="text-sm text-white/70 hover:text-white">
              Mission
            </Link>
            <Link href="#funnel" className="text-sm text-white/70 hover:text-white">
              Funnel
            </Link>
            <Link href="#products" className="text-sm text-white/70 hover:text-white">
              Courses
            </Link>
            <Link href="#contact" className="text-sm text-white/70 hover:text-white">
              Contact
            </Link>
          </nav>

          <Link
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#071414] transition-transform hover:scale-105"
          >
            Join waitlist
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative px-6 pb-28 pt-24 md:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#4FFFB0]"></span>
              Mongolia's AI education community
            </div>

            <h1 className="font-[family-name:var(--font-arimo)] mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              AI сурмаар байвал,{" "}
              <span className="gradient-text">цааш ахих.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Make artificial intelligence practical, understandable, and accessible for everyone through education, tools, and community.
            </p>

            <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="И-мэйл хаяг"
                className="flex-1 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/50 focus:border-[#4FFFB0]/50"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#071414] transition-transform hover:scale-105"
              >
                Нэгдэх
              </button>
            </form>

            <p className="mt-4 text-sm text-white/55">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>

        <section id="mission" className="px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-[#0f1f1f] p-8 md:p-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4FFFB0]">
                Vision
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                EMPOWER EVERYONE
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Become the most trusted AI education brand in Mongolia.
              </p>
            </div>

            <div className="rounded-3xl bg-[#0f1f1f] p-8 md:p-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00F0FF]">
                Mission
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Make AI practical
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Make artificial intelligence practical, understandable, and accessible for everyone through education, tools, and community.
              </p>
            </div>
          </div>
        </section>

        <section id="funnel" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4FFFB0]">
                The journey
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                From free content to full implementation.
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00F0FF] via-[#4FFFB0] to-[#00F0FF]/20 md:left-1/2" />
              <div className="space-y-6">
                {funnel.map((item, index) => (
                  <div
                    key={item.step}
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="hidden w-1/2 md:block" />
                    <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#071414] text-xs font-semibold text-white ring-2 ring-[#4FFFB0]"
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1 rounded-2xl bg-[#0f1f1f] p-5"
                    >
                      <h3 className="font-[family-name:var(--font-arimo)] text-lg font-semibold">{item.step}</h3>
                      <p className="mt-1 text-sm text-white/65">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00F0FF]">
                3 Products
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Learn at your level.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.level}
                  className="relative flex flex-col rounded-3xl bg-[#0f1f1f] p-8 transition-transform hover:-translate-y-1"
                >
                  {!product.available && (
                    <span className="absolute -top-3 right-6 rounded-full bg-[#162727] px-3 py-1 text-xs font-semibold text-white/90">
                      Coming soon
                    </span>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#4FFFB0]">
                    {product.subtitle}
                  </span>
                  <h3 className="font-[family-name:var(--font-arimo)] mt-2 text-2xl font-semibold">{product.level}</h3>
                  <p className="mt-4 flex-1 text-white/75">{product.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {product.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-white/65">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF]" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <button
                    disabled={!product.available}
                    className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                      product.available
                        ? "bg-white text-[#071414] hover:bg-white/90"
                        : "cursor-not-allowed border border-white/15 bg-transparent text-white/45"
                    }`}
                  >
                    {product.available ? "Start learning" : "Notify me"}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4FFFB0]">
                Platform
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Find us everywhere you learn.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex flex-col items-center justify-center rounded-2xl bg-[#0f1f1f] p-6 text-center transition-colors hover:bg-[#162727]"
                >
                  <span className="font-[family-name:var(--font-arimo)] text-base font-semibold">{platform.name}</span>
                  <span className="mt-1 text-xs text-white/50">
                    {platform.priority === 1 ? "Primary" : "Secondary"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl rounded-3xl bg-[#0f1f1f] p-8 text-center md:p-14">
            <h2 className="font-[family-name:var(--font-arimo)] text-3xl font-semibold tracking-tight md:text-4xl">
              AI-тай хамт өсөөрэй.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/75">
              Join the waitlist for early access to webinars, courses, and community updates.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="И-мэйл хаяг"
                className="flex-1 rounded-full border border-white/20 bg-[#071414] px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/50 focus:border-[#4FFFB0]/50"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#071414] transition-transform hover:scale-105"
              >
                Join waitlist
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071414] px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Promptly"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-[family-name:var(--font-arimo)] text-xl font-semibold">Promptly</span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            {platforms.map((p) => (
              <Link key={p.name} href="#" className="hover:text-white">
                {p.name}
              </Link>
            ))}
          </div>

          <p className="text-sm text-white/45">
            © 2026 Promptly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
