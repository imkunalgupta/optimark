import {notFound} from "next/navigation";import Detail from "@/components/Detail";import {sectors} from "@/data/site";
export const generateStaticParams=()=>sectors.map(s=>({slug:s.slug}));
export function generateMetadata({params}){const x=sectors.find(s=>s.slug===params.slug);return x?{title:x.title,description:x.short,alternates:{canonical:`/sectors/${x.slug}`}}:{}}
export default function P({params}){const x=sectors.find(s=>s.slug===params.slug);if(!x)notFound();return <Detail x={x} type="sectors" all={sectors}/>}
