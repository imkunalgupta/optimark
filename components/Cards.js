import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Cards({ items, base }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((x, k) => (
        <Reveal key={x.slug} delay={(k % 3) * 120}>
          <Link
            href={`${base}/${x.slug}`}
            className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative h-44 overflow-hidden bg-gradient-to-br from-brand to-brand-light">
              {x.img && (
                <Image
                  src={x.img}
                  alt={x.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition duration-700 group-hover:scale-110 ${x.pos || "object-center"}`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/10 to-transparent" />
              <span className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-2xl shadow-lg transition group-hover:scale-110 dark:bg-slate-900/90">
                {x.icon}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold group-hover:text-brand dark:group-hover:text-blue-300">{x.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{x.short}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                Learn more <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
