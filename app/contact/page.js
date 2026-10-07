import ContactForm from "@/components/ContactForm";import {SITE} from "@/data/site";
export const metadata={title:"Contact Us",description:"Get in touch with Optimark for exam and assessment solutions.",alternates:{canonical:"/contact"}};
export default function C(){return(<section className="sec"><div className="wrap grid gap-10 md:grid-cols-2"><div><h1 className="h2">Contact Us</h1><p className="mt-3">Tell us about your requirement and we will respond shortly.</p>
<p className="mt-6"><b>{SITE.name}</b><br/>{SITE.address}<br/><a className="text-accent" href={`mailto:${SITE.email}`}>{SITE.email}</a><br/>{SITE.phone}</p></div><ContactForm/></div></section>)}
