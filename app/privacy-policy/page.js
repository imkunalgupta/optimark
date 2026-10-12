import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Optimark Exam Solution Pvt Ltd collects, uses, protects and retains personal data, including cookies, candidate data and your rights under Indian law.",
  alternates: { canonical: "/privacy-policy" }
};

const updated = "11 October 2026";

const sections = [
  {
    id: "who-we-are",
    t: "Who we are",
    body: [
      `${SITE.name} ("Optimark", "we", "us" or "our") provides examination and assessment services, including online application processing, computer based and paper based tests, candidate authentication and digital evaluation, to universities, government bodies, recruitment agencies and corporates across India.`,
      `This policy explains how we handle personal data collected through our website ${SITE.url} and in the course of delivering our services. It is published in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023.`
    ]
  },
  {
    id: "information-we-collect",
    t: "Information we collect",
    body: [
      "We collect only what we need for a clear purpose. Depending on how you interact with us, this may include:"
    ],
    list: [
      [
        "Enquiry details",
        "Your name, email address, phone number, organisation, the service you are interested in and the message you send through our contact form."
      ],
      [
        "Job applications",
        "Your name, contact details, CV, qualifications and work history when you apply for a role with us."
      ],
      [
        "Candidate data (on behalf of our clients)",
        "When we conduct an examination for a client, we may process candidate registration details, photographs, signatures, identity documents, biometric data (such as fingerprints or face images used for verification), exam responses, scores and results."
      ],
      [
        "Technical data",
        "Basic information sent automatically by your browser, such as IP address, browser type, device type and pages visited, which our hosting provider records in server logs for security and reliability."
      ]
    ]
  },
  {
    id: "how-we-use",
    t: "How we use your information",
    list: [
      ["Responding to you", "To reply to enquiries, prepare proposals and provide consultations you request."],
      [
        "Delivering examinations",
        "To register candidates, issue admit cards, verify identity at test centres, conduct exams, evaluate answers and publish results, strictly as instructed by our client."
      ],
      ["Recruitment", "To assess job applications and contact shortlisted applicants."],
      [
        "Security and integrity",
        "To prevent impersonation, malpractice, fraud and unauthorised access, and to keep audit trails that make results defensible."
      ],
      [
        "Legal obligations",
        "To comply with applicable laws, regulatory requirements and lawful requests from authorities."
      ]
    ],
    after: ["We do not sell, rent or trade your personal data, and we do not use it for unrelated marketing."]
  },
  {
    id: "candidate-data",
    t: "Candidate data and our clients",
    body: [
      "For examinations we conduct for an institution or employer, that client decides why and how candidate data is processed and acts as the Data Fiduciary. Optimark acts as a Data Processor and handles the data only on the client's documented instructions and for the duration of the engagement.",
      "Questions about how your exam data is used, including requests to correct your registration details, should usually be sent to the conducting organisation first. We will support our clients in responding to such requests."
    ]
  },
  {
    id: "biometric-data",
    t: "Biometric and sensitive data",
    body: [
      "Biometric data, identity documents and similar sensitive information are collected only where a client's examination requires identity verification, and only after the candidate has been informed of the purpose.",
      "This data is used solely to confirm that the right person is taking the exam. It is encrypted, access is restricted to authorised personnel, and it is deleted or returned to the client once the verification and any audit period agreed with the client has ended."
    ]
  },
  {
    id: "cookies",
    t: "Cookies",
    body: [
      "Cookies are small text files stored on your device by your browser. Our website is designed to work without tracking you.",
      "At present we do not use advertising or analytics cookies. Our hosting and security infrastructure may set strictly necessary cookies that keep the site secure and working properly; these do not identify you personally and are not used for profiling.",
      "If we introduce analytics or other non-essential cookies in future, we will update this policy and, where required, ask for your consent before setting them. You can block or delete cookies at any time in your browser settings, although some parts of the site may not work as intended."
    ]
  },
  {
    id: "sharing",
    t: "Who we share data with",
    body: ["We share personal data only when necessary and only with:"],
    list: [
      [
        "Our clients",
        "The institution or employer for whom an examination is conducted receives candidate data and results as part of the service."
      ],
      [
        "Service providers",
        "Trusted vendors who help us operate, such as website hosting, email delivery, cloud storage, payment gateways and test centre partners. They are bound by confidentiality and may use the data only to provide their service to us."
      ],
      [
        "Authorities",
        "Courts, regulators or law enforcement agencies when required by law or to protect the rights, property or safety of Optimark, our clients or candidates."
      ]
    ]
  },
  {
    id: "security",
    t: "How we protect your data",
    body: ["We follow reasonable security practices appropriate to the sensitivity of the data, including:"],
    bullets: [
      "Encryption of data in transit (HTTPS) and of sensitive data at rest",
      "Role-based access with the minimum access each team member needs",
      "Secure, monitored handling of question papers, answer data and results",
      "Confidentiality agreements with staff, invigilators and vendors",
      "Regular reviews of our systems and incident response procedures"
    ],
    after: [
      "No method of transmission or storage is completely secure. If a personal data breach occurs, we will act promptly to contain it and notify affected clients, individuals and authorities as required by law."
    ]
  },
  {
    id: "retention",
    t: "How long we keep data",
    body: [
      "We keep personal data only as long as needed for the purpose it was collected for. Enquiry records are generally kept for up to two years. Job applications are kept for up to one year unless you join us. Candidate data is retained for the period agreed with the relevant client, after which it is securely deleted or returned. Some records may be kept longer where the law requires it."
    ]
  },
  {
    id: "your-rights",
    t: "Your rights",
    body: ["Subject to applicable law, you have the right to:"],
    bullets: [
      "Know what personal data we hold about you and how it is used",
      "Ask us to correct, complete or update inaccurate data",
      "Ask us to erase data that is no longer needed, unless we must keep it by law",
      "Withdraw consent you have given, as easily as you gave it",
      "Nominate another person to exercise your rights in case of death or incapacity",
      "Raise a grievance with us and, if unresolved, with the Data Protection Board of India"
    ],
    after: [
      "To exercise any of these rights, contact our Grievance Officer using the details below. We may need to verify your identity before acting on a request."
    ]
  },
  {
    id: "third-party-links",
    t: "Third-party links",
    body: [
      "Our website may link to other websites, such as client portals or social media pages. Those sites have their own privacy practices, and we are not responsible for how they handle your data. Please read their policies before sharing information with them."
    ]
  },
  {
    id: "children",
    t: "Children's data",
    body: [
      "Our website is intended for organisations and adults. Where an examination involves candidates under 18, we process their data only on the instructions of the conducting institution, which is responsible for obtaining verifiable consent from a parent or guardian as required by law."
    ]
  },
  {
    id: "changes",
    t: "Changes to this policy",
    body: [
      'We may update this policy to reflect changes in our services or the law. The revised version will be posted on this page with a new "Last updated" date. Significant changes will be highlighted on our website.'
    ]
  }
];

