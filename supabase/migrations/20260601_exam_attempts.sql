-- Durable, resumable in-progress exam state.
--
-- This migration is ADDITIVE and idempotent. It does NOT read, alter, or drop
-- the existing public.leaderboard table, so final scores are never affected.
--
-- An attempt is identified by a normalized resume_key derived on the client as:
--   lower(trim(first)) | lower(trim(last)) | module | pin
-- so re-entering the same name + 4-digit PIN resumes the same attempt on any
-- device, surviving localStorage loss (e.g. iOS Safari's 7-day ITP eviction).
--
-- The table itself stays locked down (RLS on, no anon table policies). All
-- access goes through three SECURITY DEFINER RPCs that the anon role may EXECUTE.

create table if not exists public.exam_attempts (
  id            uuid primary key default gen_random_uuid(),
  resume_key    text not null unique,
  first_name    text not null check (char_length(first_name) between 1 and 40),
  last_name     text not null check (char_length(last_name) between 1 and 40),
  module        int  not null check (module in (1, 2, 3)),
  timer_enabled boolean not null default true,
  started_at    timestamptz not null default now(),
  finished_at   timestamptz,
  submitted     boolean not null default false,
  q_order       jsonb not null default '[]'::jsonb,  -- question ids in presentation order
  option_order  jsonb not null default '{}'::jsonb,  -- questionId -> [originalIdx, ...]
  answers       jsonb not null default '{}'::jsonb,  -- questionId -> chosen original idx
  updated_at    timestamptz not null default now()
);

create index if not exists exam_attempts_key_idx on public.exam_attempts (resume_key);

alter table public.exam_attempts enable row level security;
-- Intentionally no anon/authenticated table policies: direct table access stays
-- closed. Reads and writes happen only via the RPCs below.

-- Load the single attempt for a resume key (or NULL when none exists).
create or replace function public.load_attempt(p_resume_key text)
returns public.exam_attempts
language sql
security definer
set search_path = public
as $$
  select * from public.exam_attempts where resume_key = p_resume_key;
$$;

-- Upsert an attempt by resume key, with validation. Returns the saved row.
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
  if p_module not in (1, 2, 3) then
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

-- Delete the attempt for a resume key (used on retake).
create or replace function public.clear_attempt(p_resume_key text)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.exam_attempts where resume_key = p_resume_key;
$$;

-- Lock down execution, then grant only the anon/authenticated roles the app uses.
revoke all on function public.load_attempt(text) from public;
revoke all on function public.save_attempt(text, text, text, int, boolean, timestamptz, timestamptz, boolean, jsonb, jsonb, jsonb) from public;
revoke all on function public.clear_attempt(text) from public;

grant execute on function public.load_attempt(text) to anon, authenticated;
grant execute on function public.save_attempt(text, text, text, int, boolean, timestamptz, timestamptz, boolean, jsonb, jsonb, jsonb) to anon, authenticated;
grant execute on function public.clear_attempt(text) to anon, authenticated;
