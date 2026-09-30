"use client";

import React, { useState, useEffect, useCallback } from "react";
import ProgressBar from "../../../components/ProgressBar";

// Import Chapter Detail Components
import Chapter1Detail from "./Chapter1Detail";
import Chapter2Detail from "./Chapter2Detail";
import Chapter3Detail from "./Chapter3Detail";
import Chapter4Detail from "./Chapter4Detail";
import Chapter5Detail from "./Chapter5Detail";
import Chapter6Detail from "./Chapter6Detail";
import Chapter7Detail from "./Chapter7Detail";
import Chapter8Detail from "./Chapter8Detail";
import Chapter9Detail from "./Chapter9Detail";
import Chapter10Detail from "./Chapter10Detail";

export interface ChapterInfo {
  id: string;
  number: number;
  title: string;
  description: string;
  totalModules: number;
}

export const CLASS_6_CHAPTERS: ChapterInfo[] = [
  {
    id: "patterns-in-mathematics",
    number: 1,
    title: "Patterns in Mathematics",
    description: "Explore visual dot patterns, sequences, relations, and foundational rules.",
    totalModules: 6,
  },
  {
    id: "lines-and-angles",
    number: 2,
    title: "Lines and Angles",
    description: "Understand points, line segments, rays, parallel lines, and angle types.",
    totalModules: 6,
  },
  {
    id: "number-play",
    number: 3,
    title: "Number Play",
    description: "Master positional puzzles, magic grids, number towers, and digit tricks.",
    totalModules: 6,
  },
  {
    id: "data-handling-and-presentation",
    number: 4,
    title: "Data Handling and Presentation",
    description: "Organize raw observations using tally marks, pictographs, and bar graphs.",
    totalModules: 6,
  },
  {
    id: "prime-time",
    number: 5,
    title: "Prime Time",
    description: "Explore factors, multiples, prime numbers, divisibility rules, HCF & LCM.",
    totalModules: 6,
  },
  {
    id: "perimeter-and-area",
    number: 6,
    title: "Perimeter and Area",
    description: "Calculate boundaries and surfaces of regular and irregular shapes.",
    totalModules: 6,
  },
  {
    id: "fractions",
    number: 7,
    title: "Fractions",
    description: "Understand fractional units, improper fractions, and number line representations.",
    totalModules: 6,
  },
  {
    id: "playing-with-constructions",
    number: 8,
    title: "Playing with Constructions",
    description: "Construct circles, line segments, perpendicular bisectors, and angles.",
    totalModules: 6,
  },
  {
    id: "symmetry",
    number: 9,
    title: "Symmetry",
    description: "Discover line symmetry, reflectional patterns, and rotational symmetry.",
    totalModules: 6,
  },
  {
    id: "the-other-side-of-zero",
    number: 10,
    title: "The Other Side of Zero",
    description: "An introduction to negative numbers, integers, and number line dynamics.",
    totalModules: 6,
  },
];

