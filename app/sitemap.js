import {SITE,solutions,sectors} from "@/data/site";
export default function sitemap(){const p=["","/about","/careers","/contact","/privacy-policy",...solutions.map(s=>`/solutions/${s.slug}`),...sectors.map(s=>`/sectors/${s.slug}`)];
return p.map(x=>({url:SITE.url+x,lastModified:new Date(),priority:x===""?1:0.7}))}
