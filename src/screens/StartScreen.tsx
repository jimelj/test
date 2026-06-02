import { useState } from "react";
import type { Attempt, ModuleId, Player } from "../types";
import { supabaseEnabled } from "../lib/supabase";
import { getModule } from "../data/modules";

export function StartScreen({
  attempts,
  allModuleIds,
  onStart,
  onResume,
  onViewLeaderboard,
}: {
  attempts: Record<ModuleId, Attempt | null>;
  allModuleIds: ModuleId[];
  onStart: (
    player: Player,
    pin: string,
    moduleId: ModuleId,
    timerEnabled: boolean
  ) => void | Promise<void>;
  onResume: (moduleId: ModuleId) => void;
  onViewLeaderboard: () => void;
}) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [pin, setPin] = useState("");
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [selectedModule, setSelectedModule] = useState<ModuleId | null>(null);
  const [timerEnabled, setTimerEnabled] = useState(true);

  const firstOk = first.trim().length >= 1;
  const lastOk = last.trim().length >= 1;
  const pinOk = /^\d{4}$/.test(pin.trim());
  const nameValid = firstOk && lastOk && pinOk;

  const selectedMod = selectedModule ? getModule(selectedModule) : null;
  const questionCount = selectedMod ? selectedMod.questions.length : null;
  const moduleReady = questionCount !== null && questionCount > 0;

  const handleModuleClick = (id: ModuleId) => {
    setSelectedModule((prev) => (prev === id ? null : id));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!nameValid || !selectedModule || !moduleReady || busy) return;
    setBusy(true);
    try {
      await onStart(
        { first: first.trim(), last: last.trim() },
        pin.trim(),
        selectedModule,
        timerEnabled
      );
    } finally {
      setBusy(false);
    }
  };

  const handleResume = (e: React.MouseEvent, id: ModuleId) => {
    e.stopPropagation();
    onResume(id);
  };

  const studyIds = allModuleIds.filter((id) => getModule(id).group === "study");
  const cooperIds = allModuleIds.filter((id) => getModule(id).group === "cooper");

  const renderStudyCard = (id: ModuleId) => {
    const mod = getModule(id);
    const att = attempts[id];
    const hasInProgress = att && !att.submitted;
    const hasCompleted = att?.submitted;
    const qCount = mod.questions.length;
    const available = qCount > 0;
    const selected = selectedModule === id;
    return (
      <button
        key={id}
        type="button"
        className={`module-card ${selected ? "selected" : ""} ${!available ? "unavailable" : ""}`}
        onClick={() => available && handleModuleClick(id)}
        aria-pressed={selected}
        disabled={!available}
      >
        <div className="mc-top">
          <span className="mc-label">{mod.label}</span>
          {hasInProgress && (
            <span className="mc-badge resume" onClick={(e) => handleResume(e, id)}>
              Resume ↗
            </span>
          )}
          {hasCompleted && !hasInProgress && <span className="mc-badge done">Completed</span>}
          {!available && <span className="mc-badge soon">Coming soon</span>}
        </div>
        <p className="mc-desc">{mod.description}</p>
        <div className="mc-foot">
          {available ? (
            <span className="chip sm">
              <span className="ic">{qCount}</span> questions
            </span>
          ) : (
            <span className="chip sm muted">Questions loading…</span>
          )}
          {mod.ethics && available && <span className="chip sm ethics-chip">⚖ Ethics section</span>}
          {mod.note && available && <span className="chip sm blue-chip">{mod.note}</span>}
        </div>
      </button>
    );
  };

  const renderChapterCard = (id: ModuleId) => {
    const mod = getModule(id);
    const att = attempts[id];
    const hasInProgress = att && !att.submitted;
    const hasCompleted = att?.submitted;
    const qCount = mod.questions.length;
    const available = qCount > 0;
    const selected = selectedModule === id;
    return (
      <button
        key={id}
        type="button"
        className={`ch-card ${selected ? "selected" : ""} ${!available ? "unavailable" : ""}`}
        onClick={() => available && handleModuleClick(id)}
        aria-pressed={selected}
        disabled={!available}
      >
        <div className="ch-top">
          <span className="ch-num">CH {mod.chapter}</span>
          {hasInProgress && (
            <span className="mc-badge resume" onClick={(e) => handleResume(e, id)}>
              Resume ↗
            </span>
          )}
          {hasCompleted && !hasInProgress && <span className="mc-badge done">Done</span>}
        </div>
        <div className="ch-title">{mod.title}</div>
        <div className="ch-foot">
          <span className="ch-q">{qCount} questions</span>
          {mod.ethics && <span className="chip sm ethics-chip">⚖ Ethics</span>}
        </div>
      </button>
    );
  };

  return (
    <main className="shell">
      <section className="hero">
        <span className="eyebrow">SNABA Live · BCBA Practice</span>
        <h1>
          Practice <span className="accent">Exams</span>
        </h1>
        <p className="lede">
          Three study-guide modules plus all 31 chapters of Cooper, Heron &amp; Heward,
          each chapter a focused 50-question set. Pick a module and climb its leaderboard.
        </p>
      </section>

      {studyIds.length > 0 && (
        <>
          <div className="section-head">
            <h2>Study Guides</h2>
            <span className="count">{studyIds.length} modules</span>
          </div>
          <div className="module-grid">{studyIds.map(renderStudyCard)}</div>
        </>
      )}

      {cooperIds.length > 0 && (
        <>
          <div className="section-head">
            <h2>Cooper · Applied Behavior Analysis</h2>
            <span className="count">{cooperIds.length} chapters · 50 q each</span>
          </div>
          <div className="ch-grid">{cooperIds.map(renderChapterCard)}</div>
        </>
      )}

      <form className="card start-card" onSubmit={submit} noValidate>
        <span className="eyebrow">Enter your name to begin</span>
        <div className="fields" style={{ marginTop: 14 }}>
          <div>
            <label className="field-label" htmlFor="first">First name</label>
            <input
              id="first"
              className={`input ${touched && !firstOk ? "err" : ""}`}
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              placeholder="Jane"
              autoComplete="given-name"
              maxLength={40}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="last">Last name</label>
            <input
              id="last"
              className={`input ${touched && !lastOk ? "err" : ""}`}
              value={last}
              onChange={(e) => setLast(e.target.value)}
              placeholder="Doe"
              autoComplete="family-name"
              maxLength={40}
            />
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <label className="field-label" htmlFor="pin">4-digit resume PIN</label>
          <input
            id="pin"
            className={`input ${touched && !pinOk ? "err" : ""}`}
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="1234"
            inputMode="numeric"
            autoComplete="off"
            maxLength={4}
          />
          <p className="field-hint" style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}>
            Pick any 4 digits. Enter the same name and PIN to pick up where you left
            off, on any device.
          </p>
        </div>
        {touched && !nameValid && (
          <p className="err-text">
            Enter your first and last name plus a 4-digit PIN.
          </p>
        )}

        {/* Timer Toggle */}
        <div className="timer-toggle-row">
          <div className="timer-toggle-info">
            <span className="timer-toggle-title">8-hour timer</span>
            <span className="timer-toggle-sub">
              {timerEnabled
                ? "Exam auto-submits when time runs out."
                : "Work at your own pace — no countdown, no auto-submit."}
            </span>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={timerEnabled}
            className={`toggle ${timerEnabled ? "on" : "off"}`}
            onClick={() => setTimerEnabled((t) => !t)}
            aria-label="Toggle 8-hour timer"
          >
            <span className="toggle-thumb" />
          </button>
        </div>

        <div className="rules">
          <div className="rule">
            <span className="num">1</span>
            <span>
              {timerEnabled ? (
                <>You get <b style={{ color: "var(--text)" }}>8 hours</b>. A timer runs
                in the header and the exam auto-submits when it hits zero.</>
              ) : (
                <>No timer — work at your own pace. Your progress is saved so you can
                close the tab and come back any time.</>
              )}
            </span>
          </div>
          <div className="rule">
            <span className="num">2</span>
            <span>
              One question at a time. Move with Previous / Next or jump around with
              the question grid — answers aren&apos;t revealed until you finish.
            </span>
          </div>
          <div className="rule">
            <span className="num">3</span>
            <span>
              At the end you get your score plus a full review — every missed
              question shows the right answer and an explanation from the notes.
            </span>
          </div>
          <div className="rule">
            <span className="num">4</span>
            <span>
              Your progress is saved to your name + PIN, so a refresh or even a
              different device won&apos;t lose your place
              {timerEnabled ? " or reset the clock" : ""}.
            </span>
          </div>
        </div>

        {touched && selectedModule && !moduleReady && (
          <p className="err-text">This module's questions aren't loaded yet — check back soon.</p>
        )}
        {touched && !selectedModule && (
          <p className="err-text">Please select a module above.</p>
        )}

        <button
          type="submit"
          className="btn block"
          disabled={busy || (touched && (!nameValid || !selectedModule || !moduleReady))}
        >
          {busy
            ? "Checking for saved progress…"
            : selectedModule
            ? `Start or resume ${getModule(selectedModule).label} →`
            : "Select a module to begin →"}
        </button>

        {supabaseEnabled && (
          <p style={{ textAlign: "center", marginTop: 18 }}>
            <button type="button" className="link-btn" onClick={onViewLeaderboard}>
              View the leaderboard
            </button>
          </p>
        )}
      </form>

      <p className="footer-note">Good luck — you&apos;ve got this.</p>
    </main>
  );
}
