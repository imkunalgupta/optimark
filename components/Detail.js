import Link from "next/link";
export default function Detail({x}){return(<><section className="bg-gradient-to-br from-brand to-brand-light py-16 text-white"><div className="wrap"><div className="text-5xl">{x.icon}</div><h1 className="mt-3 text-3xl font-bold md:text-5xl">{x.title}</h1><p className="mt-3 max-w-2xl text-lg opacity-90">{x.short}</p></div></section>
<section className="sec"><div className="wrap grid gap-10 md:grid-cols-2"><p className="text-lg leading-relaxed">{x.long}</p>
<ul className="space-y-3">{x.points.map(p=><li key={p} className="card !p-4">✔ {p}</li>)}</ul></div>
<div className="wrap mt-10"><Link href="/contact" className="btn">Request a Demo</Link></div></section></>)}
