import type { ThemeId } from "../types";
import { THEMES } from "../hooks/useTheme";

export function ThemeSwitcher({
  theme,
  setTheme,
}: {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
}) {
  return (
    <div className="theme-switch" title="Change color theme">
      <span className="dot" />
      <select
        aria-label="Color theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeId)}
      >
        {THEMES.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
      <span className="chev">▼</span>
    </div>
  );
}
