"use client";import {useState} from "react";
export default function ContactForm(){const [s,setS]=useState("idle");
async function submit(e){e.preventDefault();const f=e.target;setS("loading");const d=Object.fromEntries(new FormData(f));
try{const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});
if(!r.ok)throw 0;setS("ok");f.reset()}catch{setS("err")}}
const i="w-full rounded-lg border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900";
return(<form onSubmit={submit} className="grid gap-3">
<input name="name" required placeholder="Your name" aria-label="Name" className={i}/>
<input name="email" type="email" required placeholder="Email" aria-label="Email" className={i}/>
<input name="phone" placeholder="Phone (optional)" aria-label="Phone" className={i}/>
<select name="service" aria-label="Service" className={i}><option>Exam Administration</option><option>Digital Evaluation</option><option>Corporate Assessment</option><option>Other</option></select>
<textarea name="message" required rows={4} placeholder="Your message" aria-label="Message" className={i}/>
<input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true"/>
<button className="btn" disabled={s==="loading"}>{s==="loading"?"Sending…":"Send Enquiry"}</button>
{s==="ok"&&<p className="text-green-600">Thank you! We will contact you soon.</p>}
{s==="err"&&<p className="text-red-600">Something went wrong. Please email us directly.</p>}</form>)}
