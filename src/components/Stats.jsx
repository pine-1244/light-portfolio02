import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

const HERO_STATS = [
  { value: 4, decimals: 0, suffix: "", label: "Roles held" },
  { value: 2, decimals: 0, suffix: "", label: "Degrees earned" },
  { value: 98, decimals: 0, suffix: "%", label: "Project delivery success rate" },
  { value: 6, decimals: 0, suffix: "", label: "Skill areas" },
];

function Stat({ value, decimals, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.3, ease: "easeOut" });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-semibold tabular-nums text-ink md:text-4xl">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
        {label}
      </p>
    </div>
  );
}

export default function Stats({ stats = HERO_STATS, className = "grid grid-cols-2 gap-8 md:grid-cols-4" }) {
  return (
    <div className={className}>
      {stats.map((stat) => (
        <Stat key={stat.label} {...stat} />
      ))}
    </div>
  );
}
