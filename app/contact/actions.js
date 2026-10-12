"use server";
import { Resend } from "resend";

const esc = (s) =>
  String(s || "")
    .trim()
    .slice(0, 5000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = /\.(pdf|docx?|xlsx?|jpe?g|png)$/i;

const row = (label, value) =>
  value
    ? `<tr><td style="padding:8px 12px;color:#64748b;width:110px">${label}</td><td style="padding:8px 12px">${value}</td></tr>`
    : "";

// Server Action: runs on the server so the Resend API key never reaches the browser
export async function sendEnquiry(formData) {
  const d = Object.fromEntries(
    ["name", "email", "phone", "organisation", "service", "message", "website"].map((k) => [
      k,
      String(formData.get(k) || "").trim()
    ])
  );
  if (d.website) return { ok: true }; // honeypot: silently ignore bots
  if (!d.name || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message) return { ok: false };

  if (!process.env.RESEND_API_KEY) {
    console.error("Resend: RESEND_API_KEY is not set in .env.local");
    return { ok: false };
  }

  // Optional attachment: re-checked here since browser checks can be bypassed
  const file = formData.get("attachment");
  const attachments = [];
  if (file && typeof file === "object" && file.size > 0) {
    if (file.size > MAX_BYTES || !ALLOWED.test(file.name)) return { ok: false };
    attachments.push({ filename: file.name, content: Buffer.from(await file.arrayBuffer()) });
  }

  const f = Object.fromEntries(Object.entries(d).map(([k, v]) => [k, esc(v)]));
  const { error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
    from: process.env.CONTACT_FROM || "Optimark Website <onboarding@resend.dev>",
    to: process.env.CONTACT_TO,
    replyTo: d.email,
    attachments,
    subject: `New enquiry: ${d.service || "General"} from ${d.name}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
  <div style="background:#0b3d91;color:#fff;padding:20px 24px"><h2 style="margin:0;font-size:20px">${f.service || "General"} Enquiry</h2></div>
  <table style="width:100%;border-collapse:collapse;font-size:14px;margin:12px 0">
    ${row("Name", f.name)}${row("Email", `<a href="mailto:${f.email}">${f.email}</a>`)}${row("Phone", f.phone)}${row("Organisation", f.organisation)}${row("Service", f.service)}${row("Attachment", attachments[0] && esc(attachments[0].filename))}
  </table>
  <div style="padding:0 24px 24px"><p style="color:#64748b;font-size:13px;margin:0 0 6px">Message</p>
  <div style="background:#f8fafc;border-left:4px solid #ff7a1a;padding:12px 16px;white-space:pre-wrap">${f.message}</div></div>
</div>`
  });

  if (error) console.error("Resend:", error);
  return { ok: !error };
}
