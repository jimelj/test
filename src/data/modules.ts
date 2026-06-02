import type { ModuleId, Question } from "../types";
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

export type ModuleMeta = {
  id: ModuleId;
  label: string; // full label, shown on results + start button
  shortLabel: string; // compact label, used for leaderboard tabs/chips
  description: string;
  questions: Question[];
  group: "study" | "cooper";
  chapter?: number; // Cooper textbook chapter number (cooper group only)
  title?: string; // chapter title (cooper group only)
  ethics?: boolean; // show the gold ethics marker
  note?: string; // optional extra chip on the card
};

// The three original study-guide modules. Untouched by the Cooper expansion.
const STUDY_MODULES: ModuleMeta[] = [
  {
    id: 1,
    label: "Module 1",
    shortLabel: "M1",
    description:
      "SNABA Live Collective Notes (Collectives 1–21). Core ABA concepts, measurement, behavior change procedures, and verbal behavior.",
    questions: QUESTIONS_M1,
    group: "study",
  },
  {
    id: 2,
    label: "Module 2",
    shortLabel: "M2",
    description:
      "BAS 6th Edition Study Guide. Includes BACB ethics code questions, flagged with the gold ⚖ Ethics marker.",
    questions: QUESTIONS_M2,
    group: "study",
    ethics: true,
  },
  {
    id: 3,
    label: "Module 3",
    shortLabel: "M3",
    description:
      "PTBA Study Guide. Additional practice covering assessment, treatment planning, and professional practice.",
    questions: QUESTIONS_M3,
    group: "study",
    note: "📘 All domains",
  },
];

// The 31 Cooper, Heron & Heward chapters. Chapter N maps to module N + 3.
const COOPER_QUESTIONS: Record<number, Question[]> = {
  4: QUESTIONS_M4,
  5: QUESTIONS_M5,
  6: QUESTIONS_M6,
  7: QUESTIONS_M7,
  8: QUESTIONS_M8,
  9: QUESTIONS_M9,
  10: QUESTIONS_M10,
  11: QUESTIONS_M11,
  12: QUESTIONS_M12,
  13: QUESTIONS_M13,
  14: QUESTIONS_M14,
  15: QUESTIONS_M15,
  16: QUESTIONS_M16,
  17: QUESTIONS_M17,
  18: QUESTIONS_M18,
  19: QUESTIONS_M19,
  20: QUESTIONS_M20,
  21: QUESTIONS_M21,
  22: QUESTIONS_M22,
  23: QUESTIONS_M23,
  24: QUESTIONS_M24,
  25: QUESTIONS_M25,
  26: QUESTIONS_M26,
  27: QUESTIONS_M27,
  28: QUESTIONS_M28,
  29: QUESTIONS_M29,
  30: QUESTIONS_M30,
  31: QUESTIONS_M31,
  32: QUESTIONS_M32,
  33: QUESTIONS_M33,
  34: QUESTIONS_M34,
};

const COOPER_CHAPTERS: { chapter: number; title: string }[] = [
  { chapter: 1, title: "Definition & Characteristics of ABA" },
  { chapter: 2, title: "Basic Concepts and Principles" },
  { chapter: 3, title: "Selecting & Defining Target Behaviors" },
  { chapter: 4, title: "Measuring Behavior" },
  { chapter: 5, title: "Improving & Assessing Measurement Quality" },
  { chapter: 6, title: "Constructing & Interpreting Graphs" },
  { chapter: 7, title: "Analyzing Behavior Change: Assumptions & Strategies" },
  { chapter: 8, title: "Reversal & Multielement Designs" },
  { chapter: 9, title: "Multiple Baseline & Changing Criterion Designs" },
  { chapter: 10, title: "Planning & Evaluating ABA Research" },
  { chapter: 11, title: "Positive Reinforcement" },
  { chapter: 12, title: "Negative Reinforcement" },
  { chapter: 13, title: "Schedules of Reinforcement" },
  { chapter: 14, title: "Positive Punishment" },
  { chapter: 15, title: "Negative Punishment" },
  { chapter: 16, title: "Motivating Operations" },
  { chapter: 17, title: "Stimulus Control" },
  { chapter: 18, title: "Verbal Behavior" },
  { chapter: 19, title: "Equivalence-based Instruction" },
  { chapter: 20, title: "Engineering Emergent Learning" },
  { chapter: 21, title: "Imitation, Modeling & Observational Learning" },
  { chapter: 22, title: "Shaping" },
  { chapter: 23, title: "Chaining" },
  { chapter: 24, title: "Extinction" },
  { chapter: 25, title: "Differential Reinforcement" },
  { chapter: 26, title: "Antecedent Interventions" },
  { chapter: 27, title: "Functional Behavior Assessment" },
  { chapter: 28, title: "Token Economy, Group Contingencies & Contracting" },
  { chapter: 29, title: "Self-Management" },
  { chapter: 30, title: "Generalization & Maintenance" },
  { chapter: 31, title: "Ethical & Professional Responsibilities" },
];

const COOPER_MODULES: ModuleMeta[] = COOPER_CHAPTERS.map(({ chapter, title }) => {
  const id = chapter + 3;
  return {
    id,
    label: `Ch ${chapter} · ${title}`,
    shortLabel: `Ch ${chapter}`,
    description: `Cooper, Heron & Heward, Chapter ${chapter}: ${title}.`,
    questions: COOPER_QUESTIONS[id],
    group: "cooper" as const,
    chapter,
    title,
    ethics: chapter === 31,
  };
});

export const MODULES: ModuleMeta[] = [...STUDY_MODULES, ...COOPER_MODULES];

export const MODULE_MAP = new Map<ModuleId, ModuleMeta>(MODULES.map((m) => [m.id, m]));

export function getModule(id: ModuleId): ModuleMeta {
  return MODULE_MAP.get(id)!;
}
