import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { solutions } from "@/data/site";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Optimark Exam Solution Pvt Ltd: who we are, what we do, our values, our management and how we create shared value through fair examinations.",
  alternates: { canonical: "/about" }
};

const values = [
  ["🛡️", "Integrity", "Every exam is run fairly and transparently, with no shortcuts."],
  ["🔒", "Confidentiality", "Question papers, candidate data and results are protected at every step."],
  ["🎯", "Accuracy", "Rigorous checks deliver error-free scores and results our clients can defend."],
  ["💡", "Innovation", "We keep adopting technology that makes testing faster, safer and simpler."],
  ["🤝", "Accountability", "We own our commitments, from the first form to the final result."],
  ["👥", "Candidate First", "A smooth, respectful experience for every person who takes a test."]
];

// Replace with real names and photos of the leadership team
const leaders = [
  ["Managing Director", "Sets the company's vision and leads its long-term partnerships with clients."],
  ["Director, Operations", "Oversees test centres, logistics and on-ground exam delivery across India."],
  ["Head, Technology", "Leads the CBT platform, data security and digital evaluation systems."]
];

const shared = [
  ["⚖️", "Fair Opportunity", "Tamper-proof exams mean candidates are judged only on merit."],
  ["🌱", "Greener Exams", "Digital applications, CBT and on-screen marking cut paper use at scale."],
  ["🏙️", "Local Employment", "Every exam creates work for invigilators, technicians and centre staff."],
  ["📈", "Skilled Workforce", "Reliable assessments help employers and skill councils build talent."]
];

const Eyebrow = ({ children }) => (
  <p className="text-sm font-semibold uppercase tracking-widest text-accent">{children}</p>
);

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden bg-slate-700 text-white md:h-[60vh]">
        <Image src="/about/about.jpg" alt="Optimark team in a planning meeting" fill priority sizes="100vw" className="hs-kenburns object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/55 to-transparent md:via-brand/30" />
        <div className="wrap relative flex h-full flex-col justify-center">
          <nav aria-label="Breadcrumb" className="hs-up text-sm text-white/80" style={{ animationDelay: "100ms" }}>
            <Link href="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> <span className="text-white">About Us</span>
          </nav>
          <h1 className="hs-up mt-3 text-5xl font-bold drop-shadow-lg md:text-7xl" style={{ animationDelay: "250ms" }}>
            About Us
          </h1>
          <span className="hs-up mt-4 block h-1 w-20 rounded-full bg-accent" style={{ animationDelay: "400ms" }} />
          <p className="hs-up mt-5 max-w-md text-lg text-white/90" style={{ animationDelay: "550ms" }}>
            Trusted partners in fair, secure and error-free examinations.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="sec">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="h2 mt-2">Built on trust, driven by technology</h2>
            <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
              Optimark Exam Solution Pvt Ltd is an examination and assessment company serving universities, government bodies and
              corporates across India. We combine proven exam processes with modern technology so every test is secure, every result
              is accurate and every candidate is treated fairly.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              From a single entrance test to multi-city recruitment drives, our team handles the complete lifecycle so our clients
              can focus on what matters: selecting the right people.
            </p>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {[["Mission", "To make every examination fair, secure and effortless for institutions and candidates."], ["Vision", "To be India's most trusted partner for assessments at any scale."]].map(([t, d], k) => (
              <div key={t} className={`card ${k === 1 ? "mt-8" : ""}`}>
                <p className="text-lg font-bold text-brand dark:text-blue-300">{t}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="sec bg-slate-50 dark:bg-slate-900/40">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="h2 mt-2">End-to-end examination services</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">One partner for the full exam lifecycle, from application to result.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, k) => (
              <Reveal key={s.slug} delay={(k % 3) * 120}>
                <Link href={`/solutions/${s.slug}`} className="card group block h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-2xl transition group-hover:scale-110">{s.icon}</span>
                  <h3 className="mt-4 font-semibold group-hover:text-brand dark:group-hover:text-blue-300">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.short}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more <span className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs & values */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Beliefs &amp; Values</Eyebrow>
            <h2 className="h2 mt-2">What guides every exam we deliver</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([icon, t, d], k) => (
              <Reveal key={t} delay={(k % 3) * 120}>
                <div className="card group h-full border-t-4 border-t-transparent hover:border-t-accent">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="sec bg-slate-50 dark:bg-slate-900/40">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Management</Eyebrow>
            <h2 className="h2 mt-2">Experienced leadership</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Our leadership brings together expertise in examination operations, technology and client service.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leaders.map(([role, d], k) => (
              <Reveal key={role} delay={k * 120}>
                <div className="card h-full text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light text-3xl font-bold text-white">
                    {role[0]}
                  </div>
                  <p className="mt-4 text-lg font-semibold">[Name]</p>
                  <p className="text-sm font-semibold text-accent">{role}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">*Replace names and photos in app/about/page.js</p>
        </div>
      </section>

      {/* Creating shared value */}
      <section className="sec">
        <div className="wrap grid items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <Eyebrow>Creating Shared Value</Eyebrow>
            <h2 className="h2 mt-2">Growing together with society</h2>
            <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
              We believe a business succeeds best when the communities around it succeed too. Fair, efficient examinations open doors
              for candidates, help institutions select talent, and create opportunities wherever we operate.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {shared.map(([icon, t, d], k) => (
              <Reveal key={t} delay={k * 120}>
                <div className="card flex h-full gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-2xl">{icon}</span>
                  <div>
                    <h3 className="font-semibold">{t}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-14 text-center text-white">
        <Reveal className="wrap">
          <h2 className="text-3xl font-bold">Let&apos;s build your next exam together</h2>
          <Link href="/contact" className="btn mt-6">Talk to Our Team</Link>
        </Reveal>
      </section>
    </>
  );
}