const Item = ([t, d]) => (
  <li key={t} className="flex gap-3">
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
    <span>
      <strong className="font-semibold text-slate-800 dark:text-slate-200">{t}:</strong> {d}
    </span>
  </li>
);

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand-light to-cyan-600 py-20 text-white md:py-28">
        <div className="hs-float absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-2xl" />
        <div
          className="hs-float absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="wrap relative">
          <nav aria-label="Breadcrumb" className="hs-up text-sm text-white/80" style={{ animationDelay: "100ms" }}>
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            <span className="mx-2">/</span> <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="hs-up mt-3 text-4xl font-bold drop-shadow-lg md:text-6xl" style={{ animationDelay: "250ms" }}>
            Privacy Policy
          </h1>
          <span className="hs-up mt-4 block h-1 w-20 rounded-full bg-accent" style={{ animationDelay: "400ms" }} />
          <p className="hs-up mt-5 max-w-xl text-lg text-white/90" style={{ animationDelay: "550ms" }}>
            How we collect, use and protect personal data, for website visitors, clients and exam candidates.
          </p>
          <p className="hs-up mt-3 text-sm text-white/70" style={{ animationDelay: "650ms" }}>
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap grid gap-12 lg:grid-cols-4">
          {/* Contents */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-24">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">On this page</p>
              <ul className="mt-4 space-y-2 border-l border-slate-200 text-sm dark:border-slate-800">
                {[...sections, { id: "contact", t: "Grievance Officer" }].map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent pl-4 text-slate-600 hover:border-accent hover:text-brand dark:text-slate-400 dark:hover:text-blue-300"
                    >
                      {s.t}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Policy */}
          <div className="space-y-12 leading-relaxed text-slate-600 dark:text-slate-400 lg:col-span-3">
            {sections.map((s, k) => (
              <Reveal key={s.id}>
                <article id={s.id} className="scroll-mt-24">
                  <h2 className="flex items-baseline gap-3 text-2xl font-bold text-slate-900 dark:text-white">
                    <span className="text-sm font-bold text-accent">{String(k + 1).padStart(2, "0")}</span>
                    {s.t}
                  </h2>
                  {s.body?.map((p) => (
                    <p key={p} className="mt-4">
                      {p}
                    </p>
                  ))}
                  {s.list && <ul className="mt-4 space-y-3">{s.list.map(Item)}</ul>}
                  {s.bullets && (
                    <ul className="mt-4 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.after?.map((p) => (
                    <p key={p} className="mt-4">
                      {p}
                    </p>
                  ))}
                </article>
              </Reveal>
            ))}

            {/* Grievance Officer */}
            <Reveal>
              <article id="contact" className="card scroll-mt-24 border-l-4 border-l-accent">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Grievance Officer</h2>
                <p className="mt-3">
                  For any questions, requests or complaints about this policy or your personal data, please contact our
                  Grievance Officer. We will acknowledge your request promptly and aim to resolve it within 30 days.
                </p>
                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-[8rem_1fr]">
                  <dt className="font-semibold text-slate-800 dark:text-slate-200">Name</dt>
                  <dd>Pankaj Kumar Sinha</dd>
                  <dt className="font-semibold text-slate-800 dark:text-slate-200">Company</dt>
                  <dd>{SITE.name}</dd>
                  <dt className="font-semibold text-slate-800 dark:text-slate-200">Email</dt>
                  <dd>
                    <a href={`mailto:${SITE.email}`} className="text-brand hover:text-accent dark:text-blue-300">
                      {SITE.email}
                    </a>
                  </dd>
                  <dt className="font-semibold text-slate-800 dark:text-slate-200">Phone</dt>
                  <dd>{SITE.phone}</dd>
                  <dt className="font-semibold text-slate-800 dark:text-slate-200">Regd. Office</dt>
                  <dd>{SITE.address}</dd>
                </dl>
              </article>
            </Reveal>

            <p className="text-xs text-slate-500">
              This policy is provided for general information and should be reviewed by a qualified legal advisor before
              publication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
