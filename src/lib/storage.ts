import type { Attempt, ModuleId, ThemeId } from "../types";

const THEME_KEY = "bcba.theme.v1";
// Legacy single-module key (v1 had no moduleId) — migrated once on startup
const LEGACY_ATTEMPT_KEY = "bcba.attempt.v1";
const LEGACY_ENTRY_KEY = "bcba.lastEntryId.v1";

function attemptKey(moduleId: ModuleId) {
  return `bcba.attempt.m${moduleId}.v1`;
}

function entryKey(moduleId: ModuleId) {
  return `bcba.lastEntryId.m${moduleId}.v1`;
}

// One-shot migration: move the old v1 attempt (no moduleId) into the m1 slot.
export function migrateStorageIfNeeded() {
  try {
    const legacy = localStorage.getItem(LEGACY_ATTEMPT_KEY);
    if (!legacy) return;
    const m1Key = attemptKey(1);
    if (!localStorage.getItem(m1Key)) {
      // Patch moduleId and timerEnabled onto the old blob before saving
      const parsed = JSON.parse(legacy) as Attempt;
      parsed.moduleId = 1;
      if (parsed.timerEnabled === undefined) parsed.timerEnabled = true;
      localStorage.setItem(m1Key, JSON.stringify(parsed));
    }
    localStorage.removeItem(LEGACY_ATTEMPT_KEY);
    // Migrate last-entry-id too
    const legacyEntry = localStorage.getItem(LEGACY_ENTRY_KEY);
    if (legacyEntry && !localStorage.getItem(entryKey(1))) {
      localStorage.setItem(entryKey(1), legacyEntry);
    }
    localStorage.removeItem(LEGACY_ENTRY_KEY);
  } catch {
    /* ignore */
  }
}

export function loadAttempt(moduleId: ModuleId): Attempt | null {
  try {
    const raw = localStorage.getItem(attemptKey(moduleId));
    return raw ? (JSON.parse(raw) as Attempt) : null;
  } catch {
    return null;
  }
}

export function saveAttempt(attempt: Attempt) {
  try {
    localStorage.setItem(attemptKey(attempt.moduleId), JSON.stringify(attempt));
  } catch {
    /* ignore quota errors */
  }
}

export function clearAttempt(moduleId: ModuleId) {
  try {
    localStorage.removeItem(attemptKey(moduleId));
  } catch {
    /* ignore */
  }
}

export function loadTheme(): ThemeId | null {
  const v = (() => {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch {
      return null;
    }
  })();
  if (v === "teal" || v === "emerald" || v === "violet" || v === "blue") return v;
  return null;
}

export function saveTheme(theme: ThemeId) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* ignore */
  }
}

export function rememberEntryId(moduleId: ModuleId, id: string) {
  try {
    localStorage.setItem(entryKey(moduleId), id);
  } catch {
    /* ignore */
  }
}

export function getRememberedEntryId(moduleId: ModuleId): string | null {
  try {
    return localStorage.getItem(entryKey(moduleId));
  } catch {
    return null;
  }
}
