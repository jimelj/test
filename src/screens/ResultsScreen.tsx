import { useEffect, useMemo, useRef, useState } from "react";
import type { Attempt, Question } from "../types";
import { formatDuration } from "../hooks/useCountdown";
import { submitScore, supabaseEnabled } from "../lib/supabase";
import { getRememberedEntryId, rememberEntryId } from "../lib/storage";
import { getModule } from "../data/modules";

const LETTERS = ["A", "B", "C", "D"];

type HighlightKey = "ethics" | "blue" | "purple" | "green" | "magenta" | "orange" | "yellow" | "white" | "lime";

const DOMAIN_META: Record<HighlightKey, { label: string; icon: string }> = {
  ethics:  { label: "Ethics",                          icon: "⚖" },
  lime:    { label: "Behaviorism & Foundations",        icon: "🧠" },
  blue:    { label: "Concepts & Principles",            icon: "📘" },
  green:   { label: "Measurement & Data",               icon: "📊" },
  magenta: { label: "Experimental Design",              icon: "🔬" },
  orange:  { label: "Behavior Assessment",              icon: "🔍" },
  purple:  { label: "Behavior-Change Procedures",       icon: "⚙" },
  yellow:  { label: "Selecting Interventions",          icon: "🎯" },
  white:   { label: "Supervision & Management",         icon: "👥" },
};

type Graded = {
  q: Question;
  chosen: number | undefined; // original index
  correct: boolean;
  answered: boolean;
};

