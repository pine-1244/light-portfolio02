import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_/[]{}=+*^#";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useScramble(text, { trigger = true, speed = 1 } = {}) {
  const [output, setOutput] = useState(text);
  const frameRef = useRef(0);
  const rafRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    if (prefersReducedMotion()) {
      setOutput(text);
      return;
    }

    const chars = text.split("");
    const starts = chars.map((_, i) => i * (1.4 / speed));
    const durs = chars.map(() => 6 + Math.random() * 6);
    const totalFrames = Math.max(...starts.map((s, i) => s + durs[i])) + 4;

    frameRef.current = 0;

    const tick = () => {
      const frame = frameRef.current;
      let done = true;
      const next = chars
        .map((ch, i) => {
          if (ch === " ") return " ";
          const start = starts[i];
          const end = start + durs[i];
          if (frame < start) {
            done = false;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          if (frame < end) {
            done = false;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          return ch;
        })
        .join("");

      setOutput(next);
      frameRef.current += 1;

      if (!done && frameRef.current < totalFrames) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setOutput(text);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, text]);

  return output;
}
