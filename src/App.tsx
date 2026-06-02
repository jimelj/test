import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Attempt, ModuleId, Player } from "./types";
import { useTheme } from "./hooks/useTheme";
import {
  clearAttempt,
  loadAttempt,
  migrateStorageIfNeeded,
  saveAttempt,
} from "./lib/storage";
import {
  clearAttemptRemote,
  flushAttemptRemote,
  loadAttemptRemote,
  resumeKeyFor,
  saveAttemptRemoteDebounced,
  saveAttemptRemoteNow,
} from "./lib/attempts";
import { seededShuffle } from "./lib/shuffle";
import { TopBar } from "./components/TopBar";
import { StartScreen } from "./screens/StartScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { ResultsScreen } from "./screens/ResultsScreen";
import { Leaderboard } from "./screens/Leaderboard";
import { getModule, MODULES } from "./data/modules";

type View = "start" | "quiz" | "results" | "leaderboard";

// Run once at startup to move legacy localStorage keys → per-module keys
migrateStorageIfNeeded();

const ALL_MODULE_IDS: ModuleId[] = MODULES.map((m) => m.id);

function loadAllAttempts(): Record<ModuleId, Attempt | null> {
  const out: Record<ModuleId, Attempt | null> = {};
  for (const id of ALL_MODULE_IDS) out[id] = loadAttempt(id);
  return out;
}

function initialViewForModule(a: Attempt | null): View {
  if (a?.submitted) return "results";
  if (a) return "quiz";
  return "start";
}

