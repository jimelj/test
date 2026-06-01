import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { LeaderboardEntry, ModuleId, Player } from "../types";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseEnabled = Boolean(url && anon);

const client: SupabaseClient | null = supabaseEnabled
  ? createClient(url as string, anon as string)
  : null;

// Exported for the attempt-persistence layer (RPC calls). Null when env unset.
export const supabase = client;

const TABLE = "leaderboard";

export async function fetchLeaderboard(
  limit = 50,
  module?: ModuleId
): Promise<LeaderboardEntry[]> {
  if (!client) return [];
  let q = client
    .from(TABLE)
    .select("*")
    .order("score", { ascending: false })
    .order("duration_seconds", { ascending: true })
    .limit(limit);
  if (module !== undefined) {
    q = q.eq("module", module);
  }
  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as LeaderboardEntry[];
}

export async function submitScore(args: {
  player: Player;
  score: number;
  total: number;
  durationSeconds: number;
  moduleId: ModuleId;
  timed: boolean;
}): Promise<LeaderboardEntry | null> {
  if (!client) return null;
  const { data, error } = await client
    .from(TABLE)
    .insert({
      first_name: args.player.first.slice(0, 40),
      last_name: args.player.last.slice(0, 40),
      score: args.score,
      total: args.total,
      duration_seconds: args.durationSeconds,
      module: args.moduleId,
      timed: args.timed,
    })
    .select()
    .single();
  if (error) throw error;
  return data as LeaderboardEntry;
}