export function ResultsScreen({
  attempt,
  questionsById,
  onRetake,
  onViewLeaderboard,
}: {
  attempt: Attempt;
  questionsById: Map<number, Question>;
  onRetake: () => void;
  onViewLeaderboard: () => void;
}) {
  const total = attempt.order.length;
  const mod = getModule(attempt.moduleId);

  const graded: Graded[] = useMemo(() => {
    return attempt.order.map((id) => {
      const q = questionsById.get(id)!;
      const chosen = attempt.answers[id];
      const answered = chosen !== undefined;
      return { q, chosen, answered, correct: answered && chosen === q.correctIndex };
    });
  }, [attempt, questionsById]);

  const score = graded.filter((g) => g.correct).length;
  const pct = Math.round((score / total) * 100);
  const durationSeconds = Math.max(
    0,
    Math.round(((attempt.finishedAt ?? Date.now()) - attempt.startedAt) / 1000)
  );

  const [showAll, setShowAll] = useState(false);
  const review = graded.filter((g) => (showAll ? true : !g.correct));

  const topics = useMemo(() => {
    const map = new Map<string, { correct: number; total: number }>();
    for (const g of graded) {
      const t = map.get(g.q.topic) ?? { correct: 0, total: 0 };
      t.total += 1;
      if (g.correct) t.correct += 1;
      map.set(g.q.topic, t);
    }
    return [...map.entries()].sort((a, b) => b[1].total - a[1].total);
  }, [graded]);

  const [lbStatus, setLbStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const submittedRef = useRef(false);
  useEffect(() => {
    if (!supabaseEnabled || submittedRef.current) return;
    const key = `submitted:${attempt.moduleId}:${attempt.startedAt}:${attempt.finishedAt}`;
    if (getRememberedEntryId(attempt.moduleId) === key) {
      setLbStatus("saved");
      return;
    }
    submittedRef.current = true;
    setLbStatus("saving");
    submitScore({
      player: attempt.player,
      score,
      total,
      durationSeconds,
      moduleId: attempt.moduleId,
      timed: attempt.timerEnabled,
    })
      .then(() => {
        rememberEntryId(attempt.moduleId, key);
        setLbStatus("saved");
      })
      .catch(() => setLbStatus("error"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const C = 2 * Math.PI * 76;
  const dash = (pct / 100) * C;

  const headline =
    pct >= 80 ? "Outstanding!" : pct >= 70 ? "Nice work!" : pct >= 50 ? "Keep going!" : "Good start!";

  return (
    <main className="shell wide">
      <section className="card score-card">
        <span className="eyebrow">
          {mod.label} · {attempt.timerEnabled ? "Timed" : "Untimed"}
        </span>
        <div className="score-ring">
          <svg viewBox="0 0 168 168" aria-hidden="true">
            <circle className="track" cx="84" cy="84" r="76" />
            <circle
              className="fill"
              cx="84"
              cy="84"
              r="76"
              strokeDasharray={`${dash} ${C}`}
            />
          </svg>
          <div className="pct">
            <b>{pct}%</b>
            <span>{score} / {total}</span>
          </div>
        </div>
        <h1 className="score-head">{headline}</h1>
        <p className="score-sub">
          {attempt.player.first} {attempt.player.last} · {score} correct out of {total}
        </p>
        <div className="summary-row">
          <span className="chip"><b>{score}</b>&nbsp;correct</span>
          <span className="chip"><b>{total - score}</b>&nbsp;missed</span>
          <span className="chip">⏱ {formatDuration(durationSeconds)}</span>
          {!attempt.timerEnabled && (
            <span className="chip no-timer-chip">No timer</span>
          )}
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
          {supabaseEnabled && (
            <button className="btn" onClick={onViewLeaderboard}>
              View leaderboard →
            </button>
          )}
          <button className="btn-ghost" onClick={onRetake}>
            Back to modules
          </button>
        </div>
        {supabaseEnabled && lbStatus === "saving" && (
          <p className="score-sub" style={{ marginTop: 14 }}>Saving your score…</p>
        )}
        {supabaseEnabled && lbStatus === "error" && (
          <p className="err-text" style={{ textAlign: "center" }}>
            Couldn&apos;t save to the leaderboard, but your results are below.
          </p>
        )}
      </section>

      <h2 className="section-title">By topic</h2>
      <p className="section-sub">Where you were strong and where to review.</p>
      <div className="topic-breakdown">
        {topics.map(([name, t]) => {
          const p = Math.round((t.correct / t.total) * 100);
          return (
            <div className="tb-row" key={name}>
              <div className="tb-top">
                <span className="t">{name}</span>
                <span className="v">{t.correct}/{t.total} · {p}%</span>
              </div>
              <div className="tb-bar"><i style={{ width: `${p}%` }} /></div>
            </div>
          );
        })}
      </div>

      <h2 className="section-title">Review &amp; explanations</h2>
      <p className="section-sub">
        {showAll
          ? "Showing every question."
          : `Showing the ${review.length} question${review.length === 1 ? "" : "s"} you missed or skipped, with explanations from the notes.`}
        {"  "}
        <button className="link-btn" onClick={() => setShowAll((s) => !s)}>
          {showAll ? "Show only mistakes" : "Show all questions"}
        </button>
      </p>

      {review.length === 0 ? (
        <div className="empty">
          <div className="big">🎯</div>
          Perfect score — nothing to review. Incredible!
        </div>
      ) : (
        <div className="review-list">
          {review.map((g) => {
            const correctText = g.q.options[g.q.correctIndex];
            const yourText = g.answered ? g.q.options[g.chosen as number] : null;
            const hl = g.q.highlight as HighlightKey | undefined;
            const domainMeta = hl ? DOMAIN_META[hl] : null;
            return (
              <article className={`review-item ${g.correct ? "ok" : ""}`} key={g.q.id}>
                <div className="ri-top">
                  <span className={`ri-topic ${hl ? `ri-topic--${hl}` : ""}`}>
                    {domainMeta ? `${domainMeta.icon} ${domainMeta.label}` : g.q.topic}
                  </span>
                  {g.correct ? (
                    <span className="ri-tag" style={{ color: "var(--correct)", background: "var(--correct-soft)" }}>
                      Correct
                    </span>
                  ) : g.answered ? (
                    <span className="ri-tag wrong">Incorrect</span>
                  ) : (
                    <span className="ri-tag skip">Skipped</span>
                  )}
                </div>
                <h3 className="ri-q">{g.q.prompt}</h3>
                <div className="ri-ans">
                  {g.answered && !g.correct && (
                    <div className="ri-line yours">
                      <span className="lab">Your answer</span>
                      <span className="val">{yourText}</span>
                    </div>
                  )}
                  <div className="ri-line correct">
                    <span className="lab">Correct</span>
                    <span className="val">
                      {LETTERS[g.q.correctIndex]}. {correctText}
                    </span>
                  </div>
                </div>
                <div className="ri-explain">
                  <span className="lab">Why</span>
                  {g.q.explanation}
                </div>
              </article>
            );
          })}
        </div>
      )}

      <hr className="divider" />
      <div style={{ textAlign: "center" }}>
        <button className="btn" onClick={onRetake}>Back to modules</button>
      </div>
      <p className="footer-note">SNABA Live · BCBA Practice Exam</p>
    </main>
  );
}
