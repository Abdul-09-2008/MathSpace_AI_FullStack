"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter4DetailProps {
  onBack: () => void;
}

export default function Chapter4Detail({ onBack }: Chapter4DetailProps) {
  const TOTAL_MODULES = 6;
  const CHAPTER_ID = "data-handling";

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
          MATHSPACE / CLASS 6 / CHAPTER 4
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
            GANITA PRAXIS CLASS 6 MATHEMATICS[cite: 12]
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 4: Data Handling and Presentation[cite: 12]
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
          <strong style={{ color: "#f8fafc" }}>Course Overview:</strong> We live in an age of information where data is constantly collected and displayed[cite: 12]. This chapter teaches you what data is, how to collect and organize raw information using tally marks and frequency distribution tables, how to present data visually using pictographs and bar graphs, and how aesthetic choices can make graphs clear or misleading[cite: 12].
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: What is Data?" },
          { id: 2, label: "Module 2: Organising Data" },
          { id: 3, label: "Module 3: Pictographs" },
          { id: 4, label: "Module 4: Bar Graphs" },
          { id: 5, label: "Module 5: Aesthetics & Infographics" },
          { id: 6, label: "Module 6: Practice & Vault" },
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
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: What is Data & Data Collection?[cite: 12]</h2>
          
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>1. Definition of Data</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Any collection of facts, numbers, measurements, observations, or descriptions that convey information about things is called data[cite: 12]. For example, a list of your classmates' favourite games, their shoe sizes, or daily vehicle counts on a street are all forms of data[cite: 12].
            </p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>2. Data Collection in Daily Life</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Before making decisions, we collect data[cite: 12]. For example, if a teacher wants to buy sweets for the class, they must collect data on each student's preference (jalebi, gulab jamun, gujiya, barfi, or rasgulla) to buy the exact amounts needed[cite: 12].
            </p>
          </div>

          <div>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>3. Questions Requiring vs. Not Requiring Data Collection</h3>
            <div style={{ overflowX: "auto", marginTop: "16px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                    <th style={{ padding: "12px" }}>Scenario / Question</th>
                    <th style={{ padding: "12px" }}>Data Collection Needed?</th>
                    <th style={{ padding: "12px" }}>Reasoning</th>
                  </tr>
                </thead>
                <tbody style={{ color: "#cbd5e1" }}>
                  <tr style={{ borderBottom: "1px solid #23272f" }}>
                    <td style={{ padding: "12px" }}>What is the most popular TV show among classmates?[cite: 12]</td>
                    <td style={{ padding: "12px", color: "#38bdf8", fontWeight: "bold" }}>YES[cite: 12]</td>
                    <td style={{ padding: "12px" }}>Requires asking classmates for personal opinions[cite: 12].</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}>
                    <td style={{ padding: "12px" }}>When did India get independence?[cite: 12]</td>
                    <td style={{ padding: "12px", color: "#f87171", fontWeight: "bold" }}>NO[cite: 12]</td>
                    <td style={{ padding: "12px" }}>A fixed historical fact (15 August 1947)[cite: 12].</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}>
                    <td style={{ padding: "12px" }}>How much water is wasted in your locality?[cite: 12]</td>
                    <td style={{ padding: "12px", color: "#38bdf8", fontWeight: "bold" }}>YES[cite: 12]</td>
                    <td style={{ padding: "12px" }}>Requires measuring and observing local water usage[cite: 12].</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px" }}>What is the capital of India?[cite: 12]</td>
                    <td style={{ padding: "12px", color: "#f87171", fontWeight: "bold" }}>NO[cite: 12]</td>
                    <td style={{ padding: "12px" }}>A known general knowledge fact (New Delhi)[cite: 12].</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: Organising Data - Tally Marks & Frequency Tables[cite: 12]</h2>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>1. Raw Data vs. Organised Data</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Unorganised or raw data is hard to interpret[cite: 12]. Arranging data in ascending/descending order or grouping it into a frequency table makes it easy to find maximums, minimums, and totals[cite: 12].
            </p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>2. Tally Marks System</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              To count data quickly without missing any item, we use tally marks[cite: 12]. Each occurrence gets a single vertical stroke '|'[cite: 12]. When the count reaches 5, a diagonal slash is drawn across four vertical strokes (||||) to represent a bundle of 5[cite: 12].
            </p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>3. Frequency</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              The frequency of a category is the total number of times that particular value or response occurs[cite: 12].
            </p>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
            <h4 style={{ color: "#38bdf8", margin: "0 0 12px 0" }}>Example: Sweet Preferences in Class (Shri Nilesh's Class Data)[cite: 12, 13]</h4>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                    <th style={{ padding: "10px" }}>Sweet Category</th>
                    <th style={{ padding: "10px" }}>Tally Marks</th>
                    <th style={{ padding: "10px" }}>Frequency (No. of Students)</th>
                  </tr>
                </thead>
                <tbody style={{ color: "#cbd5e1" }}>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Jalebi[cite: 13]</td><td style={{ padding: "10px" }}>|||| |[cite: 13]</td><td style={{ padding: "10px" }}>6[cite: 13]</td></tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Gulab Jamun[cite: 13]</td><td style={{ padding: "10px" }}>|||| ||||[cite: 13]</td><td style={{ padding: "10px" }}>9[cite: 13]</td></tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Gujiya[cite: 13]</td><td style={{ padding: "10px" }}>|||| |||| |||[cite: 13]</td><td style={{ padding: "10px" }}>13[cite: 13]</td></tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Barfi[cite: 13]</td><td style={{ padding: "10px" }}>|||[cite: 13]</td><td style={{ padding: "10px" }}>3[cite: 13]</td></tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Rasgulla[cite: 13]</td><td style={{ padding: "10px" }}>|||| ||[cite: 13]</td><td style={{ padding: "10px" }}>7[cite: 13]</td></tr>
                  <tr style={{ fontWeight: "bold", color: "#ffffff" }}><td style={{ padding: "10px" }}>Total[cite: 13]</td><td style={{ padding: "10px" }}>—</td><td style={{ padding: "10px" }}>38[cite: 13]</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Pictographs - Representing Data Through Pictures[cite: 13]</h2>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>1. What is a Pictograph?</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              A pictograph represents data visually using pictures or symbols of objects instead of raw numbers[cite: 13]. It allows readers to understand comparisons and trends at a quick glance[cite: 13].
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>2. Scale or Key</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Every pictograph must specify a scale or key showing what each symbol represents[cite: 13]. A single symbol can represent 1 unit or multiple units (e.g., 1 symbol = 5 students, 100 kites, or 6 dogs)[cite: 13].
            </p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>3. Partial Symbols</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              When data values are not exact multiples of the scale, partial symbols are used (e.g., if 1 symbol = 10 children, a half symbol represents 5 children)[cite: 13]. However, if numbers are not convenient fractions (like 27 or 33), pictographs become difficult to draw accurately[cite: 13].
            </p>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
            <h4 style={{ color: "#38bdf8", margin: "0 0 12px 0" }}>Example: Kite Sales by Shopkeepers (Scale: 1 Kite Symbol = 100 Kites)[cite: 13]</h4>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                    <th style={{ padding: "10px" }}>Shopkeeper</th>
                    <th style={{ padding: "10px" }}>Kites Sold</th>
                    <th style={{ padding: "10px" }}>Symbols in Pictograph</th>
                  </tr>
                </thead>
                <tbody style={{ color: "#cbd5e1" }}>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Chaman[cite: 13]</td><td style={{ padding: "10px" }}>250[cite: 13]</td><td style={{ padding: "10px" }}>2 Full + 1 Half Symbol[cite: 13]</td></tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Rani[cite: 13]</td><td style={{ padding: "10px" }}>300[cite: 13]</td><td style={{ padding: "10px" }}>3 Full Symbols[cite: 13]</td></tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Rukhsana[cite: 13]</td><td style={{ padding: "10px" }}>100[cite: 13]</td><td style={{ padding: "10px" }}>1 Full Symbol[cite: 13]</td></tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Jasmeet[cite: 13]</td><td style={{ padding: "10px" }}>450[cite: 13]</td><td style={{ padding: "10px" }}>4 Full + 1 Half Symbol[cite: 13]</td></tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}><td style={{ padding: "10px" }}>Jetha Lal[cite: 13]</td><td style={{ padding: "10px" }}>250[cite: 13]</td><td style={{ padding: "10px" }}>2 Full + 1 Half Symbol[cite: 13]</td></tr>
                  <tr><td style={{ padding: "10px" }}>Poonam Ben[cite: 13]</td><td style={{ padding: "10px" }}>700[cite: 13]</td><td style={{ padding: "10px" }}>7 Full Symbols[cite: 13]</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Bar Graphs - Construction & Scale Selection[cite: 13, 14]</h2>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>1. What is a Bar Graph?</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              A bar graph displays data using rectangular bars of uniform width drawn with equal spacing between them[cite: 13]. The length or height of each bar is proportional to the frequency of that category[cite: 13].
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>2. Vertical vs. Horizontal Bars</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Bars can be drawn vertically (column graphs) or horizontally[cite: 13]. Vertical bars are best for vertical quantities like heights, mountain elevations, or counts[cite: 13]. Horizontal bars suit horizontal quantities like river lengths[cite: 13].
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>3. How to Draw a Bar Graph Step-by-Step</h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1" }}>
              <strong style={{ color: "#38bdf8" }}>Step 1: Draw Axes:</strong> Draw two perpendicular lines—a horizontal axis for categories and a vertical axis for frequencies[cite: 13, 14].
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1" }}>
              <strong style={{ color: "#38bdf8" }}>Step 2: Choose Scale:</strong> Select a scale (e.g., 1 unit length = 10 runs, or 1 unit length = 100 vehicles) so the highest frequency fits nicely on the paper[cite: 14].
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1" }}>
              <strong style={{ color: "#38bdf8" }}>Step 3: Draw Bars:</strong> Draw rectangular bars of uniform width for each category, keeping equal gaps between adjacent bars[cite: 14].
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1" }}>
              <strong style={{ color: "#38bdf8" }}>Step 4: Label & Title:</strong> Label both axes clearly and add a title describing what the graph represents[cite: 14].
            </div>
          </div>
        </section>
      )}

      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Aesthetics, Infographics & Avoiding Misleading Visuals[cite: 14]</h2>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>1. Aesthetics in Presentation</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Choosing appropriate scales, colors, and layout orientation makes data visually appealing and intuitive[cite: 14]. For example, mountain heights are naturally represented by vertical columns growing upward like mountains[cite: 14].
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>2. What is an Infographic?</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Information graphics (infographics) are data visualizations enhanced with artistic imagery and graphic design to communicate complex information clearly and engagingly[cite: 14].
            </p>
          </div>

          <div>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>3. Avoiding Misleading Graphs</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              While making presentations visually creative, we must ensure that pictures and scales do not distort facts or mislead the audience[cite: 14]. Scales must always start at 0 and maintain uniform increments[cite: 14].
            </p>
          </div>
        </section>
      )}

      {activeTab === 6 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 6: Practice & Exercise Vault[cite: 14]</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Review solved textbook challenges and real-world case studies[cite: 14]:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Exercise 1 */}
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 10px 0" }}>
                Exercise 1: Jaspreet Bumrah's Wicket Analysis[cite: 14]
              </h4>
              <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Faiz prepared a frequency table of wickets taken by Jaspreet Bumrah in 30 matches: Wickets [0, 1, 2, 3, 4, 5, 6, 7] with Matches [2, 4, 6, 8, 3, 5, 1, 1][cite: 14].
              </p>
              <div style={{ color: "#f8fafc", background: "#0f172a", padding: "12px", borderRadius: "6px", marginTop: "10px", fontSize: "0.9rem" }}>
                <strong>Question:</strong> Mayank says 'To find total wickets, add 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7'. Is he right?[cite: 14]
              </div>
              <div style={{ color: "#38bdf8", background: "#06283d", padding: "12px", borderRadius: "6px", marginTop: "10px", fontSize: "0.9rem", lineHeight: "1.6" }}>
                <strong>Solution:</strong> No! Mayank is incorrect[cite: 14]. To find total wickets, multiply each wicket count by its match frequency and sum the products: (0×2) + (1×4) + (2×6) + (3×8) + (4×3) + (5×5) + (6×1) + (7×1) = 0 + 4 + 12 + 24 + 12 + 25 + 6 + 7 = <strong>90 wickets total</strong>[cite: 14].
              </div>
            </div>

            {/* Exercise 2 */}
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 10px 0" }}>
                Real-World Case Study: Exercise 2: Mudhol Hounds Dog Survey (Karnataka)[cite: 14]
              </h4>
              <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Number of dogs in 6 villages: Village A: 18, B: 36, C: 12, D: 48, E: 18, F: 24[cite: 14].
              </p>
              <ul style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: "1.6", paddingLeft: "20px", marginTop: "10px" }}>
                <li><strong>a. Useful Scale:</strong> Choose 1 symbol = 6 dogs (since all numbers are multiples of 6)[cite: 14].</li>
                <li><strong>b. Symbols for Village B:</strong> 36 ÷ 6 = 6 symbols[cite: 14].</li>
                <li><strong>c. Comparison:</strong> Village B + D = 36 + 48 = 84 dogs. Other 4 villages = 18 + 12 + 18 + 24 = 72 dogs. Since 84 &gt; 72, Kamini is correct![cite: 14]</li>
              </ul>
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