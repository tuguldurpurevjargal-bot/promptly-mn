import Link from "next/link";

const webinars = [
  {
    id: "prompt-engineering",
    title: "Prompt Engineering for Operators",
    date: "Aug 12, 2026",
    time: "11:00 AM ET",
    duration: "90 min",
    level: "Beginner",
    description:
      "Write prompts that return consistent, reusable output. Templates, chain-of-thought, and failure recovery included.",
    spots: 12,
  },
  {
    id: "workflow-design",
    title: "AI Workflow Design",
    date: "Aug 19, 2026",
    time: "11:00 AM ET",
    duration: "2 hrs",
    level: "Intermediate",
    description:
      "Map real work to AI-native flows. Routing, context windows, feedback loops, and quality gates.",
    spots: 8,
  },
  {
    id: "team-optimization",
    title: "Team AI Optimization",
    date: "Sep 2, 2026",
    time: "11:00 AM ET",
    duration: "2.5 hrs",
    level: "Advanced",
    description:
      "Benchmark usage, cut waste, standardize prompts, and build an internal AI playbook your team actually follows.",
    spots: 6,
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnose",
    body: "Audit where time leaks and AI hesitancy live in your current workflow.",
  },
  {
    number: "02",
    title: "Optimize",
    body: "Replace ad-hoc prompting with repeatable prompts, templates, and decision rules.",
  },
  {
    number: "03",
    title: "Scale",
    body: "Train the habit. Measure output quality and speed, then lock in the gains.",
  },
];

