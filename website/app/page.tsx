import Image from "next/image";
import Link from "next/link";

const audiences = [
  {
    title: "Хувь хүмүүс",
    desc: "AI-г өдөр тутмын ажилдаа хэрэглэж, цагаа хэмнэж, бүтээмжээ дээшлүүлэхийг хүсэж буй хэн бүхэн.",
  },
  {
    title: "Багууд",
    desc: "Ажлын процесоо автоматжуулж, хурдан шийдвэр гаргах дадал суулгахыг зорьж буй баг, хэсэг.",
  },
  {
    title: "Бизнесүүд",
    desc: "AI-г бизнесийн үйл ажиллагаандаа нэвтрүүлж, өрсөлдөх чадвараа нэмэгдүүлэхийг хүсэж буй компани.",
  },
];

const learningPath = [
  {
    level: "Анхан шат",
    subtitle: "Beginner",
    tagline: "AI-ийн үндэс, ойлголт, өдөр тутмын хэрэглээ",
    description:
      "Хэрхэн AI-тай зөв харилцах, ашгийн хэрэглээ, өдөр бүр хэрэглэж болох хэрэгслүүдийг энгийнээр ойлгоно.",
    topics: ["AI гэж юу вэ?", "Prompt бичих үндэс", "Өдөр тутмын хэрэглээ", "Хамгийн сайн үнэгүй хэрэгслүүд"],
    cta: "Эхлэх",
    available: true,
  },
  {
    level: "Дунд шат",
    subtitle: "Intermediate",
    tagline: "Ажлын бүтээмж, workflow, automation, prompt engineering",
    description:
      "Өөрийн ажлын урсгалыг тодорхойлж, AI-г түүнд хэрхэн хэвшүүлэх, автоматжуулах, илүү сайн prompt бичихийг сурна.",
    topics: ["Workflow optimization", "Automation", "Prompt engineering", "Багийн хэрэглээ"],
    cta: "Дэлгэрэнгүй",
    available: true,
  },
  {
    level: "Ахисан шат",
    subtitle: "Advanced",
    tagline: "AI систем, агент, optimization, бизнесийн хэрэгжилт",
    description:
      "Бизнесийн нарийн үйл ажиллагаанд AI систем болон агентуудыг нэвтрүүлж, хэмжигдэхүйц үр дүнг бий болгох.",
    topics: ["AI systems design", "AI agents", "Business optimization", "Implementation strategy"],
    cta: "Coming soon",
    available: false,
  },
];

const platforms = [
  { name: "Facebook", priority: "Primary" },
  { name: "YouTube Shorts", priority: "Primary" },
  { name: "Instagram", priority: "Secondary" },
  { name: "Threads", priority: "Secondary" },
  { name: "LinkedIn", priority: "Secondary" },
  { name: "YouTube Longform", priority: "Secondary" },
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
            <Link href="#why" className="text-sm text-white/70 hover:text-white">
              Why Promptly
            </Link>
            <Link href="#path" className="text-sm text-white/70 hover:text-white">
              Learning path
            </Link>
            <Link href="#contact" className="text-sm text-white/70 hover:text-white">
              Contact
            </Link>
          </nav>

          <Link
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#071414] transition-transform hover:scale-105"
          >
            Newsletter
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative px-6 pb-28 pt-24 md:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#4FFFB0]"></span>
              Монголын AI боловсролын нийгэмлэг
            </div>

            <h1 className="font-[family-name:var(--font-arimo)] mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              AI сурмаар байвал,{" "}
              <span className="gradient-text">цааш ахих.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              AI-г хүн бүрт ойлгомжтой, өдөр тутмын ажилдаа хэрэглэхэд бэлэн болгоё. Боловсрол, хэрэгсэл, нийгэмлэг — гурван талаас дэмжнэ.
            </p>

            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#071414] transition-transform hover:scale-105"
              >
                Newsletter бүртгүүлэх
              </Link>
              <Link
                href="#path"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Сургалтууд үзэх
              </Link>
            </div>
          </div>
        </section>

        <section id="why" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4FFFB0]">
                Vision & Mission
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                EMPOWER EVERYONE
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Монгол дахь хамгийн итгэл үнэмшилтэй AI боловсролын брэнд болох зорилгын дор, бид AI-г хүн бүрт хүртээмжтэй, ойлгомжтой, хэрэглээнд ойр болгохыг эрхэмлэнэ.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map((audience) => (
                <div key={audience.title} className="rounded-3xl bg-[#0f1f1f] p-8"
                >
                  <h3 className="font-[family-name:var(--font-arimo)] text-xl font-semibold">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-white/75">{audience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="path" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00F0FF]">
                3-р түвшин
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Таны түвшинд тохирсон сургалт.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {learningPath.map((product) => (
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
                  <p className="mt-2 text-sm font-medium text-white/90">{product.tagline}</p>
                  <p className="mt-4 flex-1 text-white/70">{product.description}</p>
                  <ul className="mt-6 space-y-2">
                    {product.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-white/60">
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
                    {product.available ? product.cta : "Coming soon"}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00F0FF]">
                Platform
              </span>
              <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Биднийг хаанаас дагах вэ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                Үнэгүй контентоо голчлон Facebook болон YouTube Shorts дээр, нэмэлтээр Instagram, Threads, LinkedIn, YouTube Longform дээр түгээдэг.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex flex-col items-center justify-center rounded-2xl bg-[#0f1f1f] p-6 text-center transition-colors hover:bg-[#162727]"
                >
                  <span className="font-[family-name:var(--font-arimo)] text-base font-semibold">{platform.name}</span>
                  <span className="mt-1 text-xs text-white/50">
                    {platform.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl rounded-3xl bg-[#0f1f1f] p-8 text-center md:p-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4FFFB0]">
              Newsletter
            </span>
            <h2 className="font-[family-name:var(--font-arimo)] mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              AI-тай хамт өсөөрэй.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/75">
              Долоо хоног бүр шинэ AI хэрэгсэл, арга техник, Монголд хэрэглэх боломжийн талаар и-мэйлээр хүргэнэ.
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
                Бүртгүүлэх
              </button>
            </form>
            <p className="mt-4 text-sm text-white/50">
              Spam авахгүй. Бүртгэлээ хүссэн үедээ цуцлана.
            </p>
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
