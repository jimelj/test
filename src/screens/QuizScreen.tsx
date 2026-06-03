import { useEffect, useMemo, useState } from "react";
import type { Attempt, Question } from "../types";
import { EXAM_DURATION_SECONDS, formatHMS, useCountdown } from "../hooks/useCountdown";

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

export function QuizScreen({
  attempt,
  questionsById,
  onUpdate,
  onSubmit,
}: {
  attempt: Attempt;
  questionsById: Map<number, Question>;
  onUpdate: (a: Attempt) => void;
  onSubmit: () => void;
}) {
  const total = attempt.order.length;
  const [index, setIndex] = useState(0);
  const [showJump, setShowJump] = useState(false);

  // Timer is only active when timerEnabled AND exam not yet submitted
  const timerActive = attempt.timerEnabled && !attempt.submitted;
  const remaining = useCountdown(attempt.startedAt, timerActive, onSubmit);
  const danger = attempt.timerEnabled && remaining <= 5 * 60;
  const elapsedPct = attempt.timerEnabled
    ? Math.min(100, ((EXAM_DURATION_SECONDS - remaining) / EXAM_DURATION_SECONDS) * 100)
    : 0;

  const qid = attempt.order[index];
  const question = questionsById.get(qid);
  const presOrder = attempt.optionOrder[qid] ?? [0, 1, 2, 3];

  const answeredCount = useMemo(
    () => Object.keys(attempt.answers).length,
    [attempt.answers]
  );

  const selectedOriginal = attempt.answers[qid];
  const selectedPres =
    selectedOriginal === undefined ? -1 : presOrder.indexOf(selectedOriginal);

  // Once a question is answered, the choice locks and feedback is revealed.
  const answered = selectedOriginal !== undefined;
  const isCorrect = answered && selectedOriginal === question?.correctIndex;
  const correctPres = question ? presOrder.indexOf(question.correctIndex) : -1;

  const choose = (presIdx: number) => {
    if (answered) return; // locked after first answer
    const original = presOrder[presIdx];
    onUpdate({ ...attempt, answers: { ...attempt.answers, [qid]: original } });
  };

  const go = (next: number) => {
    setIndex(Math.max(0, Math.min(total - 1, next)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isLast = index === total - 1;

  const finish = () => {
    const unanswered = total - answeredCount;
    const msg =
      unanswered > 0
        ? `You have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Submit anyway?`
        : "Submit your exam and see your score?";
    if (window.confirm(msg)) onSubmit();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (["a", "b", "c", "d"].includes(k)) {
        choose(LETTERS.indexOf(k.toUpperCase()));
      } else if (e.key === "ArrowRight" && !isLast) {
        go(index + 1);
      } else if (e.key === "ArrowLeft" && index > 0) {
        go(index - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, qid, attempt.answers]);

  if (!question) return null;

  const hl = question.highlight as HighlightKey | undefined;
  const domainMeta = hl ? DOMAIN_META[hl] : null;

  return (
    <>
      <div className="quiz-head">
        <div className="quiz-head-inner">
          <span className="qcount">
            Question <b>{index + 1}</b> / {total}
            <span style={{ color: "var(--muted)", marginLeft: 10 }}>
              · {answeredCount} answered
            </span>
          </span>
          {attempt.timerEnabled ? (
            <span className={`timer ${danger ? "warn" : ""}`} aria-live="off">
              <span className="dot" />
              {formatHMS(remaining)}
            </span>
          ) : (
            <span className="timer-off-badge">No timer</span>
          )}
        </div>
        {attempt.timerEnabled && (
          <div className="progress">
            <i style={{ width: `${elapsedPct}%` }} />
          </div>
        )}
      </div>

      <main className="shell">
        <section className={`card q-card ${hl ? `q-card--${hl}` : ""}`} key={qid}>
          <div className={`q-topic eyebrow ${hl ? `${hl}-tag` : ""}`}>
            {domainMeta ? `${domainMeta.icon} ${domainMeta.label}` : question.topic}
          </div>
          <h2 className="q-text">{question.prompt}</h2>
          <div className="opts" role="radiogroup" aria-label="Answer choices">
            {presOrder.map((_, presIdx) => {
              const original = presOrder[presIdx];
              const selected = selectedPres === presIdx;
              // After answering: mark the correct option, and the chosen one if it was wrong.
              const showCorrect = answered && original === question.correctIndex;
              const showWrong = answered && selected && !isCorrect;
              const cls = showCorrect
                ? "correct"
                : showWrong
                ? "wrong"
                : selected
                ? "sel"
                : "";
              return (
                <button
                  key={presIdx}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  className={`opt ${cls}`}
                  onClick={() => choose(presIdx)}
                  disabled={answered}
                >
                  <span className="key">{LETTERS[presIdx]}</span>
                  <span>{question.options[original]}</span>
                  {showCorrect && <span className="opt-mark">✓</span>}
                  {showWrong && <span className="opt-mark">✗</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={`q-feedback ${isCorrect ? "ok" : "no"}`} aria-live="polite">
              <div className="qf-head">
                {isCorrect ? "✓ Correct" : "✗ Not quite"}
                {!isCorrect && correctPres >= 0 && (
                  <span className="qf-correct">
                    Correct answer: {LETTERS[correctPres]}. {question.options[question.correctIndex]}
                  </span>
                )}
              </div>
              {question.explanation && (
                <div className="qf-why">
                  <span className="lab">Why</span>
                  {question.explanation}
                </div>
              )}
            </div>
          )}

          <div className="quiz-actions">
            <button
              className="btn-ghost"
              onClick={() => go(index - 1)}
              disabled={index === 0}
            >
              ← Previous
            </button>
            {isLast ? (
              <button className="btn" onClick={finish}>
                Finish exam →
              </button>
            ) : (
              <button className="btn" onClick={() => go(index + 1)}>
                Next →
              </button>
            )}
          </div>
        </section>

        <button className="jump-toggle" onClick={() => setShowJump((s) => !s)}>
          {showJump ? "▲ Hide" : "▼ Show"} question map ({answeredCount}/{total})
        </button>

        {showJump && (
          <div className="jump-grid">
            {attempt.order.map((id, i) => {
              const answered = attempt.answers[id] !== undefined;
              const q = questionsById.get(id);
              const qhl = q?.highlight;
              return (
                <button
                  key={id}
                  className={`jump-cell ${answered ? "answered" : ""} ${
                    i === index ? "current" : ""
                  } ${qhl || ""}`}
                  onClick={() => go(i)}
                  aria-label={`Go to question ${i + 1}${answered ? ", answered" : ""}${qhl ? `, ${qhl}` : ""}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        )}

        <hr className="divider" />
        <div style={{ textAlign: "center" }}>
          <button className="btn-ghost" onClick={finish}>
            Submit exam
          </button>
        </div>
        <p className="footer-note">
          Tip: press A–D to answer, ← → to move between questions.
        </p>
      </main>
    </>
  );
}
