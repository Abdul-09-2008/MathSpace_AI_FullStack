"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter2DetailProps {
  onBack: () => void;
}

export default function Chapter2Detail({ onBack }: Chapter2DetailProps) {
  const TOTAL_MODULES = 5;
  const CHAPTER_ID = "lines-and-angles";

  const { visitedModules, markModuleVisited, progressPercent } = useChapterProgress(
    CHAPTER_ID,
    TOTAL_MODULES
  );

  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    markModuleVisited(1);
  }, []);

  const handleTabChange = (newTab: number) => {
    setActiveTab(newTab);
    markModuleVisited(newTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ color: "#f8fafc", maxWidth: "1000px", margin: "0 auto", paddingBottom: "40px" }}>
      {/* Navigation Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <button
          onClick={onBack}
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            color: "#38bdf8",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          ← Back to Class 6
        </button>
        <span style={{ color: "#64748b", fontSize: "0.875rem" }}>
          MATHSPACE / CLASS 6 / CHAPTER 2
        </span>
      </div>

      {/* Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #121417 0%, #1e293b 100%)",
          border: "1px solid #23272f",
          borderRadius: "16px",
          padding: "28px",
          marginBottom: "28px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontSize: "0.8rem", color: "#38bdf8", fontWeight: "bold", letterSpacing: "1px" }}>
            GANITA PRAKASH — NCERT CLASS 6
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 2: Lines and Angles
        </h1>

        <ProgressBar percent={progressPercent} size="md" showLabel={false} />

        <div
          style={{
            background: "#121417",
            borderLeft: "4px solid #38bdf8",
            padding: "16px",
            borderRadius: "0 8px 8px 0",
            color: "#cbd5e1",
            lineHeight: "1.6",
            fontSize: "0.95rem",
            marginTop: "20px",
          }}
        >
          <strong style={{ color: "#f8fafc" }}>Teacher's Welcome:</strong> Geometry begins with understanding space, points, and turns! In this chapter, we explore the core building blocks of plane geometry—points, line segments, lines, rays, and angles[cite: 7]. You will master how angles are formed, how to compare and measure them, and how they appear in everyday objects like clocks, doors, and the Ashoka Chakra[cite: 7].
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: Building Blocks of Geometry" },
          { id: 2, label: "Module 2: What is an Angle?" },
          { id: 3, label: "Module 3: Types of Angles & Degrees" },
          { id: 4, label: "Module 4: Real-World & Clock Angles" },
          { id: 5, label: "Module 5: Practice Exercises & Solutions" },
        ].map((tab) => {
          const isVisited = visitedModules.includes(tab.id);
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              style={{
                padding: "10px 16px",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: isActive ? "#38bdf8" : isVisited ? "#1e3a8a" : "#23272f",
                backgroundColor: isActive ? "#0369a1" : isVisited ? "#111827" : "#121417",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: isActive ? "600" : "normal",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isVisited ? "#10b981" : "#334155",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                {isVisited ? "✓" : tab.id}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Module Content Views */}
      {activeTab === 1 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: Basic Building Blocks of Plane Geometry</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Plane geometry is built from simple elements that define position, length, and direction[cite: 7]:
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Element</th>
                  <th style={{ padding: "12px" }}>Symbol / Notation</th>
                  <th style={{ padding: "12px" }}>Key Definition & Properties</th>
                  <th style={{ padding: "12px" }}>Real-World Model</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Point</td>
                  <td style={{ padding: "12px" }}>Capital letter (e.g., A, B)</td>
                  <td style={{ padding: "12px" }}>Determines a precise location. Has no length, breadth, or height.</td>
                  <td style={{ padding: "12px" }}>Tip of a sharp pencil</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Line Segment</td>
                  <td style={{ padding: "12px" }}>ST or line segment ST</td>
                  <td style={{ padding: "12px" }}>The shortest distance between two points. Bounded by 2 endpoints.</td>
                  <td style={{ padding: "12px" }}>Stretched thread or ruler edge</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Line</td>
                  <td style={{ padding: "12px" }}>ST or line <i>l</i></td>
                  <td style={{ padding: "12px" }}>Extends endlessly in both directions without endpoints.</td>
                  <td style={{ padding: "12px" }}>Straight road extending to infinity</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Ray</td>
                  <td style={{ padding: "12px" }}>OA (starts at O)</td>
                  <td style={{ padding: "12px" }}>Starts at a fixed initial point and extends endlessly in 1 direction.</td>
                  <td style={{ padding: "12px" }}>Sunbeam or flashlight beam</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px", marginTop: "24px" }}>
            <h4 style={{ color: "#38bdf8", margin: "0 0 12px 0" }}>Crucial Rules for Points and Lines:</h4>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0, paddingLeft: "20px" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>Single Point:</strong> An infinite (uncountable) number of lines can pass through a single given point[cite: 7].
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Two Points:</strong> Exactly one unique line can pass through two distinct given points[cite: 7].
              </li>
              <li>
                <strong>Direction Matters for Rays:</strong> Ray OA starts at point O and passes through A[cite: 7]. It cannot be written as AO, because ray AO starts at point A[cite: 7]!
              </li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: What is an Angle?</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            An angle is formed when two rays originate from a common starting point[cite: 7]. The common starting point is called the <strong>vertex</strong>, and the two rays are called the <strong>arms</strong> or <strong>sides</strong> of the angle[cite: 7].
          </p>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
            <h3 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>Key Concept — Size of an Angle</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
              The size of an angle is the amount of turn or rotation needed around the vertex to move from the initial ray to the second ray[cite: 7].
            </p>
          </div>

          <div style={{ background: "#451a03", border: "1px solid #f59e0b", padding: "16px", borderRadius: "8px", marginTop: "20px" }}>
            <strong style={{ color: "#fef08a" }}>Teacher's Warning:</strong>
            <span style={{ color: "#fde68a" }}> Increasing the length of the arms does NOT increase the size of the angle[cite: 7]! Angle size depends solely on the amount of rotation between the arms[cite: 7].</span>
          </div>
        </section>
      )}

      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Types of Angles & Degree Measures</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Angle sizes are quantified in degrees (°), where one complete turn equals 360°[cite: 8]:
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Angle Type</th>
                  <th style={{ padding: "12px" }}>Degree Measure</th>
                  <th style={{ padding: "12px" }}>Fraction of Full Turn</th>
                  <th style={{ padding: "12px" }}>Description & Visual Memory</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Acute Angle</td>
                  <td style={{ padding: "12px" }}>0° &lt; Measure &lt; 90°</td>
                  <td style={{ padding: "12px" }}>Less than 1/4 turn</td>
                  <td style={{ padding: "12px" }}>Sharp opening (e.g. 30°, 45°). 'Acute' means sharp.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Right Angle</td>
                  <td style={{ padding: "12px" }}>Exactly 90°</td>
                  <td style={{ padding: "12px" }}>Exactly 1/4 turn</td>
                  <td style={{ padding: "12px" }}>Forms an 'L' shape. Half of a straight angle.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Obtuse Angle</td>
                  <td style={{ padding: "12px" }}>90° &lt; Measure &lt; 180°</td>
                  <td style={{ padding: "12px" }}>Between 1/4 and 1/2 turn</td>
                  <td style={{ padding: "12px" }}>Blunt opening (e.g. 120°, 150°). 'Obtuse' means blunt.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Straight Angle</td>
                  <td style={{ padding: "12px" }}>Exactly 180°</td>
                  <td style={{ padding: "12px" }}>Exactly 1/2 turn</td>
                  <td style={{ padding: "12px" }}>Arms lie in a straight line.</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Reflex Angle</td>
                  <td style={{ padding: "12px" }}>180° &lt; Measure &lt; 360°</td>
                  <td style={{ padding: "12px" }}>Between 1/2 and 1 turn</td>
                  <td style={{ padding: "12px" }}>Greater than a straight line turn.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px", marginTop: "24px" }}>
            <h4 style={{ color: "#38bdf8", margin: "0 0 12px 0" }}>Special Terms:</h4>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0, paddingLeft: "20px" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>Perpendicular Lines:</strong> Two lines that meet or intersect at right angles (90°)[cite: 8].
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Angle Bisector:</strong> A line that divides an angle into two equal halves[cite: 8].
              </li>
              <li>
                <strong>Sum of Angles in a Triangle:</strong> Measuring all three interior angles of any triangle always sums to 180°[cite: 8].
              </li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Real-World Applications & Clock Angles</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Angles appear everywhere around us! Here is how we analyze real-world situations[cite: 8]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#38bdf8", margin: "0 0 12px 0" }}>Clock Hands</h3>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>
                A full clock circle is 360°, split into 12 hour divisions[cite: 8].
              </p>
              <div style={{ background: "#0f172a", padding: "12px", borderRadius: "6px", color: "#f8fafc", fontFamily: "monospace", marginBottom: "12px" }}>
                Angle per hour = 360° / 12 = 30°[cite: 8]
              </div>
              <ul style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>At 1 o'clock: 1 × 30° = 30°[cite: 8]</li>
                <li>At 2 o'clock: 2 × 30° = 60°[cite: 8]</li>
                <li>At 3 o'clock: 3 × 30° = 90° (Right angle)[cite: 8]</li>
                <li>At 6 o'clock: 6 × 30° = 180° (Straight angle)[cite: 8]</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#38bdf8", margin: "0 0 12px 0" }}>Ashoka Chakra</h3>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>
                The Ashoka Chakra contains 24 spokes[cite: 8].
              </p>
              <div style={{ background: "#0f172a", padding: "12px", borderRadius: "6px", color: "#f8fafc", fontFamily: "monospace" }}>
                Angle between adjacent spokes = 360° / 24 = 15°[cite: 8]<br />
                Largest acute angle between spokes = 5 × 15° = 75° (since 6 × 15° = 90°)[cite: 8]
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>Opening a Door / Book</h3>
              <p style={{ color: "#cbd5e1", margin: 0 }}>
                Opening a book flat on a table creates a straight angle (180°)[cite: 8]. Opening a book cover vertically forms a right angle (90°)[cite: 8].
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Practice Exercises & Solutions Vault</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Test your geometric understanding with these textbook practice problems[cite: 8, 9]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q1: How many lines can pass through (a) 1 given point, (b) 2 given points?[cite: 8]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> (a) Infinitely many lines can pass through 1 point[cite: 8]. (b) Exactly 1 unique line can pass through 2 points[cite: 8].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q2: Can a ray OA be written as ray AO? Why or why not?[cite: 9]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> No, ray OA has starting point O and extends towards A, whereas ray AO starts at point A[cite: 9].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q3: What is the angle formed by the hands of a clock at 4 o'clock?[cite: 9]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> Each hour represents 30°[cite: 9]. At 4 o'clock, the angle is 4 × 30° = <strong>120°</strong> (an obtuse angle)[cite: 9].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q4 (Puzzle): An acute angle measure, when multiplied by 2, 3, and 4 remains acute, but when multiplied by 5 becomes obtuse. What are the possible whole number measures?[cite: 9]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> Let the angle be <i>x</i>[cite: 9]. For 4<i>x</i> &lt; 90°, <i>x</i> &lt; 22.5°[cite: 9]. For 5<i>x</i> &gt; 90°, <i>x</i> &gt; 18°[cite: 9]. Thus, <i>x</i> can be <strong>19°, 20°, 21°, or 22°</strong>[cite: 9].
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer Controls */}
      <div style={{ display: "flex", justifyContent: activeTab > 1 ? "space-between" : "flex-end", alignItems: "center", marginTop: "32px" }}>
        {activeTab > 1 && (
          <button
            onClick={() => handleTabChange(activeTab - 1)}
            style={{ background: "#1e293b", border: "1px solid #334155", color: "#94a3b8", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}
          >
            ← Previous Module
          </button>
        )}

        {activeTab < TOTAL_MODULES ? (
          <button
            onClick={() => handleTabChange(activeTab + 1)}
            style={{ background: "#0284c7", border: "1px solid #38bdf8", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}
          >
            Next Module →
          </button>
        ) : (
          <button
            onClick={onBack}
            style={{ background: "#10b981", border: "1px solid #34d399", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}
          >
            ✓ Complete Chapter
          </button>
        )}
      </div>
    </div>
  );
}