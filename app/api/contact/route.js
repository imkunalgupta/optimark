import {NextResponse} from "next/server";
export async function POST(req){try{const d=await req.json();
if(d.website)return NextResponse.json({ok:true});
if(!d.name||!/^\S+@\S+\.\S+$/.test(d.email||"")||!d.message)return NextResponse.json({error:"Invalid"},{status:400});
const esc=s=>String(s||"").replace(/[<>&]/g,"");
if(process.env.RESEND_API_KEY){const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},
body:JSON.stringify({from:process.env.CONTACT_FROM,to:process.env.CONTACT_TO,reply_to:d.email,subject:`Enquiry: ${esc(d.service)}`,html:`<p><b>${esc(d.name)}</b> (${esc(d.email)}, ${esc(d.phone)})</p><p>${esc(d.message)}</p>`})});
if(!r.ok)throw new Error("mail");}else console.log("Enquiry:",d);
return NextResponse.json({ok:true})}catch{return NextResponse.json({error:"Failed"},{status:500})}}
