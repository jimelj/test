import type { ModuleId, Question } from "../types";
import { QUESTIONS_M1 } from "./questions_m1";
import { QUESTIONS_M2 } from "./questions_m2";
import { QUESTIONS_M3 } from "./questions_m3";

export type ModuleMeta = {
  id: ModuleId;
  label: string;
  shortLabel: string;
  description: string;
  questions: Question[];
};

export const MODULES: ModuleMeta[] = [
  {
    id: 1,
    label: "Module 1",
    shortLabel: "M1",
    description: "SNABA Live Collective Notes (Collectives 1–21). Core ABA concepts, measurement, behavior change procedures, and verbal behavior.",
    questions: QUESTIONS_M1,
  },
  {
    id: 2,
    label: "Module 2",
    shortLabel: "M2",
    description: "BAS 6th Edition Study Guide. Includes BACB ethics code questions — watch for the gold ⚖ Ethics markers.",
    questions: QUESTIONS_M2,
  },
  {
    id: 3,
    label: "Module 3",
    shortLabel: "M3",
    description: "PTBA Study Guide. Additional practice covering assessment, treatment planning, and professional practice.",
    questions: QUESTIONS_M3,
  },
];

export const MODULE_MAP = new Map<ModuleId, ModuleMeta>(MODULES.map((m) => [m.id, m]));

export function getModule(id: ModuleId): ModuleMeta {
  return MODULE_MAP.get(id)!;
}
