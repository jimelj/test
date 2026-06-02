-- Widen the allowed module range from (1, 2, 3) to 1..34.
--
-- Modules 1-3 are the original study guides (SNABA, BAS, PTBA). Modules 4-34
-- are the 31 chapter modules built from Cooper, Heron & Heward's "Applied
-- Behavior Analysis" (chapter N -> module N+3). Each chapter module records its
-- own leaderboard scores and resumable attempts, exactly like the first three.
--
-- This migration is ADDITIVE and idempotent. It only widens CHECK constraints
-- and re-creates the insert policy / save_attempt RPC. It never reads, deletes,
-- or rewrites existing rows, so all current leaderboard scores and in-progress
-- attempts (modules 1-3) are preserved untouched.

-- 1. leaderboard.module: replace the (1,2,3) check with a 1..34 range check.
alter table public.leaderboard drop constraint if exists leaderboard_module_check;
alter table public.leaderboard drop constraint if exists leaderboard_module_range;
alter table public.leaderboard
  add constraint leaderboard_module_range check (module between 1 and 34);

-- 2. leaderboard insert policy: re-create with the widened module range.
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
    and module between 1 and 34
  );

-- 3. exam_attempts.module: replace the (1,2,3) check with a 1..34 range check.
alter table public.exam_attempts drop constraint if exists exam_attempts_module_check;
alter table public.exam_attempts drop constraint if exists exam_attempts_module_range;
alter table public.exam_attempts
  add constraint exam_attempts_module_range check (module between 1 and 34);

-- 4. save_attempt RPC: widen its inline module validation to 1..34.
--    Body is identical to 20260601_exam_attempts.sql except the module check.
--    CREATE OR REPLACE preserves the existing EXECUTE grants.
create or replace function public.save_attempt(
  p_resume_key    text,
  p_first_name    text,
  p_last_name     text,
  p_module        int,
  p_timer_enabled boolean,
  p_started_at    timestamptz,
  p_finished_at   timestamptz,
  p_submitted     boolean,
  p_q_order       jsonb,
  p_option_order  jsonb,
  p_answers       jsonb
)
returns public.exam_attempts
language plpgsql
security definer
set search_path = public
as $$
declare
  v_answers jsonb := coalesce(p_answers, '{}'::jsonb);
  v_result  public.exam_attempts;
begin
  if p_resume_key is null or char_length(p_resume_key) = 0 then
    raise exception 'resume_key required';
  end if;
  if char_length(coalesce(p_first_name, '')) not between 1 and 40
     or char_length(coalesce(p_last_name, '')) not between 1 and 40 then
    raise exception 'invalid name length';
  end if;
  if p_module < 1 or p_module > 34 then
    raise exception 'invalid module';
  end if;
  if jsonb_typeof(v_answers) <> 'object' then
    raise exception 'answers must be an object';
  end if;
  if (select count(*) from jsonb_object_keys(v_answers)) > 1000 then
    raise exception 'too many answers';
  end if;

  insert into public.exam_attempts as ea (
    resume_key, first_name, last_name, module, timer_enabled,
    started_at, finished_at, submitted, q_order, option_order, answers, updated_at
  ) values (
    p_resume_key, p_first_name, p_last_name, p_module, coalesce(p_timer_enabled, true),
    coalesce(p_started_at, now()), p_finished_at, coalesce(p_submitted, false),
    coalesce(p_q_order, '[]'::jsonb), coalesce(p_option_order, '{}'::jsonb), v_answers, now()
  )
  on conflict (resume_key) do update set
    first_name    = excluded.first_name,
    last_name     = excluded.last_name,
    module        = excluded.module,
    timer_enabled = excluded.timer_enabled,
    started_at    = excluded.started_at,
    finished_at   = excluded.finished_at,
    submitted     = excluded.submitted,
    q_order       = excluded.q_order,
    option_order  = excluded.option_order,
    answers       = excluded.answers,
    updated_at    = now()
  returning * into v_result;

  return v_result;
end;
$$;
