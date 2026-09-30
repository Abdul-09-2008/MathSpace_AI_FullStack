"use client";

import React from "react";

interface ProgressBarProps {
  percent: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
}

export default function ProgressBar({
  percent,
  size = "md",
  showLabel = true,
  label,
}: ProgressBarProps) {
  const height = size === "sm" ? "6px" : size === "lg" ? "12px" : "8px";

  return (
    <div style={{ width: "100%" }}>
      {showLabel && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "6px",
            fontSize: size === "sm" ? "0.75rem" : "0.875rem",
            color: "#94a3b8",
          }}
        >
          <span>{label || "Progress"}</span>
          <span style={{ fontWeight: "600", color: "#38bdf8" }}>{percent}%</span>
        </div>
      )}
      <div
        style={{
          width: "100%",
          height,
          backgroundColor: "#1e293b",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${Math.min(Math.max(percent, 0), 100)}%`,
            height: "100%",
            backgroundColor: "#38bdf8",
            borderRadius: "9999px",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}