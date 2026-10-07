"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SITE } from "@/data/site";
const L = [
  ["/about", "About"],
  ["/sectors/education", "Sectors"],
  ["/solutions/computer-based-test", "Solutions"],
  ["/careers", "Careers"]
];
export default function Header() {
  const [o, setO] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" aria-label={SITE.name}>
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={150}
            height={60}
            priority
            className="h-11 w-auto dark:rounded dark:bg-white dark:px-2 md:h-12"
          />
        </Link>
        <button
          className="rounded border px-3 py-1.5 md:hidden"
          aria-label="Menu"
          aria-expanded={o}
          onClick={() => setO(!o)}
        >
          {o ? "✕" : "☰"}
        </button>
        <nav
          aria-label="Main"
          className={`${o ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col gap-4 border-b bg-white p-5 dark:bg-slate-950 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {L.map(([h, t]) => (
            <Link key={h} href={h} onClick={() => setO(false)} className="font-medium hover:text-accent">
              {t}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setO(false)} className="btn !py-2">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
