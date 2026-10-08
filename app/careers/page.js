import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { jobs } from "@/data/site";
export const metadata = {
  title: "Careers",
  description: "Join Optimark Exam Solution. View current openings.",
  alternates: { canonical: "/careers" }
};
export default function C() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden bg-slate-700 text-white md:h-[60vh]">
        <Image src="/career/careers.jpg" alt="Team silhouettes over a city skyline" fill priority sizes="100vw" className="hs-kenburns object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/60 to-transparent md:via-brand/40" />
        <div className="wrap relative flex h-full flex-col justify-center">
          <nav aria-label="Breadcrumb" className="hs-up text-sm text-white/80" style={{ animationDelay: "100ms" }}>
            <Link href="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> <span className="text-white">Careers</span>
          </nav>
          <h1 className="hs-up mt-3 text-5xl font-bold drop-shadow-lg md:text-7xl" style={{ animationDelay: "250ms" }}>
            Careers
          </h1>
          <span className="hs-up mt-4 block h-1 w-20 rounded-full bg-accent" style={{ animationDelay: "400ms" }} />
          <p className="hs-up mt-5 max-w-md text-lg text-white/90" style={{ animationDelay: "550ms" }}>
            Join a team building the future of examinations.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap max-w-3xl">
          <Reveal>
            <h2 className="h2">Current Openings</h2>
            <p className="mb-6 mt-2 text-slate-600 dark:text-slate-400">Find a role where your work helps millions of candidates get a fair chance.</p>
          </Reveal>
          <div className="space-y-4">
            {jobs.map((j, k) => (
              <Reveal key={j.title} delay={k * 100}>
                <div className="card flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{j.title}</h3>
                    <p className="text-sm text-slate-500">
                      {j.loc} · {j.type}
                    </p>
                  </div>
                  <Link href="/contact" className="btn !py-2">
                    Apply
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
