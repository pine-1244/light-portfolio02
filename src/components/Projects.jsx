import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { profile, projects } from "../data/content";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const close = () => setSelected(null);
  const prev = () => setSelected((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setSelected((i) => (i + 1) % projects.length);

  return (
    <section id="projects" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <SectionHeading num="01" title="Projects" note={`${projects.length} case studies`} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.tag} project={project} index={i} onOpen={setSelected} />
        ))}
      </div>

      <div className="pt-10 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          See more on GitHub ↗
        </a>
      </div>

      <AnimatePresence>
        {selected !== null ? (
          <ProjectModal
            project={projects[selected]}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
