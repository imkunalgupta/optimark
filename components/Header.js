"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE, solutions, sectors } from "@/data/site";

const menus = [
  { key: "about", label: "About", href: "/about" },
  { key: "sectors", label: "Sectors", base: "/sectors", items: sectors },
  { key: "solutions", label: "Solutions", base: "/solutions", items: solutions },
  { key: "careers", label: "Careers", href: "/careers" }
];

const Chevron = ({ open }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [drop, setDrop] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  // Close everything after navigating
  useEffect(() => {
    setMobile(false);
    setDrop(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setDrop(null);
    const onClick = (e) => navRef.current && !navRef.current.contains(e.target) && setDrop(null);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // Small delay on mouse-leave so moving into the panel doesn't close it
  const openMenu = (k) => {
    clearTimeout(closeTimer.current);
    setDrop(k);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setDrop(null), 150);
  };

  const isActive = (m) => (m.href ? pathname === m.href : pathname.startsWith(m.base));
  const linkCls = (active) =>
    `relative font-medium transition-colors hover:text-accent after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-accent after:transition-all after:duration-300 ${active ? "text-accent after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header ref={navRef}
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled ? "border-slate-200 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85" : "border-transparent bg-white dark:bg-slate-950"}`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" aria-label={SITE.name}>
          <Image src="/logo.png" alt={SITE.name} width={150} height={60} priority className="h-11 w-auto dark:rounded dark:bg-white dark:px-2 md:h-12" />
        </Link>

        {/* Desktop */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {menus.map((m) =>
            m.items ? (
              <div key={m.key} className="relative" onMouseEnter={() => openMenu(m.key)} onMouseLeave={closeMenu}>
                <button
                  type="button"
                  aria-expanded={drop === m.key}
                  aria-haspopup="true"
                  onClick={() => setDrop(drop === m.key ? null : m.key)}
                  className={`${linkCls(isActive(m))} flex items-center gap-1`}
                >
                  {m.label} <Chevron open={drop === m.key} />
                </button>
                <div
                  className={`absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-5 transition-all duration-300 ${drop === m.key ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {m.items.map((x) => {
                        const href = `${m.base}/${x.slug}`;
                        const here = pathname === href;
                        return (
                          <Link
                            key={x.slug}
                            href={href}
                            className={`group flex gap-3 rounded-xl p-3 transition hover:bg-slate-50 dark:hover:bg-slate-800 ${here ? "bg-slate-50 dark:bg-slate-800" : ""}`}
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-xl transition group-hover:scale-110 group-hover:bg-accent/15">
                              {x.icon}
                            </span>
                            <span>
                              <span className={`block text-sm font-semibold group-hover:text-brand dark:group-hover:text-blue-300 ${here ? "text-brand dark:text-blue-300" : ""}`}>{x.title}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-slate-500 dark:text-slate-400">{x.short}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between bg-gradient-to-r from-brand to-brand-light px-5 py-3 text-sm text-white">
                      <span>Not sure what fits your exam?</span>
                      <Link href="/contact" className="font-semibold hover:underline">Talk to an expert →</Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={m.key} href={m.href} className={linkCls(isActive(m))}>
                {m.label}
              </Link>
            )
          )}
          <Link href="/contact" className="btn !py-2 shadow-lg shadow-accent/30 transition hover:-translate-y-0.5">
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="rounded-lg border px-3 py-1.5 md:hidden" aria-label="Menu" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
          {mobile ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        aria-label="Mobile"
        className={`overflow-y-auto border-t bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 md:hidden ${mobile ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 border-transparent opacity-0"}`}
      >
        <div className="wrap flex flex-col py-3">
          {menus.map((m) =>
            m.items ? (
              <div key={m.key} className="border-b border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  aria-expanded={drop === m.key}
                  onClick={() => setDrop(drop === m.key ? null : m.key)}
                  className={`flex w-full items-center justify-between py-3 font-medium ${isActive(m) ? "text-accent" : ""}`}
                >
                  {m.label} <Chevron open={drop === m.key} />
                </button>
                <div className={`grid transition-all duration-300 ${drop === m.key ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    {m.items.map((x) => (
                      <Link key={x.slug} href={`${m.base}/${x.slug}`} className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">
                        <span className="text-lg">{x.icon}</span> {x.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={m.key} href={m.href} className={`border-b border-slate-100 py-3 font-medium dark:border-slate-800 ${isActive(m) ? "text-accent" : ""}`}>
                {m.label}
              </Link>
            )
          )}
          <Link href="/contact" className="btn mt-4 text-center">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}
