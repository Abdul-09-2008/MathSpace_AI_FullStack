"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter9DetailProps {
  onBack: () => void;
}

export default function Chapter9Detail({ onBack }: Chapter9DetailProps) {
  const TOTAL_MODULES = 5;
  const CHAPTER_ID = "symmetry";

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
          MATHSPACE / CLASS 6 / CHAPTER 9
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
            GANITA PRAKASH | CHAPTER 9: SYMMETRY[cite: 27]
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 9: Symmetry — Master Course Complete Reference[cite: 27]
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
          <strong style={{ color: "#f8fafc" }}>Course Overview:</strong> Welcome to Chapter 9: Symmetry! Symmetry is one of the most visual and harmonious concepts in mathematics, art, and nature[cite: 27]. In this master course, you will learn about Line Symmetry (mirror halves and folding axes), Rotational Symmetry (center and angle of rotation, order of rotation), and how balanced geometrical patterns appear in everyday objects, alphabets, architecture, and cultural designs like rangolis[cite: 27].
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: Line Symmetry" },
          { id: 2, label: "Module 2: Capital Letters" },
          { id: 3, label: "Module 3: Rotational Symmetry" },
          { id: 4, label: "Module 4: Art & Nature" },
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

      {/* Module 1 View */}
      {activeTab === 1 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: Line Symmetry (Reflectional Symmetry)[cite: 27]</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. What is Line Symmetry?[cite: 27]</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                A figure has line symmetry (or reflectional symmetry) if it can be folded along a straight line such that the two halves match each other completely and overlap perfectly[cite: 27]. The line along which the figure is folded is called the line of symmetry or axis of symmetry[cite: 27].
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Mirror Reflection & Inversion[cite: 27]</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                When a shape or object is reflected across a line of symmetry, every point on one side corresponds to an identical point on the other side at the exact same distance from the axis[cite: 27]. In a flat mirror, this causes lateral inversion (left and right appear interchanged), while distances from the mirror line remain strictly equal[cite: 27].
              </p>
            </div>
          </div>

          <h3 style={{ color: "#f8fafc", fontSize: "1.15rem", marginBottom: "12px" }}>Lines of Symmetry for Standard Shapes[cite: 27]</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Geometric Figure / Shape[cite: 27]</th>
                  <th style={{ padding: "12px" }}>Number of Lines of Symmetry[cite: 27]</th>
                  <th style={{ padding: "12px" }}>Description of Axes[cite: 27]</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Isosceles Triangle[cite: 27]</td>
                  <td style={{ padding: "12px" }}>1[cite: 27]</td>
                  <td style={{ padding: "12px" }}>Line passing through the top vertex bisecting the base[cite: 27].</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Equilateral Triangle[cite: 27]</td>
                  <td style={{ padding: "12px" }}>3[cite: 27]</td>
                  <td style={{ padding: "12px" }}>3 lines bisecting each angle and opposite side[cite: 27].</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Rectangle[cite: 27]</td>
                  <td style={{ padding: "12px" }}>2[cite: 27]</td>
                  <td style={{ padding: "12px" }}>Horizontal and vertical lines passing through the center[cite: 27].</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Square[cite: 27]</td>
                  <td style={{ padding: "12px" }}>4[cite: 27]</td>
                  <td style={{ padding: "12px" }}>2 mid-side lines + 2 diagonal lines[cite: 27].</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Regular Pentagon[cite: 27]</td>
                  <td style={{ padding: "12px" }}>5[cite: 27]</td>
                  <td style={{ padding: "12px" }}>5 lines connecting each vertex to the opposite side's midpoint[cite: 27].</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Regular Hexagon[cite: 27]</td>
                  <td style={{ padding: "12px" }}>6[cite: 27]</td>
                  <td style={{ padding: "12px" }}>3 main diagonals + 3 lines joining opposite side midpoints[cite: 27].</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Circle[cite: 27]</td>
                  <td style={{ padding: "12px" }}>Infinite (Uncountable)[cite: 27]</td>
                  <td style={{ padding: "12px" }}>Any straight line passing through the circle's center[cite: 27].</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Module 2 View */}
      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: Symmetry in English Capital Letters[cite: 27, 28]</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            English capital letters provide wonderful examples of vertical, horizontal, and dual line symmetry[cite: 27]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Vertical Line of Symmetry Only[cite: 27, 28]</h3>
              <p style={{ color: "#38bdf8", fontSize: "1.1rem", fontWeight: "bold", margin: "8px 0" }}>
                A, M, T, U, V, W, Y[cite: 27, 28]
              </p>
              <p style={{ color: "#cbd5e1", margin: 0, fontSize: "0.9rem" }}>Folding left to right matches perfectly[cite: 27].</p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Horizontal Line of Symmetry Only[cite: 27, 28]</h3>
              <p style={{ color: "#38bdf8", fontSize: "1.1rem", fontWeight: "bold", margin: "8px 0" }}>
                B, C, D, E, K[cite: 27, 28]
              </p>
              <p style={{ color: "#cbd5e1", margin: 0, fontSize: "0.9rem" }}>Folding top to bottom matches perfectly[cite: 27].</p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. Both Vertical & Horizontal Symmetry[cite: 27, 28]</h3>
              <p style={{ color: "#38bdf8", fontSize: "1.1rem", fontWeight: "bold", margin: "8px 0" }}>
                H, I, O, X[cite: 27, 28]
              </p>
              <p style={{ color: "#cbd5e1", margin: 0, fontSize: "0.9rem" }}>Contain two perpendicular axes of symmetry[cite: 27].</p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>4. No Line of Symmetry[cite: 28]</h3>
              <p style={{ color: "#f87171", fontSize: "1.1rem", fontWeight: "bold", margin: "8px 0" }}>
                F, G, J, L, N, P, Q, R, S, Z[cite: 28]
              </p>
              <p style={{ color: "#cbd5e1", margin: 0, fontSize: "0.9rem" }}>Possess no lines of reflectional symmetry[cite: 28].</p>
            </div>
          </div>
        </section>
      )}

      {/* Module 3 View */}
      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Rotational Symmetry[cite: 28]</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. What is Rotational Symmetry?[cite: 28]</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                A shape has rotational symmetry if it can be rotated around a fixed central point by an angle less than 360° such that it looks exactly identical to its original position[cite: 28].
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Key Concepts & Formula[cite: 28]</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li><strong style={{ color: "#f8fafc" }}>Centre of Rotation:</strong> The fixed point around which the shape turns[cite: 28].</li>
                <li><strong style={{ color: "#f8fafc" }}>Angle of Rotation:</strong> The minimum angle required for the shape to fit onto its original outline during rotation[cite: 28].</li>
                <li><strong style={{ color: "#f8fafc" }}>Order of Rotational Symmetry:</strong> The total number of times the shape matches its original appearance during one complete 360° turn[cite: 28].</li>
                <li><strong style={{ color: "#38bdf8" }}>Formula:</strong> Order of Rotational Symmetry = 360° / Angle of Rotation[cite: 28].</li>
              </ul>
            </div>
          </div>

          <h3 style={{ color: "#f8fafc", fontSize: "1.15rem", marginBottom: "12px" }}>Rotational Symmetry Table[cite: 28]</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Shape / Object[cite: 28]</th>
                  <th style={{ padding: "12px" }}>Centre of Rotation[cite: 28]</th>
                  <th style={{ padding: "12px" }}>Angle of Rotation[cite: 28]</th>
                  <th style={{ padding: "12px" }}>Order of Rotation[cite: 28]</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Equilateral Triangle[cite: 28]</td>
                  <td style={{ padding: "12px" }}>Centroid / Center[cite: 28]</td>
                  <td style={{ padding: "12px" }}>120°[cite: 28]</td>
                  <td style={{ padding: "12px" }}>3[cite: 28]</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Square[cite: 28]</td>
                  <td style={{ padding: "12px" }}>Intersection of Diagonals[cite: 28]</td>
                  <td style={{ padding: "12px" }}>90°[cite: 28]</td>
                  <td style={{ padding: "12px" }}>4[cite: 28]</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Regular Pentagon[cite: 28]</td>
                  <td style={{ padding: "12px" }}>Center of Polygon[cite: 28]</td>
                  <td style={{ padding: "12px" }}>72°[cite: 28]</td>
                  <td style={{ padding: "12px" }}>5[cite: 28]</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Regular Hexagon[cite: 28]</td>
                  <td style={{ padding: "12px" }}>Center of Polygon[cite: 28]</td>
                  <td style={{ padding: "12px" }}>60°[cite: 28]</td>
                  <td style={{ padding: "12px" }}>6[cite: 28]</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>3-Blade Ceiling Fan[cite: 28]</td>
                  <td style={{ padding: "12px" }}>Central Motor Axis[cite: 28]</td>
                  <td style={{ padding: "12px" }}>120°[cite: 28]</td>
                  <td style={{ padding: "12px" }}>3[cite: 28]</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Circle[cite: 28]</td>
                  <td style={{ padding: "12px" }}>Center of Circle[cite: 28]</td>
                  <td style={{ padding: "12px" }}>Any angle (0° to 360°)[cite: 28]</td>
                  <td style={{ padding: "12px" }}>Infinite[cite: 28]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Module 4 View */}
      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Symmetry in Art, Architecture & Nature[cite: 28]</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Symmetry is not just a mathematical concept—it is a cornerstone of artistic beauty and natural design[cite: 28]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Rangoli & Mandala Patterns[cite: 28]</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                Traditional floor designs combine both multiple lines of symmetry and rotational symmetry around a central dot grid[cite: 28].
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Nature[cite: 28]</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                Butterfly wings, starfish, flowers (like sunflowers and lilies), and snowflakes showcase breathtaking bilateral and radial symmetry[cite: 28].
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. Architecture[cite: 28]</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                Famous historical monuments like the Taj Mahal in Agra utilize strict bilateral symmetry in their facades and gardens to create balance and grandeur[cite: 28].
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Module 5 View */}
      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Practice & Exercise Vault[cite: 28, 29]</h2>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "20px" }}>
            Directly sourced from Chapter 9 exercise materials[cite: 28, 29]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 1: A square paper is folded in half along its diagonal. How many lines of symmetry does the resulting isosceles right-angled triangle have?[cite: 28]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> An isosceles right-angled triangle has two equal legs. It has <strong>1 line of symmetry</strong> passing from the right-angled vertex to the midpoint of the hypotenuse[cite: 28, 29].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 2: Can a shape have rotational symmetry of order 1? What does order 1 mean?[cite: 29]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Every shape completes a full 360° turn to return to its original position. Having an order of 1 means it only looks identical after a full 360° rotation (it possesses no special rotational symmetry)[cite: 29].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 3: Name a shape that has both 4 lines of symmetry and rotational symmetry of order 4.[cite: 29]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> <strong>A Square!</strong> It has 4 lines of symmetry and an angle of rotation of 90°, giving it a rotational symmetry order of 4[cite: 29].
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