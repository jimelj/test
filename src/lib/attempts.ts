import type { Attempt, ModuleId, Player } from "../types";
import { supabase } from "./supabase";

// Normalize a name part so casing/spacing differences resolve to the same key.
const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

// The cross-device resume key. Must stay in sync with the documented format in
// the exam_attempts migration: lower(trim(first)) | lower(trim(last)) | module | pin
export function resumeKeyFor(player: Player, moduleId: ModuleId, pin: string): string {
  return `${norm(player.first)}|${norm(player.last)}|${moduleId}|${(pin ?? "").trim()}`;
}

type ServerRow = {
  resume_key: string;
  first_name: string;
  last_name: string;
  module: number;
  timer_enabled: boolean;
  started_at: string;
  finished_at: string | null;
  submitted: boolean;
  q_order: number[] | null;
  option_order: Record<string, number[]> | null;
  answers: Record<string, number> | null;
  updated_at: string;
};

function numKeyed(obj: Record<string, number[]> | null): Record<number, number[]> {
  const out: Record<number, number[]> = {};
  for (const [k, v] of Object.entries(obj ?? {})) out[Number(k)] = v;
  return out;
}

function numKeyedScalar(obj: Record<string, number> | null): Record<number, number> {
  const out: Record<number, number> = {};
  for (const [k, v] of Object.entries(obj ?? {})) out[Number(k)] = v;
  return out;
}

function rowToAttempt(row: ServerRow, pin: string): Attempt {
  return {
    player: { first: row.first_name, last: row.last_name },
    pin,
    moduleId: row.module as ModuleId,
    timerEnabled: row.timer_enabled,
    startedAt: Date.parse(row.started_at),
    finishedAt: row.finished_at ? Date.parse(row.finished_at) : null,
    order: row.q_order ?? [],
    optionOrder: numKeyed(row.option_order),
    answers: numKeyedScalar(row.answers),
    submitted: row.submitted,
    updatedAt: Date.parse(row.updated_at),
  };
}

// Fetch the server-side attempt for this identity, or null when none / offline.
export async function loadAttemptRemote(
  player: Player,
  moduleId: ModuleId,
  pin: string
): Promise<Attempt | null> {
  if (!supabase) return null;
  const key = resumeKeyFor(player, moduleId, pin);
  const { data, error } = await supabase.rpc("load_attempt", { p_resume_key: key });
  if (error || !data) return null;
  const row = data as ServerRow;
  // A SQL function returning a composite type yields an all-null row (not null)
  // when there is no match, so detect that by the absent resume_key.
  if (!row.resume_key) return null;
  return rowToAttempt(row, pin);
}

// Push an attempt to the server immediately. Resolves even on error (best effort).
export async function saveAttemptRemoteNow(attempt: Attempt): Promise<void> {
  if (!supabase) return;
  const key = resumeKeyFor(attempt.player, attempt.moduleId, attempt.pin);
  try {
    await supabase.rpc("save_attempt", {
      p_resume_key: key,
      p_first_name: attempt.player.first.slice(0, 40),
      p_last_name: attempt.player.last.slice(0, 40),
      p_module: attempt.moduleId,
      p_timer_enabled: attempt.timerEnabled,
      p_started_at: new Date(attempt.startedAt).toISOString(),
      p_finished_at: attempt.finishedAt ? new Date(attempt.finishedAt).toISOString() : null,
      p_submitted: attempt.submitted,
      p_q_order: attempt.order,
      p_option_order: attempt.optionOrder,
      p_answers: attempt.answers,
    });
  } catch {
    /* best effort: localStorage still holds the latest copy */
  }
}

// Debounced remote save so rapid answering doesn't spam the network.
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let pendingAttempt: Attempt | null = null;

export function saveAttemptRemoteDebounced(attempt: Attempt, delayMs = 1500): void {
  if (!supabase) return;
  pendingAttempt = attempt;
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(flushAttemptRemote, delayMs);
}

// Flush any pending debounced save right away (call on tab hide / submit).
export function flushAttemptRemote(): void {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
  const a = pendingAttempt;
  pendingAttempt = null;
  if (a) void saveAttemptRemoteNow(a);
}

// Delete the server-side attempt (used on retake).
export async function clearAttemptRemote(
  player: Player,
  moduleId: ModuleId,
  pin: string
): Promise<void> {
  if (!supabase) return;
  const key = resumeKeyFor(player, moduleId, pin);
  try {
    await supabase.rpc("clear_attempt", { p_resume_key: key });
  } catch {
    /* best effort */
  }
}
