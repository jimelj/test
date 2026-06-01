-- Leaderboard for the BCBA practice exam.
-- Public (anon) can read all rows and insert their own score; no updates/deletes.

create table if not exists public.leaderboard (
  id uuid primary key default gen_random_uuid(),
  first_name text not null check (char_length(first_name) between 1 and 40),
  last_name text not null check (char_length(last_name) between 1 and 40),
  score int not null check (score >= 0 and score <= 1000),
  total int not null check (total > 0 and total <= 1000),
  duration_seconds int not null check (duration_seconds >= 0 and duration_seconds <= 86400),
  created_at timestamptz not null default now()
);

create index if not exists leaderboard_rank_idx
  on public.leaderboard (score desc, duration_seconds asc);

alter table public.leaderboard enable row level security;

drop policy if exists "public can read leaderboard" on public.leaderboard;
create policy "public can read leaderboard"
  on public.leaderboard
  for select
  to anon, authenticated
  using (true);

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
  );
