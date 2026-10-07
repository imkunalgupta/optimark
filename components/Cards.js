import Link from "next/link";
export default function Cards({items,base}){return(<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(x=>
<Link key={x.slug} href={`${base}/${x.slug}`} className="card block"><div className="text-3xl">{x.icon}</div><h3 className="mt-3 text-lg font-semibold">{x.title}</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{x.short}</p><span className="mt-3 inline-block text-sm font-semibold text-accent">Learn more →</span></Link>)}</div>)}
