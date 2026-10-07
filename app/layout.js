import "./globals.css";import {Poppins} from "next/font/google";import Header from "@/components/Header";import Footer from "@/components/Footer";import {SITE} from "@/data/site";
const f=Poppins({subsets:["latin"],weight:["400","500","600","700"],display:"swap"});
export const viewport={width:"device-width",initialScale:1,viewportFit:"cover",themeColor:"#0b3d91"};
export const metadata={metadataBase:new URL(SITE.url),title:{default:`${SITE.name} | Online Exam, CBT & Assessment Services in India`,template:`%s | ${SITE.short}`},
description:"Optimark Exam Solution Pvt Ltd provides computer based tests, online application processing, digital evaluation and corporate assessments for education, government and corporate clients.",
alternates:{canonical:"/"},openGraph:{type:"website",images:["/logo.png"],siteName:SITE.name,locale:"en_IN"},robots:{index:true,follow:true}};
export default function Root({children}){const ld={"@context":"https://schema.org","@type":"Organization",name:SITE.name,url:SITE.url,logo:`${SITE.url}/logo.png`,email:SITE.email,telephone:SITE.phone};
return(<html lang="en"><body className={f.className}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
<Header/><main>{children}</main><Footer/></body></html>)}
