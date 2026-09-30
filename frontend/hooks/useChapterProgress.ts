"use client";

import { useState, useEffect, useCallback } from "react";

export function useChapterProgress(chapterId: string, totalModules: number) {
  const [visitedModules, setVisitedModules] = useState<number[]>([]);

  const loadProgress = useCallback(() => {
    if (typeof window === "undefined" || !chapterId) return;
    const stored = localStorage.getItem(`mathspace_progress_${chapterId}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setVisitedModules(parsed);
        }
      } catch (e) {
        console.error("Error loading progress:", e);
      }
    } else {
      setVisitedModules([]);
    }
  }, [chapterId]);

  useEffect(() => {
    loadProgress();
    window.addEventListener("focus", loadProgress);
    window.addEventListener("storage", loadProgress);

    return () => {
      window.removeEventListener("focus", loadProgress);
      window.removeEventListener("storage", loadProgress);
    };
  }, [loadProgress]);

  const markModuleVisited = (moduleNumber: number) => {
    if (typeof window === "undefined" || !chapterId) return;

    const stored = localStorage.getItem(`mathspace_progress_${chapterId}`);
    let currentVisited: number[] = [];
    if (stored) {
      try {
        currentVisited = JSON.parse(stored);
      } catch (e) {
        currentVisited = [];
      }
    }

    if (!currentVisited.includes(moduleNumber)) {
      const updated = [...currentVisited, moduleNumber];
      localStorage.setItem(`mathspace_progress_${chapterId}`, JSON.stringify(updated));
      setVisitedModules(updated);
      window.dispatchEvent(new Event("storage"));
    }
  };

  const progressPercent =
    totalModules > 0
      ? Math.min(Math.round((visitedModules.length / totalModules) * 100), 100)
      : 0;

  return { visitedModules, markModuleVisited, progressPercent };
}