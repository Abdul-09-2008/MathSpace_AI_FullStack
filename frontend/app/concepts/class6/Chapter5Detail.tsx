"use client";

import React, { useState, useEffect } from "react";
import { useChapterProgress } from "../../../hooks/useChapterProgress";
import ProgressBar from "../../../components/ProgressBar";

interface Chapter5DetailProps {
  onBack: () => void;
}

export default function Chapter5Detail({ onBack }: Chapter5DetailProps) {
  const TOTAL_MODULES = 5;
  const CHAPTER_ID = "prime-time";

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
          MATHSPACE / CLASS 6 / CHAPTER 5
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
            GANITA PRAKASH CLASS 6 MATHEMATICS: CHAPTER 5
          </div>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>
            {visitedModules.length} of {TOTAL_MODULES} Modules Explored
          </div>
        </div>

        <h1 style={{ fontSize: "2.25rem", margin: "8px 0 16px 0", color: "#ffffff" }}>
          Chapter 5: Prime Time - Complete Master Course
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
          <strong style={{ color: "#f8fafc" }}>Teacher's Welcome:</strong> Welcome to Chapter 5! Prime numbers are the fundamental building blocks of all whole numbers. In this chapter, we explore multiples, factors, prime and composite numbers, the Sieve of Eratosthenes, co-primes, and unique prime factorization through engaging games and visual puzzles.
        </div>
      </div>

      {/* Module Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
        {[
          { id: 1, label: "Module 1: Multiples & Factors" },
          { id: 2, label: "Module 2: Primes & Sieve" },
          { id: 3, label: "Module 3: Co-Prime Numbers" },
          { id: 4, label: "Module 4: Prime Factorization" },
          { id: 5, label: "Module 5: Divisibility & Vault" },
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
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 1: Multiples, Factors & Interactive Games</h2>
          
          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Multiples and factors describe how numbers relate through multiplication and division:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Multiples & The 'Idli-Vada' Game</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                Multiples of 3 trigger 'Idli' (3, 6, 9, 12...), multiples of 5 trigger 'Vada' (5, 10, 15, 20...), and common multiples trigger 'Idli-Vada' (15, 30, 45, 60...).
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Factors & Divisors ('Jump Jackpot' Game)</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                A factor divides a number exactly without a remainder. To land on target 24, successful jump sizes are its factors: 1, 2, 3, 4, 6, 8, 12, and 24.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Common Factors</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                Numbers that divide two or more target numbers. For 14 and 36, common factors are 1 and 2. For 28 and 70, common factors are 1, 2, 7, and 14.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Perfect Numbers</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                A number for which the sum of all its factors equals twice the number itself. Example: 6 (factors 1, 2, 3, 6; sum = 12) and 28 (factors 1, 2, 4, 7, 14, 28; sum = 56).
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 2 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 2: Prime vs. Composite Numbers & Sieve of Eratosthenes</h2>

          <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
            Arranging items into rectangular arrays reveals the structural differences between numbers:
          </p>

          <div style={{ overflowX: "auto", marginBottom: "28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Property/Category</th>
                  <th style={{ padding: "12px" }}>Prime Numbers</th>
                  <th style={{ padding: "12px" }}>Composite Numbers</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Definition</td>
                  <td style={{ padding: "12px" }}>Numbers with EXACTLY two factors (1 and itself)</td>
                  <td style={{ padding: "12px" }}>Numbers with MORE than two factors</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Examples</td>
                  <td style={{ padding: "12px" }}>2, 3, 5, 7, 11, 13, 17, 19, 23, 29...</td>
                  <td style={{ padding: "12px" }}>4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20...</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Array Shapes</td>
                  <td style={{ padding: "12px" }}>Can only be arranged in 1 single row or 1 column</td>
                  <td style={{ padding: "12px" }}>Can be arranged in multiple rectangular grid shapes</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>Special Rules</td>
                  <td style={{ padding: "12px" }}>2 is the ONLY even prime number</td>
                  <td style={{ padding: "12px" }}>1 is NEITHER prime NOR composite (only 1 factor)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
            <h3 style={{ color: "#38bdf8", fontSize: "1.1rem", marginTop: 0 }}>The Sieve of Eratosthenes (Step-by-Step)</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Developed over 2,200 years ago by Greek mathematician Eratosthenes to list all prime numbers up to 100:
            </p>
            <ol style={{ color: "#cbd5e1", lineHeight: "1.6", paddingLeft: "20px", margin: "12px 0 0 0" }}>
              <li>Cross out 1 (neither prime nor composite).</li>
              <li>Circle 2 (the first prime) and cross out all its multiples (4, 6, 8, 10...).</li>
              <li>Circle the next uncrossed number 3, then cross out all its multiples (6, 9, 12, 15...).</li>
              <li>Repeat for 5, 7, and subsequent uncrossed numbers until all numbers to 100 are circled or crossed.</li>
              <li><strong>Twin Primes:</strong> Pairs of prime numbers with a difference of 2 (e.g., 3 & 5, 5 & 7, 11 & 13, 17 & 19, 29 & 31, 41 & 43, 59 & 61, 71 & 73).</li>
            </ol>
          </div>
        </section>
      )}

      {activeTab === 3 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 3: Co-Prime Numbers & Safe Pairs</h2>

          <div style={{ marginBottom: "20px" }}>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Two numbers are co-prime if they have no common factor other than 1.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Safe Pairs in Treasure Game</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                If Grumpy places treasures on 4 and 9, Jumpy cannot reach both using any jump size other than 1. Thus, (4, 9) is a safe co-prime pair.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Key Co-Prime Property</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                Whenever two numbers are co-prime, their first common multiple is equal to their product (e.g., for co-primes 4 and 9, First Common Multiple = 4 × 9 = 36).
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Checking Co-Primeness</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                (18, 35) are co-prime because factors of 18 are (1, 2, 3, 6, 9, 18) and 35 are (1, 5, 7, 35), and their common factor is only 1. However, (15, 39) are NOT co-prime because 3 is a common factor.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 4 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 4: Prime Factorization & Unique Factorization Theorem</h2>

          <div style={{ marginBottom: "20px" }}>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Prime Factorization breaks down any composite number completely into a product of prime numbers:
            </p>
          </div>

          <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Example of Prime Factorization</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: "4px 0" }}>
              $56 = 4 \times 14 = (2 \times 2) \times (2 \times 7) = 2 \times 2 \times 2 \times 7$
            </p>
            <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: "4px 0" }}>
              $36 = 2 \times 2 \times 3 \times 3$ (regardless of whether you start with $2 \times 18$, $3 \times 12$, $4 \times 9$, or $6 \times 6$).
            </p>
          </div>

          <div style={{ background: "#065f46", border: "1px solid #34d399", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
            <strong style={{ color: "#d1fae5" }}>The Fundamental Fact:</strong> <span style={{ color: "#ecfdf5" }}>Every whole number greater than 1 has exactly ONE unique prime factorization, ignoring the order of factors.</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Testing Co-Primeness via Primes</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                If two numbers share NO common prime factor, they are co-prime! For 80 $(2 \times 2 \times 2 \times 2 \times 5)$ and 63 $(3 \times 3 \times 7)$, there are no common prime factors, so 80 and 63 are co-prime.
              </p>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
              <h3 style={{ color: "#f8fafc", fontSize: "1.05rem", marginTop: 0 }}>Testing Divisibility via Primes</h3>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6", margin: 0 }}>
                A number A is divisible by B if the prime factorization of B is completely contained within the prime factorization of A. Example: 168 $(2 \times 2 \times 2 \times 3 \times 7)$ is divisible by 24 $(2 \times 2 \times 2 \times 3)$ because three 2s and one 3 are present in 168.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 5 && (
        <section style={{ background: "#121417", border: "1px solid #23272f", padding: "28px", borderRadius: "12px" }}>
          <h2 style={{ color: "#38bdf8", marginTop: 0 }}>Module 5: Divisibility Tests & Practice Vault</h2>

          <h3 style={{ color: "#f8fafc", fontSize: "1.1rem", marginBottom: "12px" }}>Divisibility Test Rules</h3>
          <div style={{ overflowX: "auto", marginBottom: "28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1e293b", color: "#38bdf8", borderBottom: "2px solid #334155" }}>
                  <th style={{ padding: "12px" }}>Divisor</th>
                  <th style={{ padding: "12px" }}>Divisibility Test Rule</th>
                  <th style={{ padding: "12px" }}>Example</th>
                </tr>
              </thead>
              <tbody style={{ color: "#cbd5e1" }}>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>10</td>
                  <td style={{ padding: "12px" }}>Units digit must be 0</td>
                  <td style={{ padding: "12px" }}>8,560 is divisible by 10</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #23272f" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>5</td>
                  <td style={{ padding: "12px" }}>Units digit must be 0 or 5</td>
                  <td style={{ padding: "12px" }}>2,345 and 980 are divisible by 5</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "#ffffff" }}>2</td>
                  <td style={{ padding: "12px" }}>Units digit must be even (0, 2, 4, 6, 8)</td>
                  <td style={{ padding: "12px" }}>572 and 980 are divisible by 2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ color: "#f8fafc", fontSize: "1.1rem", marginBottom: "16px" }}>Selected Practice Questions & Answers</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q1: A number is less than 40. One of its factors is 7, and the sum of its digits is 8. Who is it?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Multiples of 7 less than 40 are 7, 14, 21, 28, 35. Checking digit sums: $3 + 5 = 8$. The number is <strong>35</strong>.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q2: Find the smallest number that is a multiple of all numbers from 1 to 10.
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Taking the highest powers of primes up to 10 ($2^3, 3^2, 5, 7$): $8 \times 9 \times 5 \times 7 =$ <strong>2,520</strong>.
              </div>
            </div>

            <div style={{ background: "#1a1d24", border: "1px solid #334155", padding: "20px", borderRadius: "8px" }}>
              <h4 style={{ color: "#f8fafc", margin: "0 0 8px 0" }}>
                Q3: Can a 3-digit prime number be made using digits 2, 4, and 5 once each?
              </h4>
              <div style={{ color: "#38bdf8", background: "#0f172a", padding: "12px", borderRadius: "6px", lineHeight: "1.6" }}>
                <strong>Solution:</strong> Sum of digits = $2 + 4 + 5 = 11$. But any permutation ends in 2, 4, or 5 (even or multiple of 5). Thus, <strong>NO</strong> prime number can be formed.
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