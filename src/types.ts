export type Question = {
  id: number;
  topic: string;
  prompt: string;
  options: string[]; // exactly 4, original order — correctIndex points into this
  correctIndex: number;
  explanation: string; // sourced from her notes; shown on review
  highlight?: "ethics" | "blue" | "purple" | "green" | "magenta" | "orange" | "yellow" | "white" | "lime"; // domain color treatment
};

export type Player = {
  first: string;
  last: string;
};

export type ModuleId = 1 | 2 | 3;

export type Attempt = {
  player: Player;
  pin: string; // 4-digit resume PIN; part of the cross-device resume key
  moduleId: ModuleId;
  timerEnabled: boolean;
  startedAt: number; // epoch ms
  finishedAt: number | null;
  order: number[]; // question ids, presentation order
  optionOrder: Record<number, number[]>; // questionId -> presentationIdx => originalIdx
  answers: Record<number, number>; // questionId -> chosen ORIGINAL option index
  submitted: boolean;
  updatedAt?: number; // epoch ms of last save; used to reconcile local vs server
};

export type LeaderboardEntry = {
  id: string;
  first_name: string;
  last_name: string;
  score: number;
  total: number;
  duration_seconds: number;
  module: number;
  timed: boolean;
  created_at: string;
};

export type ThemeId = "teal" | "emerald" | "violet" | "blue";
