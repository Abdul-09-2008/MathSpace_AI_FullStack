import AppShell from "../../components/AppShell";
import Link from "next/link";

const levels = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "BSc",
  "MSc",
  "Research",
];

const modules = [
  ["01", "Concept Explorer", "Understand the mathematical idea behind every topic.", "/concepts"],
  ["02", "Formula & Equation", "Explore formulas, variables, solutions and domains.", "/formulas"],
  ["03", "Question Engine", "Generate, solve, hint and check mathematical questions.", "/questions"],
  ["04", "Visualization", "See functions, curves, statistics and mathematical structures.", "/visualizations"],
  ["05", "Simulation Lab", "Change parameters and observe mathematical systems.", "/simulation"],
  ["06", "Real Data", "Upload and analyze datasets with mathematical methods.", "/data"],
  ["07", "Applications", "Discover mathematics across industries and domains.", "/applications"],
  ["08", "Projects", "Turn mathematics into buildable projects.", "/projects"],
  ["09", "Research Workspace", "Move from model and equation to research questions.", "/research"],
  ["10", "AI Mathematics Tutor", "Step-by-step explanations, hints and real-world context.", "/chat"],
];

const pipelineSteps = [
  "Concept",
  "Formula",
  "Equation",
  "Problem",
  "Domain",
  "Data",
  "Model",
  "AI",
  "Simulation",
  "2D / 3D",
  "Application",
  "Project",
  "Research",
];

export default function Dashboard() {
  return (
    <AppShell>
      <main className="content">
        <div className="eyebrow">MATHSPACE / DASHBOARD</div>
        <h1 className="hero-title">
          Mathematics is a <em>universe.</em>
        </h1>
        <p className="sub">
          A connected workspace for learning, calculating, visualizing, simulating, building and researching mathematics.
        </p>

        <div className="dashboard-grid">
          {/* Level Selection Section */}
          <section className="panel">
            <div className="panel-head">
              <h2>Choose your learning level</h2>
              <span>10 levels</span>
            </div>
            <div className="level-cards">
              {levels.map((x) => (
                <Link href="/concepts" className="level-card" key={x}>
                  <b>{x}</b>
                  <small>{x.includes("Class") ? "School" : "Advanced"}</small>
                </Link>
              ))}
            </div>
          </section>

          {/* Pipeline Section */}
          <section className="panel">
            <div className="panel-head">
              <h2>Mathematics → Reality</h2>
              <span>core flow</span>
            </div>
            <div className="pipeline">
              {pipelineSteps.map((x, i) => (
                <div className="step" key={x}>
                  <strong>{String(i + 1).padStart(2, "0")}</strong> {x}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modules Grid Section */}
        <div className="panel" style={{ marginTop: 14 }}>
          <div className="panel-head">
            <h2>MathSpace modules</h2>
            <span>real navigation + working starter APIs</span>
          </div>
          <div className="module-grid">
            {modules.map(([num, title, desc, link]) => (
              <article className="module" key={num}>
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link href={link}>Open module →</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </AppShell>
  );
}