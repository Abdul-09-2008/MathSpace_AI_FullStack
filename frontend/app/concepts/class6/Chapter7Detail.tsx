"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter7DetailProps {
  onBack: () => void;
}

export default function Chapter7Detail({ onBack }: Chapter7DetailProps) {
  const TOTAL_MODULES = 7;
  const CHAPTER_ID = "fractions";

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
          MATHSPACE / CLASS 6 / CHAPTER 7
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
            GANITA PRAKASH CLASS 6 MATHEMATICS: CHAPTER 7[cite: 20]
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 7: Fractions - Complete Master Course[cite: 20]
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
          <strong style={{ color: "#f8fafc" }}>Course Overview:</strong> Complete Textbook Reference, Visual Explanations, & Solved Practice Vault for fractions[cite: 20]. A fraction represents an equal share when a whole basic unit or a collection of items is divided into equal parts[cite: 20]. In our daily lives, we encounter fractions when sharing chapatis, rotis, guavas, sugarcane juice, or blocks of chikki[cite: 20].
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: Shares & Anatomy" },
          { id: 2, label: "Module 2: Number Line" },
          { id: 3, label: "Module 3: Types of Fractions" },
          { id: 4, label: "Module 4: Equivalent Fractions" },
          { id: 5, label: "Module 5: Comparing Fractions" },
          { id: 6, label: "Module 6: Brahmagupta's Method" },
          { id: 7, label: "Module 7: Practice Vault" },
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
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: Fractional Units & Equal Shares[cite: 20]</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem" }}>1. Fractional Units[cite: 20]</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              When one basic whole unit is split into equal parts, each individual part is called a fractional unit[cite: 20].
            </p>
          </div>

          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Equal Parts[cite: 20]</th>
                  <th style={{ padding: "12px" }}>Fractional Unit[cite: 20]</th>
                  <th style={{ padding: "12px" }}>Description / Real-Life Context[cite: 20]</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px" }}>2 Equal Parts[cite: 20]</td>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>1/2 (One Half)[cite: 20]</td>
                  <td style={{ padding: "12px" }}>When 1 chapati is shared equally between 2 children[cite: 20].</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px" }}>3 Equal Parts[cite: 20]</td>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>1/3 (One Third)[cite: 20]</td>
                  <td style={{ padding: "12px" }}>When 1 kg of guavas contains 3 equal-sized guavas[cite: 20].</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px" }}>4 Equal Parts[cite: 20]</td>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>1/4 (One Quarter)[cite: 20]</td>
                  <td style={{ padding: "12px" }}>When 1 glass of juice is shared among 4 friends[cite: 20].</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px" }}>6 Equal Parts[cite: 20]</td>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>1/6 (One Sixth)[cite: 20]</td>
                  <td style={{ padding: "12px" }}>A whole chikki slab cut into 6 equal pieces[cite: 20].</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px" }}>8 Equal Parts[cite: 20]</td>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>1/8 (One Eighth)[cite: 20]</td>
                  <td style={{ padding: "12px" }}>A circular pizza or paper disk cut into 8 equal slices[cite: 20].</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginBottom: "20px", background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Shares Decrease as Recipients Increase[cite: 20]</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
              When the same whole unit is divided among more children, each child receives a smaller individual share[cite: 20]. For example, 1/2 of a chapati is greater than 1/4 of a chapati (1/2 &gt; 1/4), and 1/5 is greater than 1/9 (1/5 &gt; 1/9)[cite: 20].
            </p>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>3. Anatomy of a Fraction: Numerator & Denominator[cite: 20]</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              In any written fraction such as 5/6[cite: 20]:
            </p>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
              <li>Top Number (Numerator = 5): States how many fractional units are taken or accumulated[cite: 20].</li>
              <li>Bottom Number (Denominator = 6): States how many equal parts make up one whole basic unit[cite: 20].</li>
              <li>Reading 3/4 as '3 times 1/4' (three quarters) makes its exact size intuitive, clearly indicating that it consists of 3 pieces of unit size 1/4[cite: 20].</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: Measuring & Marking Fractions on the Number Line[cite: 20, 21]</h2>
          
          <div style={{ marginBottom: "20px", background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Paper Strip Folding & Accumulation[cite: 20]</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              By folding a 1-unit strip of paper in half repeatedly, we create fractional units of 1/2, 1/4, 1/8, and so on[cite: 20]. Combining these units builds accumulated fraction lengths[cite: 20]:
            </p>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
              <li>2 times 1/4 = 2/4 (or 1/2)[cite: 20]</li>
              <li>3 times 1/4 = 3/4[cite: 20]</li>
              <li>5 times 1/4 = 5/4 (5 quarters = 1 whole + 1/4)[cite: 20]</li>
            </ul>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Marking Fractions on the Number Line[cite: 20, 21]</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Just as whole numbers (0, 1, 2, 3...) are marked on a number line, fractional lengths are marked by subdividing the unit interval between 0 and 1 into equal segments[cite: 21]:
            </p>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "8px 0 0 0" }}>
              <li>To mark 3/5, divide the line segment from 0 to 1 into 5 equal parts and count 3 steps from 0[cite: 21].</li>
              <li>To mark 3/10, divide the 0-to-1 interval into 10 equal parts and count 3 steps[cite: 21].</li>
              <li><strong style={{ color: "#38bdf8" }}>Key Rule:</strong> There are an uncountable (infinite) number of fractions lying between 0 and 1![cite: 21]</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Proper, Improper & Mixed Fractions[cite: 21]</h2>
          
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Fractions can be classified based on whether their values are less than, equal to, or greater than 1 whole unit[cite: 21]:
          </p>

          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Fraction Category[cite: 21]</th>
                  <th style={{ padding: "12px" }}>Numerator vs. Denominator[cite: 21]</th>
                  <th style={{ padding: "12px" }}>Value Relative to 1[cite: 21]</th>
                  <th style={{ padding: "12px" }}>Examples[cite: 21]</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Proper Fraction[cite: 21]</td>
                  <td style={{ padding: "12px" }}>Numerator &lt; Denominator[cite: 21]</td>
                  <td style={{ padding: "12px" }}>Strictly less than 1 (&lt; 1)[cite: 21]</td>
                  <td style={{ padding: "12px" }}>1/2, 3/4, 5/6, 7/10[cite: 21]</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Improper Fraction[cite: 21]</td>
                  <td style={{ padding: "12px" }}>Numerator &gt;= Denominator[cite: 21]</td>
                  <td style={{ padding: "12px" }}>Equal to or greater than 1 (&gt;= 1)[cite: 21]</td>
                  <td style={{ padding: "12px" }}>3/2, 5/2, 7/3, 13/4[cite: 21]</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Mixed Fraction[cite: 21]</td>
                  <td style={{ padding: "12px" }}>Whole Number + Proper Fraction[cite: 21]</td>
                  <td style={{ padding: "12px" }}>Greater than 1 (&gt; 1)[cite: 21]</td>
                  <td style={{ padding: "12px" }}>1 1/2, 2 1/2, 3 1/4, 4 1/2[cite: 21]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Converting Between Improper & Mixed Fractions[cite: 21]</h3>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.8", paddingLeft: "20px", margin: 0 }}>
              <li><strong style={{ color: "#f8fafc" }}>Improper to Mixed:</strong> Divide numerator by denominator. Quotient = Whole number, Remainder = Numerator. Example: 7/2 = 3 1/2 (7 ÷ 3 = 3 with remainder 1)[cite: 21].</li>
              <li><strong style={{ color: "#f8fafc" }}>Mixed to Improper:</strong> (Whole × Denominator + Numerator) / Denominator. Example: 3 1/4 = (3 × 4 + 1) / 4 = 13/4[cite: 21].</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Equivalent Fractions & The Fraction Wall[cite: 21]</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Fractions that represent the same length or same equal share are called equivalent fractions, even though they are expressed using different fractional units[cite: 21].
            </p>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              For instance, dividing 1 chapati between 2 children (1/2) gives each child the exact same amount as dividing 2 chapatis among 4 children (2/4) or 3 chapatis among 6 children (3/6)[cite: 21]:
            </p>
            <div style={{ background: "#0f172a", border: "1px solid #334155", padding: "12px", borderRadius: "6px", color: "#38bdf8", fontWeight: "bold", textAlign: "center", margin: "12px 0" }}>
              1/2 = 2/4 = 3/6 = 4/8 = 5/10[cite: 21]
            </div>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>1. Generating Equivalent Fractions[cite: 21]</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: "0 0 8px 0" }}>
              Multiply or divide both the numerator and the denominator by the same non-zero whole number[cite: 21]:
            </p>
            <div style={{ color: "#38bdf8", fontSize: "0.95rem" }}>
              3/4 = (3 × 2) / (4 × 2) = 6/8 = (3 × 3) / (4 × 3) = 9/12 = 12/16 = 15/20[cite: 21]
            </div>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>2. Lowest Terms / Simplest Form[cite: 21]</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
              A fraction is in its lowest terms (simplest form) when its numerator and denominator share no common factor except 1[cite: 21]. For example, the simplest form of 4/6 and 6/9 is 2/3[cite: 21].
            </p>
          </div>
        </section>
      )}

      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Comparing Fractions[cite: 21, 22]</h2>
          
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            To compare two or more fractions accurately[cite: 21]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>1. Same Denominator (Same Fractional Unit)[cite: 21]</h4>
              <p style={{ color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
                Compare numerators directly. Higher numerator = larger fraction (e.g., 5/7 &gt; 4/7)[cite: 21, 22].
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>2. Same Numerator (Same Number of Shares)[cite: 21, 22]</h4>
              <p style={{ color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
                Compare denominators. Smaller denominator = larger individual share (e.g., 4/7 &gt; 4/8)[cite: 22].
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>3. Different Numerators and Denominators[cite: 22]</h4>
              <p style={{ color: "#cbd5e1", margin: "0 0 12px 0", lineHeight: "1.6" }}>
                Convert fractions to equivalent fractions with a common denominator (a common multiple of both denominators), then compare the numerators[cite: 22].
              </p>
              <div style={{ background: "#0f172a", padding: "12px", borderRadius: "6px", color: "#38bdf8", lineHeight: "1.6" }}>
                <strong>Example:</strong> Compare 3/4 and 7/10[cite: 22]<br />
                • Common multiple of 4 and 10 is 20 (or 40)[cite: 22].<br />
                • 3/4 = 15/20 and 7/10 = 14/20[cite: 22].<br />
                • Since 15/20 &gt; 14/20, we conclude that 3/4 &gt; 7/10![cite: 22]
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 6 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 6: Addition & Subtraction (Brahmagupta's Method)[cite: 22]</h2>
          
          <div
            style={{
              background: "#065f46",
              border: "1px solid #34d399",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h4 style={{ color: "#d1fae5", margin: "0 0 8px 0" }}>Historical Mathematical Insight[cite: 22]</h4>
            <p style={{ color: "#ecfdf5", margin: 0, lineHeight: "1.6" }}>
              <strong>Brahmagupta's Universal Rule:</strong> To add or subtract fractions, first convert them into equivalent fractions with the same fractional unit (common denominator). Then simply add or subtract the numerators while keeping the denominator unchanged![cite: 22]
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>Same Denominator[cite: 22]</h4>
              <div style={{ color: "#38bdf8", fontFamily: "monospace" }}>
                4/7 + 6/7 = (4 + 6) / 7 = 10/7 = 1 3/7[cite: 22]
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>Different Denominators[cite: 22]</h4>
              <p style={{ color: "#cbd5e1", margin: "0 0 8px 0" }}>Add 1/4 + 1/3[cite: 22]:</p>
              <div style={{ color: "#38bdf8", lineHeight: "1.6" }}>
                Convert to common denominator 12: 1/4 = 3/12 and 1/3 = 4/12[cite: 22]<br />
                Sum = 3/12 + 4/12 = 7/12[cite: 22]
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>Subtraction Example[cite: 22]</h4>
              <div style={{ color: "#38bdf8", fontFamily: "monospace" }}>
                6/7 - 4/7 = (6 - 4) / 7 = 2/7[cite: 22]
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 7 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 7: Solved Practice & Exercise Vault[cite: 22]</h2>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "20px" }}>
            Directly sourced from Chapter 7 textbook solutions[cite: 22]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q1. Three guavas together weigh 1 kg. If they are roughly of the same size, how much does each guava weigh?[cite: 22]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Answer:</strong> Each guava weighs <strong>1/3 kg</strong>[cite: 22].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q2. Express the fraction 64/144 in its lowest terms (simplest form).[cite: 22]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Answer:</strong> Divide numerator and denominator by 16: (64 ÷ 16) / (144 ÷ 16) = <strong>4/9</strong>[cite: 22].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q3. Add the fractions using Brahmagupta's method: 2/3 + 4/5 + 3/7[cite: 22]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Answer:</strong> Common denominator for 3, 5, 7 is 105[cite: 22].<br />
                2/3 = 70/105, 4/5 = 84/105, 3/7 = 45/105[cite: 22].<br />
                Sum = (70 + 84 + 45) / 105 = 199/105 = <strong>1 94/105</strong>[cite: 22].
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q4. Geeta bought 2/5 m of lace and Shamim bought 3/4 m of lace to border a tablecloth with a 1 m perimeter. Is their total lace sufficient?[cite: 22]
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Answer:</strong> Total lace = 2/5 + 3/4 = 8/20 + 15/20 = 23/20 m = 1.15 m[cite: 22].<br />
                Since 23/20 m &gt; 1 m, <strong>the lace is more than sufficient!</strong>[cite: 22]
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