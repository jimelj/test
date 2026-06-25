import type { Question } from "../types";
import { QUESTIONS_M1 } from "./questions_m1";
import { QUESTIONS_M2 } from "./questions_m2";
import { QUESTIONS_M3 } from "./questions_m3";
import { QUESTIONS_M4 } from "./questions_m4";
import { QUESTIONS_M5 } from "./questions_m5";
import { QUESTIONS_M6 } from "./questions_m6";
import { QUESTIONS_M7 } from "./questions_m7";
import { QUESTIONS_M8 } from "./questions_m8";
import { QUESTIONS_M9 } from "./questions_m9";
import { QUESTIONS_M10 } from "./questions_m10";
import { QUESTIONS_M11 } from "./questions_m11";
import { QUESTIONS_M12 } from "./questions_m12";
import { QUESTIONS_M13 } from "./questions_m13";
import { QUESTIONS_M14 } from "./questions_m14";
import { QUESTIONS_M15 } from "./questions_m15";
import { QUESTIONS_M16 } from "./questions_m16";
import { QUESTIONS_M17 } from "./questions_m17";
import { QUESTIONS_M18 } from "./questions_m18";
import { QUESTIONS_M19 } from "./questions_m19";
import { QUESTIONS_M20 } from "./questions_m20";
import { QUESTIONS_M21 } from "./questions_m21";
import { QUESTIONS_M22 } from "./questions_m22";
import { QUESTIONS_M23 } from "./questions_m23";
import { QUESTIONS_M24 } from "./questions_m24";
import { QUESTIONS_M25 } from "./questions_m25";
import { QUESTIONS_M26 } from "./questions_m26";
import { QUESTIONS_M27 } from "./questions_m27";
import { QUESTIONS_M28 } from "./questions_m28";
import { QUESTIONS_M29 } from "./questions_m29";
import { QUESTIONS_M30 } from "./questions_m30";
import { QUESTIONS_M31 } from "./questions_m31";
import { QUESTIONS_M32 } from "./questions_m32";
import { QUESTIONS_M33 } from "./questions_m33";
import { QUESTIONS_M34 } from "./questions_m34";

/**
 * The Master De Facto Test: 200 questions sampled across all 34 sources
 * (the 3 study-guide modules + all 31 Cooper, Heron & Heward chapters),
 * weighted as evenly as the total allows (6 from most sources, 5 from the rest).
 *
 * Selection is deterministic (fixed seed), so the same 200 questions are chosen
 * on every load. That keeps cross-device resume and the leaderboard stable, even
 * though presentation order and option order are still reshuffled per attempt.
 */

// Every source pool. Order matters for the even-out distribution below.
const POOLS: Question[][] = [
  QUESTIONS_M1, QUESTIONS_M2, QUESTIONS_M3,
  QUESTIONS_M4, QUESTIONS_M5, QUESTIONS_M6, QUESTIONS_M7, QUESTIONS_M8,
  QUESTIONS_M9, QUESTIONS_M10, QUESTIONS_M11, QUESTIONS_M12, QUESTIONS_M13,
  QUESTIONS_M14, QUESTIONS_M15, QUESTIONS_M16, QUESTIONS_M17, QUESTIONS_M18,
  QUESTIONS_M19, QUESTIONS_M20, QUESTIONS_M21, QUESTIONS_M22, QUESTIONS_M23,
  QUESTIONS_M24, QUESTIONS_M25, QUESTIONS_M26, QUESTIONS_M27, QUESTIONS_M28,
  QUESTIONS_M29, QUESTIONS_M30, QUESTIONS_M31, QUESTIONS_M32, QUESTIONS_M33,
  QUESTIONS_M34,
];

const TARGET = 200;

// Small deterministic PRNG (mulberry32) seeded with a fixed constant.
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Pick `n` distinct questions from a pool using a seeded Fisher-Yates shuffle.
function pick(pool: Question[], n: number, rand: () => number): Question[] {
  const idx = pool.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, Math.min(n, pool.length)).map((i) => pool[i]);
}

const rand = mulberry32(20240624);

// Even split: base count for every pool, then hand out the remainder one each
// to the first pools until 200 is reached (so most pools give 6, the rest give 5).
const base = Math.floor(TARGET / POOLS.length);
let remainder = TARGET - base * POOLS.length;

const selected: Question[] = [];
for (const pool of POOLS) {
  const count = base + (remainder > 0 ? 1 : 0);
  if (remainder > 0) remainder--;
  selected.push(...pick(pool, count, rand));
}

// Interleave the chapters so the test does not run source-by-source.
for (let i = selected.length - 1; i > 0; i--) {
  const j = Math.floor(rand() * (i + 1));
  [selected[i], selected[j]] = [selected[j], selected[i]];
}

export const QUESTIONS_MASTER: Question[] = selected;
