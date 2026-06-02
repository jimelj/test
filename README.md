# BCBA Practice Exam (SNABA Live)

A mobile-friendly practice exam app for aspiring BCBAs (Board Certified Behavior Analysts). Pick a study module, take a timed or untimed multiple-choice exam, review your answers with explanations, and post your score to a shared leaderboard.

Built with React + TypeScript + Vite, deployed on Vercel, with a Supabase Postgres backend powering the leaderboard.

## Features

- **34 modules**, each its own question bank, leaderboard, and resumable attempt:
  - **Study Guides (Modules 1–3)**, each with 185 questions:
    - **Module 1 — SNABA Live Collective Notes** (Collectives 1–21): core ABA concepts, measurement, behavior change procedures, and verbal behavior.
    - **Module 2 — BAS 6th Edition Study Guide**: includes BACB ethics-code questions, flagged with a gold ⚖ Ethics marker.
    - **Module 3 — PTBA Study Guide**: assessment, treatment planning, and professional practice.
  - **Cooper chapters (Modules 4–34)**: all 31 chapters of Cooper, Heron & Heward's *Applied Behavior Analysis*, each a focused 50-question set (chapter N maps to module N + 3). Chapter 31 (Ethics) carries the ⚖ marker.
- **Timed or untimed** exams (countdown timer optional per attempt).
- **Randomized** question order and answer-option order, seeded per attempt so a refresh keeps the same layout.
- **Resume in progress**: attempts are saved to `localStorage` per module, so closing the tab mid-exam doesn't lose your place.
- **Results review**: per-question breakdown with the correct answer and explanation.
- **Shared leaderboard** (Supabase): ranked by score, then by fastest completion time, filterable by module.
- **Theme switcher** with multiple color themes.
- **History/back-button aware** single-page navigation.

## Tech stack

| Layer      | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | React 18 + TypeScript                   |
| Build tool | Vite 5                                   |
| Backend    | Supabase (Postgres + Row Level Security) |
| Hosting    | Vercel                                   |
| Styling    | Hand-written CSS (`src/styles.css`)     |

## Getting started

### Prerequisites

- Node.js 18+ and npm
- A Supabase project (for the leaderboard). The app runs fine without one; the leaderboard simply stays empty when Supabase env vars are absent.

### Install

```bash
npm install
```

### Configure environment

Copy the example env file and fill in your Supabase project values:

```bash
cp .env.example .env
```

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> The anon key is safe to ship to the browser. Write access is constrained by Row Level Security (see the migrations) — anonymous users can read all scores and insert their own, but cannot update or delete.

### Run locally

```bash
npm run dev      # start the Vite dev server
npm run build    # type-check (tsc --noEmit) + production build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  App.tsx                 # top-level state, routing/view logic, exam lifecycle
  main.tsx                # React entry point
  styles.css              # all styling
  types.ts                # shared types (Attempt, Player, Question, etc.)
  screens/
    StartScreen.tsx       # module picker + name entry + timer toggle
    QuizScreen.tsx        # question-by-question exam UI
    ResultsScreen.tsx     # score + per-question review
    Leaderboard.tsx       # Supabase-backed rankings
  components/
    TopBar.tsx            # header + home navigation
    ThemeSwitcher.tsx     # color theme selector
  hooks/
    useTheme.ts           # theme persistence
    useCountdown.ts       # exam timer
  lib/
    supabase.ts           # Supabase client + fetch/submit leaderboard
    storage.ts            # localStorage attempt persistence + migration
    shuffle.ts            # seeded shuffle for question/option order
  data/
    modules.ts            # module metadata + question-bank wiring (study + Cooper)
    questions_m1.ts       # Module 1 question bank (study guide)
    questions_m2.ts       # Module 2 question bank (study guide)
    questions_m3.ts       # Module 3 question bank (study guide)
    questions_m4.ts …     # Modules 4–34: one file per Cooper chapter (50 q each)
    questions_m34.ts

supabase/
  migrations/             # leaderboard table + RLS policies + module columns
  config.toml             # Supabase CLI config
```

## Database

The leaderboard lives in a single `public.leaderboard` table. Schema and policies are defined in `supabase/migrations/`:

- `20260527013635_leaderboard.sql` — creates the table, ranking index, and RLS policies (public read, public insert-own, no update/delete).
- `20260528_leaderboard_modules.sql` — adds `module` and `timed` columns for multi-module support.
- `20260601_exam_attempts.sql` — durable, cross-device resumable attempts (`exam_attempts` table + `load_attempt`/`save_attempt`/`clear_attempt` RPCs).
- `20260601_modules_to_34.sql` — widens the allowed `module` range from 1–3 to 1–34 (leaderboard constraint + insert policy, `exam_attempts` constraint, and the `save_attempt` RPC) so the Cooper chapter modules can record scores and resume. Additive only; existing rows are untouched.

Apply migrations with the Supabase CLI:

```bash
supabase db push
```

## Deployment

The app is deployed on Vercel. The build command is `npm run build` and the output directory is `dist/`. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables in the Vercel project settings.

## Notes for working on the go

- All exam state for an in-progress attempt is kept in `localStorage`, so local development never touches production data unless you submit a score to a live Supabase project.
- To develop safely against a throwaway backend, point `.env` at a separate Supabase project (or leave the env vars unset to disable the leaderboard entirely).
