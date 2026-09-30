"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter1DetailProps {
  onBack: () => void;
}

export default function Chapter1Detail({ onBack }: Chapter1DetailProps) {
  const TOTAL_MODULES = 5;
  const CHAPTER_ID = "patterns-in-mathematics";

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
          MATHSPACE / CLASS 6 / CHAPTER 1
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
          Chapter 1: Patterns in Mathematics
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
          <strong style={{ color: "#f8fafc" }}>Teacher's Welcome Note:</strong> Hello Class 6 Student! Mathematics is not just about computing long sums—it is the creative search for beautiful patterns and the reasons why they exist[cite: 4]. In this complete guide, you will master number sequences, visual dot arrangements, interconnected sequence rules, and geometric shape patterns step-by-step[cite: 4]!
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: What is Math & Number Theory?" },
          { id: 2, label: "Module 2: Visualising Numbers with Shapes" },
          { id: 3, label: "Module 3: Magical Relationships" },
          { id: 4, label: "Module 4: Patterns in Geometry" },
          { id: 5, label: "Module 5: Complete Question Vault" },
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
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: What is Mathematics & Number Theory?</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Mathematics is defined as the search for patterns and for the explanations as to why those patterns exist[cite: 4]. Patterns occur everywhere around us in nature, weather, the movement of the sun, moon, and stars, and daily activities like cooking, shopping, and building bridges[cite: 4]. Because searching for patterns is fun and creative, mathematicians consider mathematics to be both an art and a science[cite: 4].
          </p>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            The specific branch of mathematics that studies patterns in whole numbers (0, 1, 2, 3, 4, ...) is called <strong>Number Theory</strong>[cite: 4]. Number sequences are ordered lists of numbers that follow specific rules[cite: 4].
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Sequence Name</th>
                  <th style={{ padding: "12px" }}>First Few Terms</th>
                  <th style={{ padding: "12px" }}>Rule / Pattern Explanation</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>All 1's</td>
                  <td style={{ padding: "12px" }}>1, 1, 1, 1, 1, 1, ...</td>
                  <td style={{ padding: "12px" }}>Every term is constantly 1.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Counting Numbers</td>
                  <td style={{ padding: "12px" }}>1, 2, 3, 4, 5, 6, 7, ...</td>
                  <td style={{ padding: "12px" }}>Start at 1, add 1 to get the next term.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Odd Numbers</td>
                  <td style={{ padding: "12px" }}>1, 3, 5, 7, 9, 11, 13, ...</td>
                  <td style={{ padding: "12px" }}>Start at 1, add 2 consecutively.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Even Numbers</td>
                  <td style={{ padding: "12px" }}>2, 4, 6, 8, 10, 12, 14, ...</td>
                  <td style={{ padding: "12px" }}>Start at 2, add 2 consecutively.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Triangular Numbers</td>
                  <td style={{ padding: "12px" }}>1, 3, 6, 10, 15, 21, 28, ...</td>
                  <td style={{ padding: "12px" }}>Add consecutive counting numbers (1, +2, +3, +4...).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Square Numbers</td>
                  <td style={{ padding: "12px" }}>1, 4, 9, 16, 25, 36, 49, ...</td>
                  <td style={{ padding: "12px" }}>Multiply a counting number by itself (1×1, 2×2, 3×3...).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Cube Numbers</td>
                  <td style={{ padding: "12px" }}>1, 8, 27, 64, 125, 216, ...</td>
                  <td style={{ padding: "12px" }}>Multiply a number three times (1×1×1, 2×2×2, 3×3×3...).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Virahaṅka Numbers</td>
                  <td style={{ padding: "12px" }}>1, 2, 3, 5, 8, 13, 21, ...</td>
                  <td style={{ padding: "12px" }}>Start with 1, 2; each next term is sum of previous two.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Powers of 2</td>
                  <td style={{ padding: "12px" }}>1, 2, 4, 8, 16, 32, 64, ...</td>
                  <td style={{ padding: "12px" }}>Start at 1, multiply by 2 to get next term.</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Powers of 3</td>
                  <td style={{ padding: "12px" }}>1, 3, 9, 27, 81, 243, ...</td>
                  <td style={{ padding: "12px" }}>Start at 1, multiply by 3 to get next term.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: Visualising Numbers with Pictures & Shapes</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Visualising numbers using dot diagrams helps us understand why sequences behave the way they do and why they earn their specific names[cite: 4]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>• Triangular Numbers (1, 3, 6, 10, 15...)</h4>
              <p style={{ color: "#cbd5e1", margin: 0 }}>Dots can be arranged into filled equilateral triangles[cite: 4].</p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>• Square Numbers (1, 4, 9, 16, 25...)</h4>
              <p style={{ color: "#cbd5e1", margin: 0 }}>Dots form square grid arrays with equal rows and columns[cite: 5].</p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>• Cube Numbers (1, 8, 27, 64, 125...)</h4>
              <p style={{ color: "#cbd5e1", margin: 0 }}>Represent 3-dimensional solid cubic blocks of unit cubes[cite: 5].</p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>• Hexagonal Numbers (1, 7, 19, 37, 61...)</h4>
              <p style={{ color: "#cbd5e1", margin: 0 }}>Form nested hexagonal dot rings[cite: 5].</p>
            </div>

            <div style={{ background: "#0f172a", border: "1px solid #38bdf8", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>★ Overlapping Role</h4>
              <p style={{ color: "#38bdf8", margin: 0 }}>
                The number <strong>36</strong> is unique—it is both a triangular number and a square number[cite: 5]!
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Magical Relationships Between Sequences</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Sequences are deeply connected to one another through beautiful mathematical rules[cite: 5]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>1. Sum of Consecutive Odd Numbers</h4>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>
                Adding odd numbers starting from 1 always yields square numbers[cite: 5]!
              </p>
              <div style={{ background: "#0f172a", padding: "8px 12px", borderRadius: "6px", fontFamily: "monospace", color: "#f8fafc" }}>
                1 = 1 | 1 + 3 = 4 | 1 + 3 + 5 = 9 | 1 + 3 + 5 + 7 = 16 | 1 + 3 + 5 + 7 + 9 = 25[cite: 5]
              </div>
              <ul style={{ color: "#94a3b8", fontSize: "0.9rem", margin: "8px 0 0 20px" }}>
                <li>Sum of first 10 odd numbers = 100 (10×10)[cite: 5].</li>
                <li>Sum of first 100 odd numbers = 10,000 (100×100)[cite: 5].</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>2. Adding Counting Numbers Up and Down</h4>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>
                Adding numbers up to <i>n</i> and back down gives square numbers[cite: 5]!
              </p>
              <div style={{ background: "#0f172a", padding: "8px 12px", borderRadius: "6px", fontFamily: "monospace", color: "#f8fafc" }}>
                1 + 2 + 1 = 4 | 1 + 2 + 3 + 2 + 1 = 9 | 1 + 2 + 3 + 4 + 3 + 2 + 1 = 16[cite: 5]<br />
                1 + 2 + ... + 100 + ... + 2 + 1 = 10,000[cite: 5]
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>3. Consecutive Triangular Numbers</h4>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>
                Adding adjacent triangular numbers produces square numbers[cite: 5]!
              </p>
              <div style={{ background: "#0f172a", padding: "8px 12px", borderRadius: "6px", fontFamily: "monospace", color: "#f8fafc" }}>
                1 + 3 = 4 | 3 + 6 = 9 | 6 + 10 = 16 | 10 + 15 = 25[cite: 5]
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>4. Triangular Numbers to Hexagonal</h4>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>
                Multiply triangular numbers by 6 and add 1[cite: 5]:
              </p>
              <div style={{ background: "#0f172a", padding: "8px 12px", borderRadius: "6px", fontFamily: "monospace", color: "#f8fafc" }}>
                (1 × 6) + 1 = 7 | (3 × 6) + 1 = 19 | (6 × 6) + 1 = 37 | (10 × 6) + 1 = 61[cite: 5]
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>5. Sum of Hexagonal Numbers</h4>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>
                Adding hexagonal numbers gives cube numbers[cite: 5]!
              </p>
              <div style={{ background: "#0f172a", padding: "8px 12px", borderRadius: "6px", fontFamily: "monospace", color: "#f8fafc" }}>
                1 | 1 + 7 = 8 | 1 + 7 + 19 = 27 | 1 + 7 + 19 + 37 = 64[cite: 5]
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>6. Powers of 2 Accumulation</h4>
              <p style={{ color: "#cbd5e1", margin: 0 }}>
                Adding powers of 2 starting at 1 (1, 1+2=3, 1+2+4=7, 1+2+4+8=15...)[cite: 5]. If you add 1 to each sum, you get the sequence of Powers of 2 (2, 4, 8, 16...)[cite: 5].
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Patterns in Geometry & Shape Sequences</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Geometry studies patterns in shapes (1D, 2D, and 3D)[cite: 5]. Shape sequences often link directly back to number sequences[cite: 5]:
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Shape Sequence</th>
                  <th style={{ padding: "12px" }}>Visual Description</th>
                  <th style={{ padding: "12px" }}>Connected Number Sequence</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Regular Polygons</td>
                  <td style={{ padding: "12px" }}>Triangle, Square, Pentagon, Hexagon, Heptagon, Octagon...</td>
                  <td style={{ padding: "12px" }}>Number of sides & corners = 3, 4, 5, 6, 7, 8... (Counting numbers starting at 3).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Complete Graphs (K₂ to K₆)</td>
                  <td style={{ padding: "12px" }}>Graphs where every vertex connects to every other vertex.</td>
                  <td style={{ padding: "12px" }}>Number of lines = 1, 3, 6, 10, 15... (Triangular numbers).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Stacked Squares</td>
                  <td style={{ padding: "12px" }}>Grids of stacked small unit squares.</td>
                  <td style={{ padding: "12px" }}>Total small squares = 1, 4, 9, 16, 25... (Square numbers).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Stacked Triangles</td>
                  <td style={{ padding: "12px" }}>Rows of stacked unit triangles.</td>
                  <td style={{ padding: "12px" }}>Total small triangles = 1, 4, 9, 16, 25... (Square numbers).</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Koch Snowflake</td>
                  <td style={{ padding: "12px" }}>Fractal shape formed by replacing straight edges with speedbumps.</td>
                  <td style={{ padding: "12px" }}>Total line segments = 3, 12, 48, 192... (3 times Powers of 4).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Complete Practice & Question Vault</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Test your understanding with these exact textbook exercises[cite: 6]!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q1: What is the sum of the first 10 odd numbers? What about the first 100 odd numbers?[cite: 6]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> First 10 odd numbers = 10² = <strong>100</strong>[cite: 6]. First 100 odd numbers = 100² = <strong>10,000</strong>[cite: 6].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q2: Calculate: 1 + 2 + 3 + ... + 99 + 100 + 99 + ... + 3 + 2 + 1[cite: 6].
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> Peak is 100, so the sum equals 100² = <strong>10,000</strong>[cite: 6].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q3: What sequence do you get when you add consecutive pairs of triangular numbers (1+3, 3+6, 6+10...)?[cite: 6]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> 4, 9, 16, 25... which is the <strong>Square Number sequence</strong>[cite: 6].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q4: How many sides and vertices does a Regular Decagon have?[cite: 6]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> <strong>10 sides and 10 vertices</strong> (in any closed polygon, number of sides = number of corners)[cite: 6].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q5: How many line segments are in the first 3 stages of the Koch Snowflake?[cite: 6]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> <strong>3, 12, and 48</strong> line segments (3 × 4ⁿ)[cite: 6].
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