export default function Class6Page() {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [chapterProgressMap, setChapterProgressMap] = useState<Record<string, number>>({});

  // Function to refresh chapter progress percentages from localStorage
  const refreshProgressMap = useCallback(() => {
    if (typeof window === "undefined") return;

    const progressData: Record<string, number> = {};

    CLASS_6_CHAPTERS.forEach((chap) => {
      const stored = localStorage.getItem(`mathspace_progress_${chap.id}`);
      if (stored) {
        try {
          const visited: number[] = JSON.parse(stored);
          const total = chap.totalModules || 6;
          progressData[chap.id] = Math.min(
            Math.round((visited.length / total) * 100),
            100
          );
        } catch {
          progressData[chap.id] = 0;
        }
      } else {
        progressData[chap.id] = 0;
      }
    });

    setChapterProgressMap(progressData);
  }, []);

  // Update progress whenever selectedChapter changes or local storage is modified
  useEffect(() => {
    refreshProgressMap();

    const handleStorageChange = () => refreshProgressMap();
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("focus", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", handleStorageChange);
    };
  }, [selectedChapter, refreshProgressMap]);

  // Helper renderer to load the correct detail component
  const renderChapterDetail = () => {
    const handleBack = () => setSelectedChapter(null);

    switch (selectedChapter) {
      case "patterns-in-mathematics":
        return <Chapter1Detail onBack={handleBack} />;
      case "lines-and-angles":
        return <Chapter2Detail onBack={handleBack} />;
      case "number-play":
        return <Chapter3Detail onBack={handleBack} />;
      case "data-handling-and-presentation":
        return <Chapter4Detail onBack={handleBack} />;
      case "prime-time":
        return <Chapter5Detail onBack={handleBack} />;
      case "perimeter-and-area":
        return <Chapter6Detail onBack={handleBack} />;
      case "fractions":
        return <Chapter7Detail onBack={handleBack} />;
      case "playing-with-constructions":
        return <Chapter8Detail onBack={handleBack} />;
      case "symmetry":
        return <Chapter9Detail onBack={handleBack} />;
      case "the-other-side-of-zero":
        return <Chapter10Detail onBack={handleBack} />;
      default:
        return null;
    }
  };

  // Render detail view if a chapter is selected
  if (selectedChapter) {
    return renderChapterDetail();
  }

  // Calculate overall Class 6 completion percentage
  const totalChapters = CLASS_6_CHAPTERS.length;
  const completedPercentageSum = Object.values(chapterProgressMap).reduce(
    (sum, val) => sum + val,
    0
  );
  const overallProgress =
    totalChapters > 0 ? Math.round(completedPercentageSum / totalChapters) : 0;

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#f8fafc", paddingBottom: "40px" }}>
      {/* Header Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          border: "1px solid #334155",
          borderRadius: "16px",
          padding: "32px",
          marginBottom: "32px",
        }}
      >
        <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}>
          NCERT Curriculum — Ganita Prakash
        </div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", margin: "8px 0 12px 0", color: "#ffffff" }}>
          Class 6 Mathematics
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: "1.6", maxWidth: "700px", marginBottom: "24px" }}>
          Master foundational concepts in mathematics through interactive modules, visual illustrations, and practice challenges tailored for Class 6 students.
        </p>

        {/* Overall Progress Indicator */}
        <div style={{ background: "#1e293b", padding: "16px 20px", borderRadius: "12px", border: "1px solid #334155", maxWidth: "500px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.9rem" }}>
            <span style={{ color: "#cbd5e1", fontWeight: "500" }}>Class 6 Overall Progress</span>
            <span style={{ color: "#38bdf8", fontWeight: "bold" }}>{overallProgress}%</span>
          </div>
          <ProgressBar percent={overallProgress} size="md" />
        </div>
      </div>

      {/* Chapters Grid Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#ffffff", margin: 0 }}>
          Course Chapters ({CLASS_6_CHAPTERS.length})
        </h2>
      </div>

      {/* Chapters Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {CLASS_6_CHAPTERS.map((chap) => {
          const progress = chapterProgressMap[chap.id] || 0;
          const isCompleted = progress === 100;

          return (
            <div
              key={chap.id}
              onClick={() => setSelectedChapter(chap.id)}
              style={{
                background: "#121417",
                border: "1px solid #23272f",
                borderRadius: "14px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#38bdf8";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#23272f";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span
                    style={{
                      background: "#1e293b",
                      border: "1px solid #334155",
                      color: "#38bdf8",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      padding: "4px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    CHAPTER {chap.number}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: isCompleted ? "#4ade80" : "#94a3b8", fontWeight: "600" }}>
                    {progress}% Complete
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#ffffff", margin: "0 0 8px 0" }}>
                  {chap.title}
                </h3>

                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.5", margin: "0 0 20px 0" }}>
                  {chap.description}
                </p>
              </div>

              <div>
                <div style={{ marginBottom: "16px" }}>
                  <ProgressBar percent={progress} size="sm" />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "12px",
                    borderTop: "1px solid #1e293b",
                  }}
                >
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    {chap.totalModules} Interactive Modules
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "#38bdf8", fontWeight: "600" }}>
                    {progress > 0 ? "Continue →" : "Start →"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}