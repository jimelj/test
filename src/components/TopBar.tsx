import type { ThemeId } from "../types";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function TopBar({
  theme,
  setTheme,
  onHome,
}: {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
  onHome: () => void;
}) {
  return (
    <div className="topbar">
      <button className="brand brand-btn" onClick={onHome} aria-label="Go to home screen">
        <span className="mark">Σ</span>
        <span>
          SNABA Live
          <small>BCBA Practice Exam</small>
        </span>
      </button>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
}
