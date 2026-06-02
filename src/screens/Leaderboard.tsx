import { useEffect, useState } from "react";
import type { LeaderboardEntry, ModuleId } from "../types";
import { fetchLeaderboard, supabaseEnabled } from "../lib/supabase";
import { formatDuration } from "../hooks/useCountdown";
import { MODULES } from "../data/modules";

type Tab = "all" | ModuleId;

const TABS: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  ...MODULES.map((m) => ({ id: m.id as Tab, label: m.shortLabel })),
];

export function Leaderboard({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!supabaseEnabled) {
      setStatus("ready");
      return;
    }
    setStatus("loading");
    const mod = activeTab === "all" ? undefined : (activeTab as ModuleId);
    fetchLeaderboard(50, mod)
      .then((rows) => {
        setEntries(rows);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [activeTab]);

  const moduleLabel = (m: number) => {
    const found = MODULES.find((mod) => mod.id === m);
    return found ? found.shortLabel : `M${m}`;
  };

  return (
    <main className="shell wide lb-wrap">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <span className="eyebrow">Top scores</span>
        <h1 style={{ fontSize: "clamp(30px,6vw,48px)", margin: "12px 0 10px" }}>
          Leaderboard
        </h1>
        <p className="lede">Ranked by score, then by fastest finish.</p>
      </section>

      {/* Module tabs */}
      <div className="lb-tabs">
        {TABS.map((t) => (
          <button
            key={String(t.id)}
            type="button"
            className={`lb-tab ${activeTab === t.id ? "active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {!supabaseEnabled && (
        <div className="empty">
          <div className="big">🔌</div>
          The leaderboard isn&apos;t connected yet. Once the backend is set up,
          scores will show up here.
        </div>
      )}

      {supabaseEnabled && status === "loading" && (
        <div className="center-col" style={{ padding: "48px 0" }}>
          <div className="spinner" />
        </div>
      )}

      {supabaseEnabled && status === "error" && (
        <div className="empty">
          <div className="big">⚠️</div>
          Couldn&apos;t load the leaderboard. Please try again later.
        </div>
      )}

      {supabaseEnabled && status === "ready" && entries.length === 0 && (
        <div className="empty">
          <div className="big">🏁</div>
          No scores yet — be the first to finish!
        </div>
      )}

      {supabaseEnabled && status === "ready" && entries.length > 0 && (
        <div className="lb-table">
          {entries.map((e, i) => {
            const pct = Math.round((e.score / e.total) * 100);
            return (
              <div className={`lb-row ${i < 3 ? "top" : ""}`} key={e.id}>
                <span className="lb-rank">
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                </span>
                <span className="lb-name">
                  {e.first_name} {e.last_name}
                  <small>
                    {new Date(e.created_at).toLocaleDateString()}
                    {activeTab === "all" && (
                      <span className="lb-module-chip">{moduleLabel(e.module)}</span>
                    )}
                  </small>
                </span>
                <span className="lb-score">
                  {e.score}
                  <small>/{e.total} · {pct}%</small>
                </span>
                <span className="lb-time">
                  {formatDuration(e.duration_seconds)}
                  {!e.timed && <span className="lb-notimer">No timer</span>}
                </span>
              </div>
            );
          })}
        </div>
      )}

      <hr className="divider" />
      <div style={{ textAlign: "center" }}>
        <button className="btn-ghost" onClick={onBack}>
          ← Back
        </button>
      </div>
      <p className="footer-note">SNABA Live · BCBA Practice Exam</p>
    </main>
  );
}
