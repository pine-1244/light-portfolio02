import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function MagneticButton({
  as = "a",
  className = "",
  children,
  strength = 0.25,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 16, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 200, damping: 16, mass: 0.2 });
  const reduced = prefersReducedMotion();

  const handleMouseMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[as] ?? motion.a;

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={reduced ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
