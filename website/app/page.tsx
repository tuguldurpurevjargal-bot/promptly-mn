import Image from "next/image";
import Link from "next/link";

const webinars = [
  {
    id: "prompt-engineering",
    title: "Prompt Engineering for Operators",
    date: "Aug 12",
    time: "11:00 AM ET",
    duration: "90 min",
    level: "Beginner",
    description:
      "Write prompts that return consistent, reusable output. Templates, chain-of-thought, and failure recovery.",
  },
  {
    id: "workflow-design",
    title: "AI Workflow Design",
    date: "Aug 19",
    time: "11:00 AM ET",
    duration: "2 hrs",
    level: "Intermediate",
    description:
      "Map real work to AI-native flows. Routing, context windows, feedback loops, and quality gates.",
  },
  {
    id: "team-optimization",
    title: "Team AI Optimization",
    date: "Sep 2",
    time: "11:00 AM ET",
    duration: "2.5 hrs",
    level: "Advanced",
    description:
      "Benchmark usage, cut waste, standardize prompts, and build an internal AI playbook your team follows.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnose",
    body: "Find where time leaks and AI hesitancy live in your workflow.",
  },
  {
    number: "02",
    title: "Optimize",
    body: "Replace ad-hoc prompting with repeatable templates and decision rules.",
  },
  {
    number: "03",
    title: "Scale",
    body: "Train the habit, measure quality, and lock in the gains.",
  },
];

const testimonials = [
  {
    quote:
      "We stopped treating AI like a search bar and started treating it like a teammate. The workflow module alone paid for the quarter.",
    author: "Elena Voss",
    role: "Operations Lead",
  },
  {
    quote:
      "Finally, AI training that isn't hype. Concrete frameworks, live critique, and no filler.",
    author: "Marcus Chen",
    role: "Engineering Manager",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="sticky top-0 z-50 border-b border-[#E8F0F0] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Promptly"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="text-lg font-semibold tracking-tight">Promptly</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <Link href="#webinars" className="text-sm text-[#5C6B6B] hover:text-[#0A1A1A]">
              Webinars
            </Link>
            <Link href="#approach" className="text-sm text-[#5C6B6B] hover:text-[#0A1A1A]">
              Approach
            </Link>
            <Link href="#about" className="text-sm text-[#5C6B6B] hover:text-[#0A1A1A]">
              About
            </Link>
          </nav>

          <Link
            href="#webinars"
            className="gradient-bg rounded-full px-5 py-2.5 text-sm font-medium text-[#0A1A1A] shadow-sm shadow-cyan-500/10 transition-opacity hover:opacity-90"
          >
            Reserve a seat
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 pb-24 pt-20 md:pt-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-[#E8F0F0] bg-[#F7FAFA] px-3 py-1 text-xs font-medium text-[#5C6B6B]">
              <span className="h-2 w-2 rounded-full bg-[#00E5D4]"></span>
              Live webinars starting August 2026
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Use AI like a{" "}
              <span className="gradient-text">system,</span>{" "}
              not a shortcut.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5C6B6B]">
              Practical webinars for teams who want to cut busywork, sharpen decisions, and make AI a reliable operating advantage.
            </p>

            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 rounded-full border border-[#E8F0F0] bg-[#F7FAFA] px-5 py-3 text-sm outline-none transition-colors placeholder:text-[#5C6B6B] focus:border-[#00E5D4]"
              />
              <button
                type="submit"
                className="gradient-bg rounded-full px-6 py-3 text-sm font-medium text-[#0A1A1A] transition-opacity hover:opacity-90"
              >
                Get early access
              </button>
            </form>

            <p className="mt-4 text-xs text-[#5C6B6B]">
              No spam. Next webinar: Aug 12.
            </p>
          </div>
        </section>

        <section className="border-y border-[#E8F0F0] bg-[#F7FAFA] px-6 py-10">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[#5C6B6B]">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
              {["Linear", "Notion", "Figma", "Vercel", "Anthropic"].map((name) => (
                <span key={name} className="text-sm font-semibold tracking-tight">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-[#5C6B6B]">The problem</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Most teams use AI like a faster search engine.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5C6B6B]">
              They copy prompts from social media, get inconsistent results, and quietly give up. The missing piece isn't better tools — it's a clear operating system for how AI fits into real work.
            </p>
          </div>
        </section>

        <section id="webinars" className="bg-[#F7FAFA] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-[#5C6B6B]">Upcoming webinars</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Pick a starting point.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[#5C6B6B]">
                Small live sessions, limited seats, direct access to the instructor.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {webinars.map((webinar) => (
                <article
                  key={webinar.id}
                  className="group flex flex-col rounded-2xl border border-[#E8F0F0] bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-cyan-500/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#5C6B6B]">
                      {webinar.level}
                    </span>
                    <span className="gradient-text text-xs font-semibold">
                      Live
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-tight">
                    {webinar.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5C6B6B]">
                    {webinar.description}
                  </p>

                  <div className="mt-6 border-t border-[#E8F0F0] pt-5">
                    <div className="flex items-center gap-3 text-xs font-medium text-[#5C6B6B]">
                      <span>{webinar.date}</span>
                      <span className="h-1 w-1 rounded-full bg-[#5C6B6B]"></span>
                      <span>{webinar.time}</span>
                      <span className="h-1 w-1 rounded-full bg-[#5C6B6B]"></span>
                      <span>{webinar.duration}</span>
                    </div>

                    <button className="mt-4 w-full rounded-full bg-[#0A1A1A] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1a2a2a]">
                      Reserve seat — $149
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-[#5C6B6B]">Our approach</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Three moves. Real results.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <span className="gradient-text font-mono text-sm font-medium">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-[#5C6B6B]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="gradient-bg px-6 py-24 text-[#0A1A1A] md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2">
              {testimonials.map((t) => (
                <blockquote key={t.author} className="flex flex-col justify-between rounded-2xl border border-white/30 bg-white/40 p-8 backdrop-blur-sm"
                >
                  <p className="text-xl font-medium leading-snug tracking-tight md:text-2xl">
                    “{t.quote}”
                  </p>
                  <footer className="mt-8">
                    <strong className="block text-sm font-semibold">{t.author}</strong>
                    <span className="text-sm opacity-70">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl rounded-3xl border border-[#E8F0F0] bg-[#F7FAFA] p-8 text-center md:p-14">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to make AI predictable?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-[#5C6B6B]">
              Join a live webinar. Leave with prompts, workflows, and a plan your team can run this week.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 rounded-full border border-[#E8F0F0] bg-white px-5 py-3 text-sm outline-none transition-colors placeholder:text-[#5C6B6B] focus:border-[#00E5D4]"
              />
              <button
                type="submit"
                className="gradient-bg rounded-full px-6 py-3 text-sm font-medium text-[#0A1A1A] transition-opacity hover:opacity-90"
              >
                Get early access
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E8F0F0] bg-white px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Promptly"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-lg font-semibold">Promptly</span>
          </div>

          <div className="flex gap-8 text-sm text-[#5C6B6B]">
            <Link href="#" className="hover:text-[#0A1A1A]">Privacy</Link>
            <Link href="#" className="hover:text-[#0A1A1A]">Terms</Link>
            <Link href="mailto:hello@promptly.mn" className="hover:text-[#0A1A1A]">hello@promptly.mn</Link>
          </div>

          <p className="text-sm text-[#5C6B6B]">
            © 2026 Promptly
          </p>
        </div>
      </footer>
    </div>
  );
}
