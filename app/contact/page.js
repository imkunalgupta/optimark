import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Optimark for exam and assessment solutions.",
  alternates: { canonical: "/contact" }
};

// Outline icons (Heroicons paths)
const icons = {
  pin: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  mail: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  phone: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  clock: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
};

const info = [
  ["pin", "Registered Office", SITE.address],
  ["mail", "Email", SITE.email, `mailto:${SITE.email}`],
  ["phone", "Phone", SITE.phone, `tel:${SITE.phone.replace(/[^+\d]/g, "")}`],
  ["clock", "Working Hours", "Mon – Sat, 10:00 AM – 6:00 PM"]
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-brand/[0.06] to-transparent dark:from-blue-400/[0.06]" />
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">Home</Link> <span className="mx-2">/</span> <span className="text-slate-800 dark:text-slate-200">Contact Us</span>
        </nav>
        <div className="mt-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-brand dark:text-blue-300 md:text-5xl">Let's talk about your exam</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Share a few details and our team will get back to you within one business day with a tailored plan.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-5">
          {/* Details */}
          <aside className="relative overflow-hidden bg-brand p-8 text-white lg:col-span-2">
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-brand-light/50 blur-2xl" />
            <h2 className="relative text-xl font-semibold">Contact information</h2>
            <p className="relative mt-1 text-sm text-white/70">Reach us directly or use the form.</p>
            <ul className="relative mt-8 space-y-6">
              {info.map(([icon, t, v, href]) => (
                <li key={t} className="flex gap-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icons[icon]} />
                  </svg>
                  <div className="min-w-0 text-sm">
                    <p className="text-white/60">{t}</p>
                    {href ? (
                      <a href={href} className="mt-0.5 block break-words font-medium hover:text-orange-300">{v}</a>
                    ) : (
                      <p className="mt-0.5 font-medium leading-relaxed">{v}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Form */}
          <div className="p-6 md:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
