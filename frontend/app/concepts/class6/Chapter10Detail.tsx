"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter10DetailProps {
  onBack: () => void;
}

export default function Chapter10Detail({ onBack }: Chapter10DetailProps) {
  const TOTAL_MODULES = 6;
  const CHAPTER_ID = "integers";

  const { visitedModules, markModuleVisited, progressPercent } = useChapterProgress(
    CHAPTER_ID,
    TOTAL_MODULES
  );

  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    markModuleVisited(1);
  }, [markModuleVisited]);

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
          MATHSPACE / CLASS 6 / CHAPTER 10
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
            GANITA PRAKASH | CHAPTER 10: THE OTHER SIDE OF ZERO (INTEGERS)
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 10: The Other Side of Zero (Integers) — Master Course Reference Guide
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
          <strong style={{ color: "#f8fafc" }}>Course Overview:</strong> Welcome to Chapter 10: The Other Side of Zero! In this course, we extend the traditional number ray to create the full number line. By exploring real-world opposites like elevator floors, temperatures, and bank balances, you will learn how negative numbers work, how to compare them, and how to perform addition and subtraction intuitively.
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: Real-World Analogies" },
          { id: 2, label: "Module 2: Number Line & Definitions" },
          { id: 3, label: "Module 3: Comparing & Ordering" },
          { id: 4, label: "Module 4: Addition Rules" },
          { id: 5, label: "Module 5: Subtraction Rules" },
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
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: The Need for Negative Numbers & Real-World Analogies</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Up until now, you have worked with whole numbers starting at zero (0, 1, 2, 3...). However, many real-world situations involve opposite directions or quantities that lie below a reference point of zero. To represent these, mathematics introduces negative numbers.
          </p>

          <h3 style={{ color: "#f8fafc", fontSize: "1.15rem", marginBottom: "12px" }}>Real-World Situations & Integer Analogies</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Real-World Situation</th>
                  <th style={{ padding: "12px" }}>Zero Reference Point (0)</th>
                  <th style={{ padding: "12px" }}>Positive Integers (+)</th>
                  <th style={{ padding: "12px" }}>Negative Integers (-)</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Multistory Building</td>
                  <td style={{ padding: "12px" }}>Ground Level (Floor 0)</td>
                  <td style={{ padding: "12px" }}>Floors above ground (+1, +2, +3)</td>
                  <td style={{ padding: "12px" }}>Basement floors below ground (-1, -2, -3)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Underground Mine Shaft</td>
                  <td style={{ padding: "12px" }}>Ground Entrance Level</td>
                  <td style={{ padding: "12px" }}>Elevation above ground (+50 m)</td>
                  <td style={{ padding: "12px" }}>Depth inside mine below ground (-50 m)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Temperature</td>
                  <td style={{ padding: "12px" }}>Freezing point of water (0°C)</td>
                  <td style={{ padding: "12px" }}>Temperatures warmer than 0°C (+15°C)</td>
                  <td style={{ padding: "12px" }}>Freezing temperatures below 0°C (-5°C)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Financial Transactions</td>
                  <td style={{ padding: "12px" }}>Break-even (0 balance)</td>
                  <td style={{ padding: "12px" }}>Money gained / Profit (+100)</td>
                  <td style={{ padding: "12px" }}>Money spent / Loss / Debt (-100)</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Sea Level Elevation</td>
                  <td style={{ padding: "12px" }}>Sea Level (0 m)</td>
                  <td style={{ padding: "12px" }}>Height above sea level (+500 m)</td>
                  <td style={{ padding: "12px" }}>Depth below ocean surface (-200 m)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Module 2 View */}
      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: The Complete Number Line & Integer Definitions</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "16px" }}>
            When we extend the positive number ray backwards through 0, we create the complete number line:
          </p>

          <div
            style={{
              background: "#0f172a",
              border: "1px solid #334155",
              padding: "16px",
              borderRadius: "8px",
              fontFamily: "monospace",
              color: "#38bdf8",
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "0.95rem",
            }}
          >
            &lt;-- (-5)···(-4)···(-3)···(-2)···(0)···(+1)···(+2)···(+3)···(+4)···(+5)···&gt;<br />
            [Negative Integers] &nbsp;&nbsp;&nbsp;&nbsp; [Origin] &nbsp;&nbsp;&nbsp;&nbsp; [Positive Integers]
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Positive Integers</h3>
              <p style={{ color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
                Numbers greater than zero (+1, +2, +3...). The '+' sign is usually omitted.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Negative Integers</h3>
              <p style={{ color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
                Numbers less than zero (-1, -2, -3...). The '-' sign is compulsory!
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. Zero (0)</h3>
              <p style={{ color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
                Lies at the center. Zero is an integer, but it is neither positive nor negative.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>4. Set of Integers (Z)</h3>
              <p style={{ color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
                The infinite set combining negative numbers, zero, and positive numbers: (..., -3, -2, -1, 0, 1, 2, 3, ...).
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Module 3 View */}
      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Comparing & Ordering Integers</h2>
          
          <div
            style={{
              background: "#1a1d24",
              borderLeft: "4px solid #38bdf8",
              padding: "16px",
              borderRadius: "0 8px 8px 0",
              color: "#cbd5e1",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            <strong style={{ color: "#f8fafc" }}>Golden Rule of Integer Comparison:</strong> Moving to the <strong style={{ color: "#38bdf8" }}>RIGHT</strong> increases value. Moving to the <strong style={{ color: "#f87171" }}>LEFT</strong> decreases value!
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Positive vs Zero vs Negative</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li>Every positive integer is greater than 0 and greater than any negative integer.</li>
                <li>Zero is greater than every negative integer (e.g., 0 &gt; -5).</li>
              </ul>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Comparing Negative Numbers</h3>
              <p style={{ color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
                For negative integers, larger numeral means smaller value: -2 lies to the right of -5, so -2 &gt; -5.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. Opposite Numbers / Additive Inverses</h3>
              <p style={{ color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
                Numbers at equal distances from 0 in opposite directions (e.g., +4 and -4). Their sum is always 0.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Module 4 View */}
      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Addition of Integers (Movement Rules)</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Addition on the number line can be visualized as steps taken from a starting point:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Movement Rules</h3>
              <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
                <li>To add a positive integer: Move to the <strong style={{ color: "#38bdf8" }}>RIGHT</strong>.</li>
                <li>To add a negative integer: Move to the <strong style={{ color: "#f87171" }}>LEFT</strong>.</li>
              </ul>
            </div>
          </div>

          <h3 style={{ color: "#f8fafc", fontSize: "1.15rem", marginBottom: "12px" }}>Addition Examples</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "14px", borderRadius: "8px", color: "#cbd5e1" }}>
              • <strong style={{ color: "#f8fafc" }}>(+3) + (+2):</strong> Start at 3, move 2 steps <strong style={{ color: "#38bdf8" }}>RIGHT</strong> → <strong style={{ color: "#38bdf8" }}>+5</strong>.
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "14px", borderRadius: "8px", color: "#cbd5e1" }}>
              • <strong style={{ color: "#f8fafc" }}>(+4) + (-6):</strong> Start at 4, move 6 steps <strong style={{ color: "#f87171" }}>LEFT</strong> → <strong style={{ color: "#f87171" }}>-2</strong>.
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "14px", borderRadius: "8px", color: "#cbd5e1" }}>
              • <strong style={{ color: "#f8fafc" }}>(-2) + (-3):</strong> Start at -2, move 3 steps <strong style={{ color: "#f87171" }}>LEFT</strong> → <strong style={{ color: "#f87171" }}>-5</strong>.
            </div>
          </div>
        </section>
      )}

      {/* Module 5 View */}
      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Subtraction of Integers (Distance & Target Level)</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "16px" }}>
            In the Ganita Prakash textbook, subtraction between two levels is defined as finding the distance / step change required to move from the starting level to the target level.
          </p>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Formulas & Universal Rule</h3>
            <p style={{ color: "#38bdf8", fontWeight: "bold", margin: "8px 0" }}>
              Subtraction Formula: Target Level - Starting Level = Steps Required
            </p>
            <p style={{ color: "#cbd5e1", margin: "8px 0 0 0", lineHeight: "1.6" }}>
              <strong style={{ color: "#f8fafc" }}>Universal Subtraction Rule:</strong> Subtracting an integer is identical to adding its opposite (additive inverse)!<br />
              • A - (+B) = A + (-B)<br />
              • A - (-B) = A + (+B) (Subtracting a basement level means moving UP floors!)
            </p>
          </div>

          <h3 style={{ color: "#f8fafc", fontSize: "1.15rem", marginBottom: "12px" }}>Subtraction Examples</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "14px", borderRadius: "8px", color: "#cbd5e1" }}>
              • <strong style={{ color: "#f8fafc" }}>(+5) - (+2)</strong> = 5 + (-2) = <strong style={{ color: "#38bdf8" }}>+3</strong>.
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "14px", borderRadius: "8px", color: "#cbd5e1" }}>
              • <strong style={{ color: "#f8fafc" }}>(+3) - (-4)</strong> = 3 + (+4) = <strong style={{ color: "#38bdf8" }}>+7</strong> (Subtracting a basement level means moving UP 7 floors!)
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "14px", borderRadius: "8px", color: "#cbd5e1" }}>
              • <strong style={{ color: "#f8fafc" }}>(-2) - (-5)</strong> = -2 + (+5) = <strong style={{ color: "#38bdf8" }}>+3</strong>.
            </div>
          </div>
        </section>
      )}

      {/* Module 6 View */}
      {activeTab === 6 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 6: Practice & Exercise Vault</h2>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "20px" }}>
            Directly sourced from Chapter 10 exercise materials:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 1: An elevator is at basement floor -3. It ascends 7 floors and then descends 2 floors. What is its final floor position?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong>
                <ol style={{ margin: "4px 0 0 20px", padding: 0 }}>
                  <li>Start at -3.</li>
                  <li>Ascend 7 floors: (-3) + (+7) = +4.</li>
                  <li>Descend 2 floors: (+4) + (-2) = +2.</li>
                  <li>Final Position: <strong style={{ color: "#ffffff" }}>Floor +2</strong> (2nd Floor above ground).</li>
                </ol>
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 2: Arrange the following integers in ascending order (smallest to largest): -8, 5, 0, -3, 2, -12.
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong>
                <ol style={{ margin: "4px 0 0 20px", padding: 0 }}>
                  <li>Negative numbers are smallest, with -12 being furthest left.</li>
                  <li>Comparing negative numbers: -12 &lt; -8 &lt; -3.</li>
                  <li>Placing 0 and positive numbers: 0 &lt; 2 &lt; 5.</li>
                  <li>Ascending Order: <strong style={{ color: "#ffffff" }}>-12, -8, -3, 0, 2, 5</strong>.</li>
                </ol>
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Question 3: At 6 AM, the temperature in Leh was -7°C. By noon, it rose by 12°C. What was the noon temperature?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong>
                <ol style={{ margin: "4px 0 0 20px", padding: 0 }}>
                  <li>Noon Temperature = (-7) + (+12).</li>
                  <li>Starting at -7 and moving 12 steps right reaches +5°C.</li>
                  <li>The noon temperature was <strong style={{ color: "#ffffff" }}>+5°C</strong>.</li>
                </ol>
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