const testimonials = [
  {
    quote:
      "We stopped treating ChatGPT like a search bar and started treating it like a teammate. The workflow module alone paid for the quarter.",
    author: "Elena Voss",
    role: "Operations Lead, 22-person agency",
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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#E8E7E4] bg-[#F8F7F5]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Promptly
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <Link href="#webinars" className="text-sm text-[#57585C] hover:text-[#0A0A0B]">
              Webinars
            </Link>
            <Link href="#approach" className="text-sm text-[#57585C] hover:text-[#0A0A0B]">
              Approach
            </Link>
            <Link href="#about" className="text-sm text-[#57585C] hover:text-[#0A0A0B]">
              About
            </Link>
          </nav>
          <Link
            href="#webinars"
            className="rounded-full bg-[#0A0A0B] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
          >
            Reserve a seat
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="flex flex-col gap-8">
                <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#E8E7E4] bg-white px-3 py-1 text-xs font-medium text-[#57585C]">
                  <span className="h-2 w-2 rounded-full bg-[#2563FF]"></span>
                  Live webinars starting August 2026
                </div>
                <h1 className="max-w-lg text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                  Use AI like a system,{" "}
                  <span className="text-[#2563FF]">not a shortcut.</span>
                </h1>
                <p className="max-w-md text-lg leading-relaxed text-[#57585C]">
                  Practical webinars for teams who want to cut busywork, sharpen decisions, and make AI a reliable operating advantage.
                </p>
                <form className="flex max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Work email"
                    className="flex-1 rounded-full border border-[#E8E7E4] bg-white px-5 py-3 text-sm outline-none transition-colors placeholder:text-[#57585C] focus:border-[#2563FF]"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#FF4D00] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#E04300]"
                  >
                    Get early access
                  </button>
                </form>
                <p className="text-xs text-[#57585C]">
                  No spam. Unsubscribe anytime. Next webinar: Aug 12.
                </p>
              </div>

              <div className="relative flex aspect-square items-center justify-center rounded-2xl border border-[#E8E7E4] bg-white p-8 md:aspect-auto md:h-[520px]">
                <div className="grid w-full max-w-sm gap-4">
                  <div className="rounded-xl border border-[#E8E7E4] bg-[#F8F7F5] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#57585C]">Prompt quality score</span>
                      <span className="text-xs font-semibold text-[#2563FF]">+34%</span>
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#E8E7E4]">
                      <div className="h-full w-[72%] rounded-full bg-[#2563FF]"></div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#E8E7E4] bg-[#F8F7F5] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#57585C]">Weekly hours saved</span>
                      <span className="text-xs font-semibold text-[#2563FF]">11.2 hrs</span>
                    </div>
                    <div className="mt-3 flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 flex-1 rounded bg-[#2563FF] opacity-20"
                          style={{ opacity: 0.2 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#E8E7E4] bg-[#F8F7F5] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#57585C]">Team adoption rate</span>
                      <span className="text-xs font-semibold text-[#2563FF]">89%</span>
                    </div>
                    <div className="mt-3 flex -space-x-2">
                      {["M", "A", "R", "K", "+"].map((c, i) => (
                        <div
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#0A0A0B] text-[10px] font-semibold text-white"
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="border-y border-[#E8E7E4] bg-white px-6 py-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[#57585C]">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
              {["Linear", "Notion", "Figma", "Vercel", "Anthropic"].map((name) => (
                <span key={name} className="text-sm font-semibold tracking-tight">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The gap */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-[#57585C]">The problem</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Most teams use AI like a faster search engine.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#57585C]">
              They copy prompts from Twitter, get inconsistent results, and quietly give up. The missing piece isn't better tools — it's a clear operating system for how AI fits into real work.
            </p>
          </div>
        </section>

        {/* Webinars */}
        <section id="webinars" className="bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-[#57585C]">Upcoming webinars</span>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Pick a starting point.
                </h2>
              </div>
              <p className="max-w-sm text-[#57585C]">
                Small live sessions, limited seats, direct access to the instructor.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {webinars.map((webinar) => (
                <article
                  key={webinar.id}
                  className="group flex flex-col justify-between rounded-2xl border border-[#E8E7E4] bg-[#F8F7F5] p-6 transition-colors hover:border-[#2563FF]/30"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#57585C]">
                        {webinar.level}
                      </span>
                      <span className="text-xs font-medium text-[#FF4D00]">
                        {webinar.spots} spots left
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold leading-tight">
                      {webinar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#57585C]">
                      {webinar.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center gap-4 text-xs font-medium text-[#57585C]">
                      <span>{webinar.date}</span>
                      <span className="h-1 w-1 rounded-full bg-[#57585C]"></span>
                      <span>{webinar.time}</span>
                      <span className="h-1 w-1 rounded-full bg-[#57585C]"></span>
                      <span>{webinar.duration}</span>
                    </div>
                    <button className="mt-5 w-full rounded-full bg-[#0A0A0B] py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]">
                      Reserve seat — $149
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <span className="text-xs font-medium uppercase tracking-widest text-[#57585C]">Our approach</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Three moves. Real results.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="border-t-2 border-[#0A0A0B] pt-6">
                  <span className="font-mono text-sm text-[#2563FF]">{step.number}</span>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-[#57585C]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#0A0A0B] px-6 py-24 text-white md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              {testimonials.map((t) => (
                <blockquote key={t.author} className="flex flex-col justify-between">
                  <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                    “{t.quote}”
                  </p>
                  <footer className="mt-8">
                    <strong className="block text-sm font-semibold">{t.author}</strong>
                    <span className="text-sm text-[#8B8F96]">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#E8E7E4] bg-white p-8 text-center md:p-16">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to make AI predictable?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-[#57585C]">
              Join a live webinar. Leave with prompts, workflows, and a plan your team can run this week.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 rounded-full border border-[#E8E7E4] bg-[#F8F7F5] px-5 py-3 text-sm outline-none transition-colors placeholder:text-[#57585C] focus:border-[#2563FF]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#FF4D00] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#E04300]"
              >
                Get early access
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E7E4] bg-white px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="text-lg font-semibold">Promptly</span>
            <p className="mt-2 text-sm text-[#57585C]">
              AI efficiency webinars for modern teams.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-[#57585C]">
            <Link href="#" className="hover:text-[#0A0A0B]">Privacy</Link>
            <Link href="#" className="hover:text-[#0A0A0B]">Terms</Link>
            <Link href="mailto:hello@promptly.mn" className="hover:text-[#0A0A0B]">hello@promptly.mn</Link>
          </div>
          <p className="text-sm text-[#57585C]">
            © 2026 Promptly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
