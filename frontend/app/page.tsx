import Link from "next/link";
export default function Home(){
 return <main className="auth-page" style={{backgroundImage:"radial-gradient(circle at 50% 20%,#252525 0,transparent 34%)"}}>
  <section style={{textAlign:"center",maxWidth:780}}>
   <img src="/mathspace-mark.svg" style={{width:120,height:120}}/>
   <div className="eyebrow">MATHSPACE · MATHEMATICS UNIVERSE</div>
   <h1 className="hero-title">From mathematical ideas<br/><em>to real-world intelligence.</em></h1>
   <p className="sub" style={{margin:"0 auto 25px"}}>Learn concepts, understand formulas, solve problems, visualize mathematics, run simulations, work with data and explore research — in one connected mathematics ecosystem.</p>
   <div style={{display:"flex",gap:9,justifyContent:"center"}}><Link className="solid" href="/signup">Create account →</Link><Link className="ghost" href="/login">Log in</Link></div>
  </section>
 </main>
}
