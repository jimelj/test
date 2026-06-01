import { useCallback, useEffect, useState } from "react";
import type { ThemeId } from "../types";
import { loadTheme, saveTheme } from "../lib/storage";

export const THEMES: { id: ThemeId; label: string }[] = [
  { id: "teal", label: "Teal" },
  { id: "emerald", label: "Emerald" },
  { id: "violet", label: "Violet" },
  { id: "blue", label: "Blue" },
];

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>(() => loadTheme() ?? "teal");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
    if (meta && bg) meta.setAttribute("content", bg);
  }, [theme]);

  const setTheme = useCallback((t: ThemeId) => {
    setThemeState(t);
    saveTheme(t);
  }, []);

  return { theme, setTheme };
}
