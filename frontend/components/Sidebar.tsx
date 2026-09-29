"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const groups = [
  ["LEARN", [
    ["⌂","Dashboard","/dashboard"],
    ["⌘","Concepts","/concepts"],
    ["∑","Formulas","/formulas"],
    ["?", "Questions","/questions"],
  ]],
  ["EXPLORE", [
    ["⌁","Visualizations","/visualizations"],
    ["◈","Simulation Lab","/simulation"],
    ["▦","Real Data","/data"],
    ["◉","Applications","/applications"],
  ]],
  ["BUILD", [
    ["◇","Projects","/projects"],
    ["⌬","Research","/research"],
    ["✦","AI Tutor","/chat"],
  ]],
];

export default function Sidebar(){
 const path=usePathname();
 return <aside className="sidebar">
  <Link href="/dashboard" className="brand"><img src="/mathspace-mark.svg"/><div><div className="brand-title">MathSpace</div><div className="brand-sub">MATHEMATICS UNIVERSE</div></div></Link>
  {groups.map(([title,items]:any)=><div key={title as string}><div className="sidebar-section">{title}</div>{items.map((i:string[])=> <Link key={i[2]} className={"navitem "+(path===i[2]?"active":"")} href={i[2]}><span className="navicon">{i[0]}</span><span>{i[1]}</span></Link>)}</div>)}
  <div className="sidebar-bottom"><Link className="navitem" href="/settings"><span className="navicon">⚙</span><span>Settings</span></Link></div>
 </aside>
}
