"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { sendEnquiry } from "@/app/contact/actions";
import { solutions } from "@/data/site";

const field =
  "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 transition " +
  "focus:border-brand-light focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-light/15 " +
  "dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:focus:border-blue-400 dark:focus:bg-slate-900 dark:focus:ring-blue-400/15";

const Field = ({ id, label, optional, className = "", children }) => (
  <div className={className}>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
      {label} {optional && <span className="font-normal text-slate-400">(optional)</span>}
    </label>
    {children}
  </div>
);

const MAX_MB = 4;
const ACCEPT = ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png";

export default function ContactForm() {
  const [s, setS] = useState("idle");
  const [file, setFile] = useState(null);
  const [fileErr, setFileErr] = useState("");
  const fileRef = useRef(null);

  function pick(e) {
    const x = e.target.files[0];
    setFileErr("");
    if (x && x.size > MAX_MB * 1024 * 1024) {
      setFileErr(`File is too large. Maximum size is ${MAX_MB} MB.`);
      e.target.value = "";
      return setFile(null);
    }
    setFile(x || null);
  }

  function clearFile() {
    fileRef.current.value = "";
    setFile(null);
    setFileErr("");
  }

  async function submit(e) {
    e.preventDefault();
    const f = e.target;
    setS("loading");
    try {
      const { ok } = await sendEnquiry(new FormData(f));
      if (!ok) throw 0;
      setS("ok");
      f.reset();
      setFile(null);
    } catch {
      setS("err");
    }
  }

  if (s === "ok")
    return (
      <div className="flex h-full flex-col items-center justify-center py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600 dark:bg-green-900/40">✓</span>
        <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400">Your enquiry has been sent. Our team will get back to you within one business day.</p>
        <button onClick={() => setS("idle")} className="mt-5 text-sm font-semibold text-brand hover:text-accent dark:text-blue-300">
          Send another message
        </button>
      </div>
    );

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <Field id="name" label="Full name">
        <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </Field>
      <Field id="email" label="Email">
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
      </Field>
      <Field id="phone" label="Phone" optional>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" className={field} />
      </Field>
      <Field id="organisation" label="Organisation" optional>
        <input id="organisation" name="organisation" autoComplete="organization" placeholder="University / company" className={field} />
      </Field>
      <Field id="service" label="I'm interested in" className="sm:col-span-2">
        <select id="service" name="service" className={field}>
          {solutions.map((x) => (
            <option key={x.slug}>{x.title}</option>
          ))}
          <option>Other</option>
        </select>
      </Field>
      <Field id="message" label="Message" className="sm:col-span-2">
        <textarea id="message" name="message" required rows={4} placeholder="Exam type, number of candidates, timeline…" className={field} />
      </Field>
      <Field id="attachment" label="Attachment" optional className="sm:col-span-2">
        <input id="attachment" ref={fileRef} name="attachment" type="file" accept={ACCEPT} onChange={pick} className="peer sr-only" />
        {file ? (
          <div className="flex items-center gap-3 rounded-lg border border-brand-light/40 bg-brand-light/5 px-4 py-2.5 text-sm dark:border-blue-400/40 dark:bg-blue-400/5">
            <span aria-hidden="true">📎</span>
            <span className="min-w-0 flex-1 truncate font-medium">{file.name}</span>
            <span className="shrink-0 text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
            <button type="button" onClick={clearFile} aria-label="Remove attachment" className="shrink-0 rounded px-1.5 text-slate-400 hover:text-red-600">
              ✕
            </button>
          </div>
        ) : (
          <label
            htmlFor="attachment"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-500 transition hover:border-brand-light hover:text-brand peer-focus-visible:border-brand-light peer-focus-visible:ring-4 peer-focus-visible:ring-brand-light/15 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-blue-400 dark:hover:text-blue-300"
          >
            <span className="font-medium text-brand dark:text-blue-300">Choose a file</span> PDF, Word, Excel or image, up to {MAX_MB} MB
          </label>
        )}
        {fileErr && <p className="mt-1.5 text-xs text-red-600">{fileErr}</p>}
      </Field>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {s === "err" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700 sm:col-span-2 dark:bg-red-900/30 dark:text-red-300">
          We couldn't send your message. Please try again or email us directly.
        </p>
      )}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
        <p className="text-xs text-slate-400">
          By submitting, you agree to our <Link href="/privacy-policy" className="underline hover:text-brand">privacy policy</Link>.
        </p>
        <button className="btn group w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto" disabled={s === "loading"}>
          {s === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Sending…
            </span>
          ) : (
            <>
              Send Enquiry <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
