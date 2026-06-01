-- Add module and timed columns to support multi-module exams (Phase 2).
-- Existing rows default to module=1 (SNABA Collective Notes) and timed=true.

alter table public.leaderboard
  add column if not exists module int not null default 1
    check (module in (1, 2, 3)),
  add column if not exists timed boolean not null default true;

create index if not exists leaderboard_module_idx
  on public.leaderboard (module, score desc, duration_seconds asc);

-- Re-create insert policy to include new column constraints
drop policy if exists "public can insert scores" on public.leaderboard;
create policy "public can insert scores"
  on public.leaderboard
  for insert
  to anon, authenticated
  with check (
    char_length(first_name) between 1 and 40
    and char_length(last_name) between 1 and 40
    and score >= 0
    and score <= total
    and total > 0 and total <= 1000
    and duration_seconds >= 0 and duration_seconds <= 86400
    and module in (1, 2, 3)
  );