export function App() {
  const { theme, setTheme } = useTheme();

  const [activeModule, setActiveModule] = useState<ModuleId | null>(null);
  const [attempts, setAttempts] = useState<Record<ModuleId, Attempt | null>>(
    () => loadAllAttempts()
  );
  const [view, setView] = useState<View>("start");

  // Keep refs to latest values for popstate handler
  const activeModuleRef = useRef(activeModule);
  activeModuleRef.current = activeModule;
  const attemptsRef = useRef(attempts);
  attemptsRef.current = attempts;

  const currentAttempt = activeModule ? attempts[activeModule] : null;

  const resolveView = useCallback((target: View, mod: ModuleId | null): View => {
    if (!mod) return "start";
    const a = attemptsRef.current[mod];
    switch (target) {
      case "quiz":
        return a && !a.submitted ? "quiz" : a?.submitted ? "results" : "start";
      case "results":
        return a?.submitted ? "results" : a ? "quiz" : "start";
      case "leaderboard":
        return "leaderboard";
      case "start":
      default:
        return a && !a.submitted ? "quiz" : "start";
    }
  }, []);

  useEffect(() => {
    window.history.replaceState({ view, activeModule }, "");
    const onPop = (e: PopStateEvent) => {
      const target = (e.state?.view as View | undefined) ?? "start";
      const mod = (e.state?.activeModule as ModuleId | null | undefined) ?? null;
      setActiveModule(mod);
      setView(resolveView(target, mod));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useCallback((next: View, mod?: ModuleId | null) => {
    const nextMod = mod !== undefined ? mod : activeModuleRef.current;
    setView(next);
    if (mod !== undefined) setActiveModule(mod);
    window.history.pushState({ view: next, activeModule: nextMod }, "");
    window.scrollTo({ top: 0 });
  }, []);

  const updateAttempt = useCallback((next: Attempt) => {
    const stamped: Attempt = { ...next, updatedAt: Date.now() };
    setAttempts((prev) => ({ ...prev, [stamped.moduleId]: stamped }));
    saveAttempt(stamped);
    saveAttemptRemoteDebounced(stamped);
  }, []);

  // Resume-aware start. Re-entering the same name + PIN restores the existing
  // attempt (from server, falling back to this device) instead of overwriting
  // it. Only a genuinely new identity creates a fresh attempt.
  const begin = useCallback(
    async (player: Player, pin: string, moduleId: ModuleId, timerEnabled: boolean) => {
      const key = resumeKeyFor(player, moduleId, pin);
      const localMatches = (a: Attempt | null): a is Attempt =>
        !!a && resumeKeyFor(a.player, a.moduleId, a.pin ?? "") === key;

      let chosen: Attempt | null = null;
      try {
        const remote = await loadAttemptRemote(player, moduleId, pin);
        const local = loadAttempt(moduleId);
        const localOk = localMatches(local) ? local : null;
        if (remote && localOk) {
          // Newest write wins so a refresh mid-question doesn't lose answers.
          chosen =
            (localOk.updatedAt ?? localOk.startedAt) >= (remote.updatedAt ?? remote.startedAt)
              ? localOk
              : remote;
        } else {
          chosen = remote ?? localOk;
        }
      } catch {
        const local = loadAttempt(moduleId);
        chosen = localMatches(local) ? local : null;
      }

      if (chosen) {
        const resumed = chosen;
        setActiveModule(moduleId);
        setAttempts((prev) => ({ ...prev, [moduleId]: resumed }));
        saveAttempt(resumed); // cache the reconciled copy on this device
        navigate(resumed.submitted ? "results" : "quiz", moduleId);
        return;
      }

      // No existing attempt for this identity: start fresh.
      const mod = getModule(moduleId);
      const questions = mod.questions;
      const seed = Date.now() % 2147483647;
      const order = seededShuffle(
        questions.map((q) => q.id),
        seed
      );
      const optionOrder: Record<number, number[]> = {};
      for (const q of questions) {
        optionOrder[q.id] = seededShuffle([0, 1, 2, 3], seed + q.id * 7919);
      }
      const next: Attempt = {
        player,
        pin,
        moduleId,
        timerEnabled,
        startedAt: Date.now(),
        finishedAt: null,
        order,
        optionOrder,
        answers: {},
        submitted: false,
      };
      setActiveModule(moduleId);
      updateAttempt(next);
      void saveAttemptRemoteNow({ ...next, updatedAt: Date.now() });
      navigate("quiz", moduleId);
    },
    [updateAttempt, navigate]
  );

  const resumeExam = useCallback(
    (moduleId: ModuleId) => {
      setActiveModule(moduleId);
      const a = loadAttempt(moduleId);
      const targetView = initialViewForModule(a);
      navigate(targetView, moduleId);
    },
    [navigate]
  );

  const submitExam = useCallback(() => {
    setAttempts((prev) => {
      const mod = activeModuleRef.current;
      if (!mod) return prev;
      const existing = prev[mod];
      if (!existing) return prev;
      const next: Attempt = {
        ...existing,
        submitted: true,
        finishedAt: Date.now(),
        updatedAt: Date.now(),
      };
      saveAttempt(next);
      void saveAttemptRemoteNow(next); // persist the final state right away
      return { ...prev, [mod]: next };
    });
    navigate("results");
  }, [navigate]);

  const retake = useCallback(() => {
    const mod = activeModuleRef.current;
    const att = mod ? attemptsRef.current[mod] : null;
    if (mod) clearAttempt(mod);
    if (att) void clearAttemptRemote(att.player, att.moduleId, att.pin ?? "");
    setAttempts((prev) => ({ ...prev, ...(mod ? { [mod]: null } : {}) }));
    setActiveModule(null);
    navigate("start", null);
  }, [navigate]);

  // Flush any pending debounced save when the tab is hidden or closed, so the
  // last answer survives even if she swipes the tab away on mobile.
  useEffect(() => {
    const flush = () => flushAttemptRemote();
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flush();
    };
    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", flush);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const questionsById = useMemo(() => {
    if (!activeModule) return new Map();
    const questions = getModule(activeModule).questions;
    const m = new Map<number, (typeof questions)[number]>();
    for (const q of questions) m.set(q.id, q);
    return m;
  }, [activeModule]);

  return (
    <div className="app">
      <TopBar theme={theme} setTheme={setTheme} onHome={() => { setActiveModule(null); navigate("start", null); }} />

      {view === "start" && (
        <StartScreen
          attempts={attempts}
          allModuleIds={ALL_MODULE_IDS}
          onStart={begin}
          onResume={resumeExam}
          onViewLeaderboard={() => navigate("leaderboard", null)}
        />
      )}

      {view === "quiz" && currentAttempt && (
        <QuizScreen
          attempt={currentAttempt}
          questionsById={questionsById}
          onUpdate={updateAttempt}
          onSubmit={submitExam}
        />
      )}

      {view === "results" && currentAttempt && (
        <ResultsScreen
          attempt={currentAttempt}
          questionsById={questionsById}
          onRetake={retake}
          onViewLeaderboard={() => navigate("leaderboard")}
        />
      )}

      {view === "leaderboard" && <Leaderboard onBack={() => window.history.back()} />}
    </div>
  );
}
