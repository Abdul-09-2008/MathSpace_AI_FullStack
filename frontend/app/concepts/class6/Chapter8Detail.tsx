"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter8DetailProps {
  onBack: () => void;
}

export default function Chapter8Detail({ onBack }: Chapter8DetailProps) {
  const TOTAL_MODULES = 6;
  const CHAPTER_ID = "playing-with-constructions";

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
          MATHSPACE / CLASS 6 / CHAPTER 8
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
            GANITA PRAKASH | CHAPTER 8: PLAYING WITH CONSTRUCTIONS
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 8: Playing with Constructions — Complete Course Guide
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
          <strong style={{ color: "#f8fafc" }}>Course Overview:</strong> Welcome to Chapter 8: Playing with Constructions! Geometry comes alive when we draw and construct shapes using physical instruments. In this chapter from Ganita Prakash, you will master the ruler and compass to construct circles, squares, rectangles, perpendiculars, and composite artwork. This guide covers every concept, property, construction step, and puzzle in detail!
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: Tools & Circle" },
          { id: 2, label: "Module 2: Properties & Naming" },
          { id: 3, label: "Module 3: Construction Steps" },
          { id: 4, label: "Module 4: Diagonals & Rectangles" },
          { id: 5, label: "Module 5: Equidistant Points & House" },
          { id: 6, label: "Module 6: Practice Vault" },
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
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: Geometric Tools, Curves & The Circle</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Freehand vs. Tool-Based Drawing</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                Freehand sketches give quick rough ideas, but geometric tools (ruler and compass) provide precision and mathematical exactness.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. What is a Curve?</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                In geometry, a curve is any shape or line that can be drawn on paper using a pencil. It includes straight lines, circles, arcs, and wavy patterns.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. The Compass & The Definition of a Circle</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li>When you fix the metal tip of a compass at a point P and keep the distance to the pencil tip constant (e.g., 4 cm), rotating the pencil generates a closed curve called a circle.</li>
                <li><strong style={{ color: "#f8fafc" }}>Centre:</strong> The fixed central point P where the compass tip is placed.</li>
                <li><strong style={{ color: "#f8fafc" }}>Radius:</strong> The constant distance from the centre to any point on the boundary of the circle.</li>
                <li><strong style={{ color: "#38bdf8" }}>Key Property:</strong> All points on a circle are at the exact same distance (radius) from its centre.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Module 2 View */}
      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: Defining Squares, Rectangles & Naming Rules</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Properties of a Rectangle</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li><strong style={{ color: "#f8fafc" }}>Property R1:</strong> Opposite sides are equal in length (e.g., AB = CD and AD = BC).</li>
                <li><strong style={{ color: "#f8fafc" }}>Property R2:</strong> All four interior angles are right angles (each equals 90°).</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Properties of a Square</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li><strong style={{ color: "#f8fafc" }}>Property S1:</strong> All four sides are equal in length (AB = BC = CD = DA).</li>
                <li><strong style={{ color: "#f8fafc" }}>Property S2:</strong> All four interior angles are right angles (each equals 90°).</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. Crucial Naming Rule for Quadrilaterals</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
                When naming a rectangle or square, the letters representing the vertices MUST be listed in consecutive order going around the boundary (clockwise or counter-clockwise).
              </p>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li>For a square with vertices P, Q, R, S: valid names are PQRS, SPQR, RSPQ, QRSP.</li>
                <li><strong style={{ color: "#f87171" }}>Invalid Name:</strong> PQSR is INCORRECT because Q and S are opposite corners across the diagonal, not adjacent!</li>
              </ul>
            </div>
          </div>

          <h3 style={{ color: "#f8fafc", fontSize: "1.15rem", marginBottom: "12px" }}>Rectangle vs. Square Comparison Table</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Feature / Property</th>
                  <th style={{ padding: "12px" }}>Rectangle</th>
                  <th style={{ padding: "12px" }}>Square</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Side Lengths</td>
                  <td style={{ padding: "12px" }}>Opposite sides are equal (Length & Breadth)</td>
                  <td style={{ padding: "12px" }}>All 4 sides are strictly equal</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Interior Angles</td>
                  <td style={{ padding: "12px" }}>All 4 angles equal 90°</td>
                  <td style={{ padding: "12px" }}>All 4 angles equal 90°</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Diagonals Length</td>
                  <td style={{ padding: "12px" }}>Diagonals are EQUAL in length</td>
                  <td style={{ padding: "12px" }}>Diagonals are EQUAL in length</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Diagonal Corner Division</td>
                  <td style={{ padding: "12px" }}>Divides 90° into unequal parts (e.g., 60° & 30°)</td>
                  <td style={{ padding: "12px" }}>Bisects 90° into two equal 45° angles</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Naming Rule</td>
                  <td style={{ padding: "12px" }}>Must follow consecutive boundary vertices</td>
                  <td style={{ padding: "12px" }}>Must follow consecutive boundary vertices</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Module 3 View */}
      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Step-by-Step Construction Methods</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Constructing a Square of Side 6 cm (PQRS)</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li><strong style={{ color: "#f8fafc" }}>Step 1:</strong> Draw a line segment PQ = 6 cm using a ruler.</li>
                <li><strong style={{ color: "#f8fafc" }}>Step 2:</strong> At point P, draw a ray perpendicular to PQ (at 90° using a protractor or compass).</li>
                <li><strong style={{ color: "#f8fafc" }}>Step 3:</strong> Set compass span to 6 cm. With P as centre, draw an arc on the perpendicular ray to locate point S (PS = 6 cm).</li>
                <li><strong style={{ color: "#f8fafc" }}>Step 4:</strong> At point Q, draw a perpendicular ray to PQ.</li>
                <li><strong style={{ color: "#f8fafc" }}>Step 5:</strong> With Q as centre and 6 cm compass span, draw an arc to locate point R (QR = 6 cm).</li>
                <li><strong style={{ color: "#f8fafc" }}>Step 6:</strong> Join S and R to complete square PQRS.</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Length Transfer Using Compass</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                Instead of measuring with a ruler, you can open compass tips to match a line segment's endpoints (e.g. AF) and transfer that exact span elsewhere on a line to mark identical side lengths without trial and error!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Module 4 View */}
      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Breaking Rectangles & Diagonals</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Breaking Rectangles into Identical Squares</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li>To construct a rectangle divisible into 2 identical squares, set Length = 2 x Breadth (e.g., 8 cm x 4 cm).</li>
                <li>To construct a rectangle divisible into 3 identical squares, set Length = 3 x Breadth (e.g., 9 cm x 3 cm).</li>
                <li><strong style={{ color: "#f87171" }}>Restriction:</strong> Rectangles where the length is not a whole-number multiple of breadth (e.g., 4 cm x 2.5 cm or 7 cm x 2 cm) CANNOT be divided into identical squares.</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Properties of Diagonals in Rectangles and Squares</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li><strong style={{ color: "#f8fafc" }}>Diagonals (PR & QS):</strong> Line segments connecting opposite corners.</li>
                <li><strong style={{ color: "#f8fafc" }}>Equality:</strong> In both rectangles and squares, the two diagonals are always equal in length (PR = QS).</li>
                <li><strong style={{ color: "#f8fafc" }}>Angle Division in Squares:</strong> A diagonal in a square divides the 90° corner angle into two equal 45° angles.</li>
                <li><strong style={{ color: "#f8fafc" }}>Angle Division in Rectangles:</strong> In a non-square rectangle, a diagonal divides the 90° corner angle into unequal complementary angles (e.g., 60° & 30°, or 50° & 40°).</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. Constructing a Rectangle from Side & Diagonal (Side = 5 cm, Diagonal = 7 cm)</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li><strong style={{ color: "#f8fafc" }}>Step 1:</strong> Construct base CD = 5 cm.</li>
                <li><strong style={{ color: "#f8fafc" }}>Step 2:</strong> Draw line perpendicular to CD at C.</li>
                <li><strong style={{ color: "#f8fafc" }}>Step 3:</strong> Set compass radius to 7 cm. With D as centre, draw an arc intersecting the perpendicular line. The intersection point is vertex B!</li>
                <li><strong style={{ color: "#f8fafc" }}>Step 4:</strong> Draw perpendiculars from D and B to locate fourth vertex A.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Module 5 View */}
      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Points Equidistant from Two Points & The House Construction</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Intersecting Arcs Principle (No Trial & Error)</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: "0 0 8px 0" }}>
                To find a point A that is at a distance of 5 cm from two fixed points B and C:
              </p>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: 0 }}>
                <li>Draw an arc of radius 5 cm with centre B.</li>
                <li>Draw an arc of radius 5 cm with centre C.</li>
                <li>The point where the two arcs intersect is the required point A! This eliminates all trial and error.</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Constructing the 'House' Figure (All sides = 5 cm)</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: 0 }}>
                <li>Construct a square base BCED of side 5 cm.</li>
                <li>Draw arcs of 5 cm radius centred at B and C to intersect at roof peak point A.</li>
                <li>Draw straight roof lines AB and AC, and complete the bottom door (1 cm x 2 cm).</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Module 6 View */}
      {activeTab === 6 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 6: Practice & Exercise Vault</h2>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "20px" }}>
            Directly sourced from Chapter 8 textbook exercises:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 1: Which of the following is NOT a valid name for a square with vertices P, Q, R, S in order?
              </h4>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>1. PQSR &nbsp;&nbsp; 2. SPQR &nbsp;&nbsp; 3. RSPQ &nbsp;&nbsp; 4. QRSP</p>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> <strong style={{ color: "#f87171" }}>PQSR is invalid.</strong> Names must follow adjacent vertices along the boundary.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 2: Construct a rectangle where one diagonal divides opposite angles into 45° and 45°. What shape is it?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Since the diagonal divides the 90° angle into equal 45° angles, adjacent sides are equal. <strong>The rectangle becomes a SQUARE!</strong>
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 3: Is there a 4-sided figure in which all sides are equal in length but is NOT a square?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> <strong>YES! It is a Rhombus.</strong> It has 4 equal sides, but its interior angles are not 90°.
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