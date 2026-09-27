import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  const [filter, setFilter] = useState("All");

  const allItems = useMemo(
    () => skillGroups.flatMap((group) => group.items.map((item) => ({ item, group: group.label }))),
    [],
  );
  const visible = filter === "All" ? allItems : allItems.filter((i) => i.group === filter);

  return (
    <section id="skills" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <SectionHeading num="04" title="Skills" note={`${skillGroups.length} categories`} />

      <Reveal as="div" className="flex flex-wrap gap-2">
        {["All", ...skillGroups.map((g) => g.label)].map((label) => {
          const isActive = filter === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setFilter(label)}
              className={`rounded-full border px-4 py-2 font-mono text-sm uppercase tracking-wider transition-colors ${
                isActive
                  ? "border-accent bg-accent text-paper"
                  : "border-line text-ink-muted hover:border-ink hover:text-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </Reveal>

      <motion.ul layout className="mt-10 flex flex-wrap gap-2.5 md:mt-12">
        <AnimatePresence>
          {visible.map(({ item }) => (
            <motion.li
              key={item}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="rounded border border-line px-3.5 py-2 font-mono text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent-ink"
            >
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
