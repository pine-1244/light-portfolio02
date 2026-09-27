import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { focusAreas } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  const [active, setActive] = useState(0);
  const current = focusAreas[active];

  return (
    <section id="about" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <SectionHeading num="03" title="About" note="4 focus areas" />

      <Reveal>
        <p className="text-xl leading-relaxed text-ink md:text-2xl">
          Experience across software engineering and applied AI, connecting product requirements with maintainable applications. Technical foundation spans modern web interfaces, backend services, and intelligent workflows.
        </p>
      </Reveal>

      <Reveal as="div" delay={100} className="mt-14 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] md:gap-14">
          <div className="flex gap-1 overflow-x-auto pb-1 md:flex-col md:gap-0 md:overflow-visible md:pb-0">
            {focusAreas.map((area, i) => {
              const isActive = active === i;
              return (
                <button
                  key={area.tag}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative flex flex-none items-center gap-3 whitespace-nowrap px-4 py-3 text-left font-display text-xl font-semibold tracking-tight transition-colors md:w-full md:px-4 md:py-4 ${isActive ? "text-accent" : "text-ink-muted hover:text-ink"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="about-indicator"
                      className="absolute inset-y-0 left-0 w-[3px] bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className="font-mono text-base text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{area.title}</span>
                </button>
              );
            })}
          </div>

          <div className="relative mt-8 min-h-[180px] border-t border-line pt-8 md:mt-0 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span className="font-mono text-sm uppercase tracking-wider text-accent">
                  {current.tag}
                </span>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
                  {current.detail}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {current.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-line px-3 py-1.5 font-mono text-sm text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
