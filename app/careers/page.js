import Link from "next/link";
import { jobs } from "@/data/site";
export const metadata = {
  title: "Careers",
  description: "Join Optimark Exam Solution. View current openings.",
  alternates: { canonical: "/careers" }
};
export default function C() {
  return (
    <section className="sec">
      <div className="wrap max-w-3xl">
        <h1 className="h2">Careers</h1>
        <p className="mb-6 mt-2">Join a team building the future of examinations.</p>
        <div className="space-y-4">
          {jobs.map((j) => (
            <div key={j.title} className="card flex flex-wrap items-center justify-between gap-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
