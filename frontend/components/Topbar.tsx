"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Topbar(){
 const [q,setQ]=useState(""); const router=useRouter();
 return <header className="topbar">
   <form className="search" onSubmit={e=>{e.preventDefault(); if(q.trim()) router.push("/search?q="+encodeURIComponent(q))}}>
    <span>⌕</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search mathematics, concepts, formulas..."/>
   </form>
   <div className="top-actions"><button className="ghost" onClick={()=>router.push("/chat")}>✦ New Chat</button><button className="solid" onClick={()=>router.push("/profile")}>Profile</button></div>
 </header>
}
