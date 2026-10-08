import Image from "next/image";
import Link from "next/link";
import Cards from "@/components/Cards";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import { solutions, sectors } from "@/data/site";

const Eyebrow = ({ children, light }) => (
  <p className={`text-sm font-semibold uppercase tracking-widest ${light ? "text-orange-300" : "text-accent"}`}>{children}</p>
);

const lifecycle = [
  ["01", "Apply", "Online forms, fee payment and admit cards.", "/solutions/online-application-processing"],
  ["02", "Verify", "Biometric and photo checks at entry.", "/solutions/candidate-authentication"],
  ["03", "Test", "Secure CBT or paper based exams.", "/solutions/computer-based-test"],
  ["04", "Evaluate", "On-screen marking with moderation.", "/solutions/digital-evaluation"],
  ["05", "Result", "Accurate results and clear analytics.", "/contact"]
];

const why = [
  ["🔒", "Secure by Design", "Encrypted papers, biometric checks and live monitoring at every step."],
  ["📈", "Built to Scale", "From a single campus to multi-city drives with lakhs of candidates."],
  ["🎯", "Error-free Results", "Automated checks and audit trails you can defend with confidence."],
  ["🤝", "Dedicated Support", "A single team that owns your exam from planning to final result."]
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Intro */}
      <section className="sec overflow-hidden">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image src="/about/about.jpg" alt="Optimark team planning an examination" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-right" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-2xl dark:border-slate-950 sm:block md:w-64">
              <div className="relative aspect-[4/3]">
                <Image src="/home/commitment.jpg" alt="Handshake with a client" fill sizes="256px" className="object-cover" />
              </div>
            </div>
            <div className="hs-float absolute -left-4 top-6 rounded-2xl bg-white px-5 py-4 shadow-xl dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">End-to-end</p>
              <p className="font-bold text-brand dark:text-blue-300">Exam Partner</p>
            </div>
            <div className="absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          </Reveal>

          <Reveal delay={150}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="h2 mt-2">Fair, secure exams from application to result</h2>
            <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
              Optimark helps universities, government bodies and corporates run examinations they can trust. We combine proven
              processes with modern technology, so you can focus on selecting the right people.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Computer & paper based tests", "Biometric authentication", "Digital evaluation", "Pan-India centre network"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs text-accent">✔</span>
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="btn group">
                More About Us <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/contact" className="rounded-full border-2 border-brand px-6 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white dark:border-blue-300 dark:text-blue-300">
                Get a Free Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sectors */}
      <section className="sec bg-slate-50 dark:bg-slate-900/40">
        <div className="wrap">
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>Sectors We Serve</Eyebrow>
            <h2 className="h2 mt-2">Tailored testing for every organisation</h2>
          </Reveal>
          <Cards items={sectors} base="/sectors" />
        </div>
      </section>

      {/* Lifecycle */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="h2 mt-2">One partner for the entire exam lifecycle</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Every stage handled by a single, accountable team.</p>
          </Reveal>
          <div className="relative mt-14 grid gap-6 md:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-0.5 bg-gradient-to-r from-brand via-accent to-brand-light opacity-40 md:block" />
            {lifecycle.map(([n, t, d, href], k) => (
              <Reveal key={t} delay={k * 120}>
                <Link href={href} className="group relative block rounded-2xl p-4 text-center transition hover:bg-slate-50 dark:hover:bg-slate-900">
                  <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-light text-lg font-bold text-white shadow-lg shadow-brand/30 ring-8 ring-white transition duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:from-accent group-hover:to-orange-400 dark:ring-slate-950">
                    {n}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold group-hover:text-brand dark:group-hover:text-blue-300">{t}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{d}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="sec bg-slate-50 dark:bg-slate-900/40">
        <div className="wrap">
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>Our Solutions</Eyebrow>
            <h2 className="h2 mt-2">Covering the full examination lifecycle</h2>
          </Reveal>
          <Cards items={solutions} base="/solutions" />
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-brand py-20 text-white md:py-24">
        <div className="hs-float absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-light/50 blur-3xl" />
        <div className="hs-float absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "-4s" }} />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <Eyebrow light>Why Optimark</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Trusted where accuracy matters most</h2>
            <p className="mt-5 leading-relaxed text-white/80">
              High-stakes exams leave no room for error. Our people, processes and platform are built to deliver every exam on time,
              securely and fairly.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-white">
              Our values <span>→</span>
            </Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {why.map(([icon, t, d], k) => (
              <Reveal key={t} delay={k * 120}>
                <div className="group h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl transition group-hover:scale-110">{icon}</span>
                  <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-white/75">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-brand-light to-brand py-24 text-white">
        <div className="hs-float absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="hs-float absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-accent/25 blur-3xl" style={{ animationDelay: "-4s" }} />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <Reveal className="wrap relative text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-5xl">Ready to run your next exam with confidence?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">Tell us about your exam and get a tailored plan from our experts, free of charge.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn shadow-lg shadow-accent/40 transition hover:-translate-y-0.5">Get a Free Consultation</Link>
            <Link href="/solutions/computer-based-test" className="rounded-full border-2 border-white/80 px-6 py-3 font-semibold transition hover:bg-white hover:text-brand">
              Explore Solutions
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
