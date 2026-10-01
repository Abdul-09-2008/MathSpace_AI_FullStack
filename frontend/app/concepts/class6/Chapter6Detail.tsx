"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter6DetailProps {
  onBack: () => void;
}

export default function Chapter6Detail({ onBack }: Chapter6DetailProps) {
  const TOTAL_MODULES = 5;
  const CHAPTER_ID = "perimeter-and-area";

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
          MATHSPACE / CLASS 6 / CHAPTER 6
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
            GANITA PRAKASH CLASS 6 MATHEMATICS: CHAPTER 6
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 6: Perimeter and Area - Complete Master Course
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
          <strong style={{ color: "#f8fafc" }}>Teacher's Insight:</strong> Geometry is not just about drawing shapes; it is about measuring boundaries and regions! Perimeter measures the outer edge (1D length), while Area measures the surface region enclosed (2D space). Understanding both equips students to solve real-world problems in fencing, tiling, architecture, and design.
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: Perimeter" },
          { id: 2, label: "Module 2: Area & Tiling" },
          { id: 3, label: "Module 3: Area vs Perimeter" },
          { id: 4, label: "Module 4: Mazes & Floor Plans" },
          { id: 5, label: "Module 5: Practice Vault" },
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
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: Understanding Perimeter</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem" }}>1. What is Perimeter?</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              The word perimeter comes from Greek words: <em>peri</em> (around) and <em>metron</em> (measure). The perimeter of a closed plane figure is the total distance covered along its boundary when going around it once.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem" }}>2. Formulas for Standard Figures</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              For any polygon (a closed figure made of line segments), the perimeter is simply the sum of the lengths of all its sides.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Figure Type</th>
                  <th style={{ padding: "12px" }}>Geometric Properties</th>
                  <th style={{ padding: "12px" }}>Perimeter Formula</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Rectangle</td>
                  <td style={{ padding: "12px" }}>Opposite sides are equal in length</td>
                  <td style={{ padding: "12px" }}>P = 2 × (Length + Breadth)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Square</td>
                  <td style={{ padding: "12px" }}>All 4 sides are equal in length</td>
                  <td style={{ padding: "12px" }}>P = 4 × Side</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Triangle (General)</td>
                  <td style={{ padding: "12px" }}>3 sides of lengths a, b, c</td>
                  <td style={{ padding: "12px" }}>P = a + b + c</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Equilateral Triangle</td>
                  <td style={{ padding: "12px" }}>All 3 sides equal in length</td>
                  <td style={{ padding: "12px" }}>P = 3 × Side</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Regular Polygon</td>
                  <td style={{ padding: "12px" }}>n sides of equal length & equal angles</td>
                  <td style={{ padding: "12px" }}>P = n × Side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: Understanding Area & Tiling</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem" }}>1. What is Area?</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              The area of a closed figure is the measure of the flat surface region enclosed inside its boundary. Area is always measured in square units (e.g., sq cm, sq m, sq ft, or sq units).
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem" }}>2. Why Use Squares to Measure Area?</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Why don't we measure area using circles or triangles? Circles leave empty gaps when packed together and cannot cover a surface without overlapping or leaving holes. Unit squares tile the plane perfectly without any gaps or overlaps, making them the standard unit for measuring 2D space.
            </p>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. Standard Area Formulas</h3>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.8", paddingLeft: "20px", margin: 0 }}>
              <li>Area of a Rectangle = Length × Breadth (l × b)</li>
              <li>Area of a Square = Side × Side (s × s)</li>
              <li>Area of a Right Triangle = 1/2 × Base × Height (Half the area of its enclosing rectangle)</li>
            </ul>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>4. Estimating Area on Square Grid Paper</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              To estimate or calculate the area of irregular or curved shapes on a grid:
            </p>
            <ol style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
              <li>Count fully covered squares as 1 sq unit.</li>
              <li>Ignore square portions that are less than half covered.</li>
              <li>Count square portions that are more than half covered as 1 sq unit.</li>
              <li>Count square portions that are exactly half covered as 1/2 sq unit.</li>
            </ol>
          </div>
        </section>
      )}

      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Relationships Between Area and Perimeter</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem" }}>1. Same Area, Different Perimeters</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Figures with the exact same area can have very different perimeters! For example, consider rectangles with an area of 24 square units:
            </p>
          </div>

          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Dimensions (l × b)</th>
                  <th style={{ padding: "12px" }}>Area</th>
                  <th style={{ padding: "12px" }}>Perimeter Calculation</th>
                  <th style={{ padding: "12px" }}>Perimeter</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px" }}>1 unit × 24 units</td>
                  <td style={{ padding: "12px" }}>24 sq units</td>
                  <td style={{ padding: "12px" }}>2 × (1 + 24) = 2 × 25</td>
                  <td style={{ padding: "12px", color: "#f87171", fontWeight: "bold" }}>50 units (Largest)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px" }}>2 units × 12 units</td>
                  <td style={{ padding: "12px" }}>24 sq units</td>
                  <td style={{ padding: "12px" }}>2 × (2 + 12) = 2 × 14</td>
                  <td style={{ padding: "12px" }}>28 units</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px" }}>3 units × 8 units</td>
                  <td style={{ padding: "12px" }}>24 sq units</td>
                  <td style={{ padding: "12px" }}>2 × (3 + 8) = 2 × 11</td>
                  <td style={{ padding: "12px" }}>22 units</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px" }}>4 units × 6 units</td>
                  <td style={{ padding: "12px" }}>24 sq units</td>
                  <td style={{ padding: "12px" }}>2 × (4 + 6) = 2 × 10</td>
                  <td style={{ padding: "12px", color: "#34d399", fontWeight: "bold" }}>20 units (Smallest)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: "#065f46", border: "1px solid #34d399", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
            <strong style={{ color: "#d1fae5" }}>Golden Rule:</strong> <span style={{ color: "#ecfdf5" }}>For a fixed area, a square-like shape has the smallest perimeter, whereas long, narrow ribbon-like rectangles have the largest perimeter.</span>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Paper Folding Puzzle: Folding a Square in Half</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              If a square piece of paper is folded in half and cut into two identical rectangles, what happens to the perimeter?
            </p>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
              <li>Let the square have side s. Original Perimeter = 4s.</li>
              <li>Each rectangle has length s and breadth s/2. Perimeter of one rectangle = 2(s + s/2) = 3s.</li>
              <li>Sum of perimeters of both rectangles = 3s + 3s = 6s.</li>
              <li>Notice that 6s = 1.5 × 4s! Thus, the sum of perimeters of both cut rectangles is always 1.5 times (1½ times) the perimeter of the original square.</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Area Maze Puzzles & Floor Plans</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem" }}>1. Solving Area Mazes</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              In an area maze puzzle, you use the relationship Area = Length × Width to deduce missing dimensions without using fractions or decimals wherever possible.
            </p>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Compound / Irregular Shape Area</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              To find the area of an L-shaped or stepped polygon:
            </p>
            <ol style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
              <li>Split the figure into simple non-overlapping rectangles.</li>
              <li>Calculate the area of each individual rectangle.</li>
              <li>Add all individual areas together.</li>
            </ol>
          </div>
        </section>
      )}

      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Practice & Exercise Vault</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q1. A rectangular field is 230 m long and 160 m wide. A farmer wants to fence it with 3 rounds of rope. What is the total length of rope needed?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Perimeter of field = 2 × (230 m + 160 m) = 2 × 390 m = 780 m. Rope needed for 3 rounds = 3 × 780 m = <strong>2,340 metres</strong>.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q2. Akshi runs along a rectangular track of 70 m × 40 m for 5 rounds. Toshi runs along an inner track of 60 m × 30 m for 7 rounds. Who covers a longer distance?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Akshi's track perimeter = 2 × (70 + 40) = 220 m. Total in 5 rounds = 5 × 220 m = 1,100 m. Toshi's track perimeter = 2 × (60 + 30) = 180 m. Total in 7 rounds = 7 × 180 m = 1,260 m. <strong>Toshi ran a longer distance by 160 metres</strong>.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q3. A square park has a side of 75 m. What is the cost of fencing it at 40 per metre?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Perimeter of square park = 4 × 75 m = 300 m. Cost of fencing = 300 m × 40/m = <strong>12,000</strong>.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q4. Four square flower beds, each of side 2 m, are dug at the corners of a rectangular garden that is 15 m long and 12 m wide. Find the area remaining for the lawn.
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Total garden area = 15 m × 12 m = 180 sq m. Area of 1 square bed = 2 m × 2 m = 4 sq m. Area of 4 beds = 4 × 4 = 16 sq m. Remaining lawn area = 180 - 16 = <strong>164 square metres</strong>.
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