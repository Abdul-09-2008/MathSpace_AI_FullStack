"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter3DetailProps {
  onBack: () => void;
}

export default function Chapter3Detail({ onBack }: Chapter3DetailProps) {
  const TOTAL_MODULES = 6;
  const CHAPTER_ID = "number-play";

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
          MATHSPACE / CLASS 6 / CHAPTER 3
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
            GANITA PRAKASH CLASS 6 COURSE: CHAPTER 3
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 3: Number Play - Complete Master Guide
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
          <strong style={{ color: "#f8fafc" }}>Welcome to Chapter 3: Number Play!</strong> In this chapter, we explore mathematics not through boring calculation rules, but through fun visual puzzles, digit secrets, palindromes, sub-routines, and winning game strategies.
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: Positional Puzzles" },
          { id: 2, label: "Module 2: Digit Patterns" },
          { id: 3, label: "Module 3: Palindromes" },
          { id: 4, label: "Module 4: Kaprekar's Constant" },
          { id: 5, label: "Module 5: Game 21 Strategies" },
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
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: Positional Puzzles & Supercells</h2>
          
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>1. Relative Heights & Positional Context</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Numbers express information depending on rules. When children stand in a line, each child shouts out a number based on their neighbors heights: '1' if exactly one neighbor is taller, '2' if both neighbors are taller, and '0' if neither neighbor is taller. In a group of 5 children, at most 2 children can say '2' (e.g. pattern 0, 2, 0, 2, 0).
            </p>
          </div>

          <div style={{ marginTop: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>2. Supercells in Grids</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              A cell in a number table is called a supercell if the number inside it is strictly greater than all of its adjacent neighboring cells (left, right, top, bottom).
            </p>

            <div style={{ overflowX: "auto", marginTop: "16px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                    <th style={{ padding: "12px" }}>Supercell Property</th>
                    <th style={{ padding: "12px" }}>Mathematical Rule & Explanation</th>
                  </tr>
                </thead>
                <tbody style={{ color: "#cbd5e1" }}>
                  <tr style={{ borderBottom: "1px solid #23272f" }}>
                    <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Largest Number Rule</td>
                    <td style={{ padding: "12px" }}>The cell with the largest number in any grid will ALWAYS be a supercell because no neighbor can exceed it.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}>
                    <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Smallest Number Rule</td>
                    <td style={{ padding: "12px" }}>The cell with the smallest number in a grid can NEVER be a supercell because its neighbors are larger.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #23272f" }}>
                    <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>1D Max Supercells</td>
                    <td style={{ padding: "12px" }}>For N cells in a row, max supercells = N/2 (if N is even) or (N+1)/2 (if N is odd).</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Strategy for Max Supercells</td>
                    <td style={{ padding: "12px" }}>Fill the first cell as a supercell, then alternate supercells in every second position.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: Digit Patterns & Digit Sums</h2>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>1. Digit Frequency</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              In writing numbers from 1 to 100, the digit '7' appears exactly 20 times. From 1 to 1000, it appears 300 times.
            </p>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem", marginTop: 0 }}>2. Consecutive 3-Digit Sums</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Taking any 3-digit number with consecutive digits (e.g., 123, 234, 345, 456), their digit sums follow a clear pattern:
            </p>
            <ul style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px" }}>
              <li>1 + 2 + 3 = 6</li>
              <li>2 + 3 + 4 = 9</li>
              <li>3 + 4 + 5 = 12</li>
              <li>4 + 5 + 6 = 15</li>
            </ul>
            <p style={{ color: "#38bdf8", fontWeight: "500", marginTop: "12px" }}>
              Notice that every sum is a multiple of 3!
            </p>
          </div>
        </section>
      )}

      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Pretty Palindromes & Reverse-and-Add</h2>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>1. Palindromic Numbers</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              A palindrome reads identically forward and backward (e.g. 66, 848, 575, 1111).
            </p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>2. Reverse and Add Sub-routine</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Pick a 2-digit number, reverse its digits, and add. Repeat until you reach a palindrome! Example: 47 + 74 = 121 (palindrome in 1 step).
            </p>
            <div style={{ background: "#451a03", border: "1px solid #f59e0b", padding: "12px 16px", borderRadius: "8px", marginTop: "12px" }}>
              <strong style={{ color: "#fef08a" }}>Historical note:</strong> <span style={{ color: "#fde68a" }}>196 is suspected never to form a palindrome!</span>
            </div>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem", marginTop: 0 }}>3. Clock & Calendar Palindromes</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
              Clock times like 10:01, 12:21, 05:50 and dates like 20/02/2002 or 20/12/2012 are palindromic.
            </p>
          </div>
        </section>
      )}

      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Kaprekar's Magic Constant (6174 & 495)</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            In 1949, Indian math teacher D.R. Kaprekar (Devlali, Maharashtra) discovered a remarkable routine for 4-digit numbers with at least two different digits:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1" }}>
              <strong style={{ color: "#38bdf8" }}>Step 1:</strong> Arrange digits in descending order (largest number).
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1" }}>
              <strong style={{ color: "#38bdf8" }}>Step 2:</strong> Arrange digits in ascending order (smallest number).
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1" }}>
              <strong style={{ color: "#38bdf8" }}>Step 3:</strong> Subtract smallest from largest.
            </div>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1" }}>
              <strong style={{ color: "#38bdf8" }}>Step 4:</strong> Repeat the routine with the result.
            </div>
          </div>

          <div style={{ background: "#065f46", border: "1px solid #34d399", padding: "16px", borderRadius: "8px", marginTop: "20px" }}>
            <strong style={{ color: "#d1fae5" }}>The Kaprekar Constant:</strong> <span style={{ color: "#ecfdf5" }}>You will ALWAYS reach 6174 in at most 8 steps! For 3-digit numbers, repeating this routine always reaches 495.</span>
          </div>
        </section>
      )}

      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Game 21 & Winning Strategies</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.1rem" }}>Rules of Game 21</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Two players take turns saying numbers. The first player says 1, 2, or 3. Each turn, a player adds 1, 2, or 3 to the previous total. The player who hits 21 wins!
            </p>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
            <h3 style={{ color: "#38bdf8", fontSize: "1.1rem", marginTop: 0 }}>Winning Strategy</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              To guarantee a win, control key target numbers that are multiples of 4: <strong>1, 5, 9, 13, 17, 21</strong>. If player 1 starts by saying 1, player 1 can always force a win by keeping the running total on these target numbers!
            </p>
          </div>
        </section>
      )}

      {activeTab === 6 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 6: Practice & Exercise Vault</h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Review textbook questions and step-by-step solutions for Chapter 3:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q1: How many times does the digit '7' occur between 1 and 100?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> 20 times.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q2: What is the Kaprekar constant for 3-digit numbers?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
                <strong>Answer:</strong> 495.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q3: Solve the Puzzle: I am a 5-digit odd palindrome. 't' digit is double 'u' digit. 'h' digit is double 't' digit. 'th' digit is 't'. 'tth' digit is 'u'. Who am I?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Answer:</strong> Let u = 1. Then t = 2, h = 4, th = 2, tth = 1. The number is <strong>12,421</strong>.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #23272f", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q4: If a clock shows 10:01, how many minutes until the next palindromic time?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Answer:</strong> The next palindromic time is 11:11. From 10:01 to 11:11 is <strong>70 minutes</strong>.
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