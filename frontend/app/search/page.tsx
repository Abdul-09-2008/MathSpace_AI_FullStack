"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AppShell from "../../components/AppShell";

function SearchContent() {
  const p = useSearchParams();
  const q = p.get("q") || "";

  return (
    <main className="content">
      <div className="eyebrow">SEARCH</div>
      <h1 className="hero-title">
        Results for <em>“{q}”</em>
      </h1>
      <div className="topic-grid" style={{ marginTop: 25 }}>
        {[
          "Concepts",
          "Formulas & Equations",
          "Questions",
          "Visualizations",
          "Applications",
          "Projects",
        ].map((x) => (
          <article className="topic" key={x}>
            <h3>{x}</h3>
            <p>Search-ready content category for {q || "mathematics"}.</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default function Search() {
  return (
    <AppShell>
      <Suspense fallback={<div className="content" style={{ color: "#fff", padding: "40px" }}>Loading search results...</div>}>
        <SearchContent />
      </Suspense>
    </AppShell>
  );
}