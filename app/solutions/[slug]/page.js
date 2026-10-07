import {notFound} from "next/navigation";import Detail from "@/components/Detail";import {solutions} from "@/data/site";
export const generateStaticParams=()=>solutions.map(s=>({slug:s.slug}));
export function generateMetadata({params}){const x=solutions.find(s=>s.slug===params.slug);return x?{title:x.title,description:x.short,alternates:{canonical:`/solutions/${x.slug}`}}:{}}
export default function P({params}){const x=solutions.find(s=>s.slug===params.slug);if(!x)notFound();return <Detail x={x}/>}
