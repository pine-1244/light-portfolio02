import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  "loading profile.json",
  "compiling focus_areas[4]",
  "indexing projects[6]",
  "ready",
];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function Preloader({ onDone }) {
  const [percent, setPercent] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const skip = prefersReducedMotion();

  useEffect(() => {
    if (skip) {
      onDone();
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let raf;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      onDone();
    };

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setPercent(pct);
      setLineIndex(Math.min(LINES.length - 1, Math.floor((pct / 100) * LINES.length)));
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(finish, 250);
      }
    };

    raf = requestAnimationFrame(tick);
    // Safety net: never trap the user behind the preloader if rAF stalls.
    const fallback = setTimeout(finish, duration + 1500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (skip) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
    >
      <div className="w-80 font-mono text-base text-ink-soft">
        <p className="mb-5 text-lg text-ink-muted">{LINES[lineIndex]}</p>
        <div className="h-[3px] w-full bg-line">
          <motion.div
            className="h-[3px] bg-accent"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-4 text-2xl font-semibold tabular-nums text-ink">{percent}%</p>
      </div>
    </motion.div>
  );
}
