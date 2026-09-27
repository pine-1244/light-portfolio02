import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[95] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
