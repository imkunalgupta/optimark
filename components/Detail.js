import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const labels = { solutions: "Solutions", sectors: "Sectors" };

const steps = [
  ["Consult", "We understand your exam, candidates and timelines."],
  ["Configure", "We set up the process, platform and security to fit."],
  ["Deliver", "Our team runs it end to end with live monitoring."],
  ["Report", "You get accurate results and clear analytics."]
];

export default function Detail({ x, type, all }) {
  const base = `/${type}`;
  const related = all.filter((o) => o.slug !== x.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden bg-slate-700 text-white md:h-[60vh]">
        {x.img ? (
          <>
            <Image src={x.img} alt={x.title} fill priority sizes="100vw" className="hs-kenburns object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/60 to-transparent md:via-brand/40" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-cyan-600" />
            <div className="hs-float absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-2xl" />
            <div className="hs-float absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "-3s" }} />
          </>
        )}
        <div className="wrap relative flex h-full flex-col justify-center">
          <nav aria-label="Breadcrumb" className="hs-up text-sm text-white/80" style={{ animationDelay: "100ms" }}>
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>{labels[type]}</span>
            <span className="mx-2">/</span>
            <span className="text-white">{x.title}</span>
          </nav>
          <h1 className="hs-up mt-3 max-w-3xl text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl" style={{ animationDelay: "250ms" }}>
            {x.title}
          </h1>
          <span className="hs-up mt-4 block h-1 w-20 rounded-full bg-accent" style={{ animationDelay: "400ms" }} />
          <p className="hs-up mt-5 max-w-md text-lg text-white/90" style={{ animationDelay: "550ms" }}>
            {x.short}
          </p>
        </div>
      </section>

      {/* Overview + features */}
      <section id="features" className="sec scroll-mt-20">
        <div className="wrap grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Overview</p>
            <h2 className="h2 mt-2">How we help</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{x.long}</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:text-accent dark:text-blue-300">
              Discuss your requirement <span>→</span>
            </Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {x.points.map((p, k) => (
              <Reveal key={p} delay={k * 100}>
                <div className="card group flex h-full items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.58l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">{p}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">Feature {String(k + 1).padStart(2, "0")}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec bg-slate-50 dark:bg-slate-900/40">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Process</p>
            <h2 className="h2 mt-2">Simple, proven, reliable</h2>
          </Reveal>
          <div className="relative mt-12 grid gap-8 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0 md:block" />
            {steps.map(([t, d], k) => (
              <Reveal key={t} delay={k * 150} className="relative text-center">
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light text-lg font-bold text-white shadow-lg shadow-brand/30 ring-8 ring-white dark:ring-slate-950">
                  {k + 1}
                </span>
                <h3 className="mt-4 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Explore More</p>
              <h2 className="h2 mt-2">Other {labels[type].toLowerCase()}</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((o, k) => (
              <Reveal key={o.slug} delay={k * 120}>
                <Link href={`${base}/${o.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand to-brand-light">
                    {o.img ? (
                      <Image src={o.img} alt={o.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-5xl transition duration-500 group-hover:scale-125">{o.icon}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold group-hover:text-brand dark:group-hover:text-blue-300">{o.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{o.short}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-accent">
                      Learn more <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-light py-16 text-white">
        <div className="hs-float absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <Reveal className="wrap relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold">Ready to get started with {x.title}?</h2>
            <p className="mt-2 text-white/85">Get a free consultation and a plan tailored to your exam.</p>
          </div>
          <Link href="/contact" className="btn shrink-0 shadow-lg shadow-accent/30">Request a Demo</Link>
        </Reveal>
      </section>
    </>
  );
}
