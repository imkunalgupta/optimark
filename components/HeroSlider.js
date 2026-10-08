"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DELAY = 5000;

const slides = [
  {
    img: "/home/online assessement.jpg",
    tag: "Online Assessment",
    title: "Secure, Seamless Online Examinations",
    text: "Computer based tests with smart proctoring, instant scoring and zero paperwork, built to scale from a classroom to lakhs of candidates.",
    cta: { label: "Explore CBT", href: "/solutions/computer-based-test" }
  },
  {
    img: "/home/workingWithClient.jpg",
    tag: "Client Partnership",
    title: "Working Hand in Hand With You",
    text: "Dedicated teams plan every exam with you, from registration and question banks to analytics and final results.",
    cta: { label: "Our Solutions", href: "/solutions/computer-based-test" }
  },
  {
    img: "/home/commitment.jpg",
    tag: "Our Commitment",
    title: "Integrity in Every Exam We Deliver",
    text: "Fair, confidential and error-free processes that universities, government bodies and corporates trust year after year.",
    cta: { label: "About Optimark", href: "/about" }
  },
  {
    img: "/home/satisfaction.jpg",
    tag: "Client Satisfaction",
    title: "Results That Keep Clients Coming Back",
    text: "On-time delivery, transparent reporting and responsive support, measured by the satisfaction of every partner we serve.",
    cta: { label: "Get a Free Consultation", href: "/contact" }
  }
];

export default function HeroSlider() {
  const [{ i, last }, setState] = useState({ i: 0, last: null });
  const touchX = useRef(null);
  const n = slides.length;

  // Remember the outgoing slide so it stays visible underneath while the new one fades in
  const go = useCallback(
    (k) => setState((s) => {
      const to = ((k % n) + n) % n;
      return to === s.i ? s : { i: to, last: s.i };
    }),
    [n]
  );
  const next = useCallback(() => go(i + 1), [go, i]);
  const prev = useCallback(() => go(i - 1), [go, i]);

  useEffect(() => {
    const t = setTimeout(next, DELAY);
    return () => clearTimeout(t);
  }, [i, next]);

  const onKey = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section
      className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-slate-950 text-white md:h-[88vh]"
      aria-roledescription="carousel"
      aria-label="Highlights"
      tabIndex={0}
      onKeyDown={onKey}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((s, k) => {
        const active = k === i;
        const leaving = k === last;
        const Heading = k === 0 ? "h1" : "h2";
        const layer = active
          ? "z-20 opacity-100 transition-opacity duration-[1400ms] ease-in-out"
          : leaving
            ? "z-10 opacity-100"
            : "z-0 opacity-0";
        return (
          <div
            key={s.img}
            role="group"
            aria-roledescription="slide"
            aria-label={`${k + 1} of ${n}`}
            aria-hidden={!active}
            className={`absolute inset-0 ${layer}`}
          >
            <Image
              src={s.img}
              alt={s.tag}
              fill
              priority={k === 0}
              sizes="100vw"
              className={`object-cover opacity-60 ${active || leaving ? "hs-kenburns" : ""}`}
            />
            {/* Overlays keep text readable over any photo */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            {(active || leaving) && (
              <div className={`wrap relative flex h-full flex-col justify-center ${leaving ? "hs-out" : ""}`}>
                <div className="max-w-2xl">
                  <span className="hs-up inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm" style={{ animationDelay: "500ms" }}>
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    {s.tag}
                  </span>
                  <Heading className="hs-up mt-5 text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl" style={{ animationDelay: "650ms" }}>
                    {s.title}
                  </Heading>
                  <p className="hs-up mt-5 max-w-xl text-base text-white/90 md:text-lg" style={{ animationDelay: "800ms" }}>
                    {s.text}
                  </p>
                  <div className="hs-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: "950ms" }}>
                    <Link href={s.cta.href} className="btn group">
                      {s.cta.label}
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <Link href="/contact" className="rounded-full border-2 border-white/80 px-6 py-3 font-semibold transition hover:bg-white hover:text-brand">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Arrows */}
      <button onClick={prev} aria-label="Previous slide" className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl backdrop-blur-sm transition hover:scale-110 hover:bg-white/25 md:flex">
        ‹
      </button>
      <button onClick={next} aria-label="Next slide" className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl backdrop-blur-sm transition hover:scale-110 hover:bg-white/25 md:flex">
        ›
      </button>

      {/* Indicators with autoplay progress */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="wrap flex items-center gap-3">
          {slides.map((s, k) => (
            <button
              key={s.img}
              onClick={() => go(k)}
              aria-label={`Go to slide ${k + 1}: ${s.tag}`}
              aria-current={k === i}
              className={`relative h-1.5 overflow-hidden rounded-full bg-white/30 transition-all duration-500 ${k === i ? "w-16" : "w-8 hover:bg-white/60"}`}
            >
              {k === i && (
                <span
                  key={i}
                  className="hs-progress absolute inset-y-0 left-0 rounded-full bg-accent"
                  style={{ animationDuration: `${DELAY}ms` }}
                />
              )}
            </button>
          ))}
          <span className="ml-auto font-semibold tabular-nums text-white/80">
            {String(i + 1).padStart(2, "0")} <span className="text-white/40">/ {String(n).padStart(2, "0")}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
