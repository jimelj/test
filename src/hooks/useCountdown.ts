import { useEffect, useRef, useState } from "react";

export const EXAM_DURATION_SECONDS = 8 * 60 * 60; // 8 hours

// Remaining seconds derived from a fixed start time, so a refresh keeps counting.
export function useCountdown(startedAt: number, active: boolean, onExpire: () => void) {
  const compute = () =>
    Math.max(0, EXAM_DURATION_SECONDS - Math.floor((Date.now() - startedAt) / 1000));

  const [remaining, setRemaining] = useState(compute);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!active) return;
    const tick = () => {
      const r = compute();
      setRemaining(r);
      if (r <= 0 && !firedRef.current) {
        firedRef.current = true;
        onExpire();
      }
    };
    tick();
    const handle = window.setInterval(tick, 1000);
    return () => window.clearInterval(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startedAt, active]);

  return remaining;
}

export function formatHMS(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

export function formatDuration(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}
