import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import FallbackCover from "./FallbackCover";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M2.5 1.4L10 6L2.5 10.6V1.4Z" />
    </svg>
  );
}

function useAutoplayInView(threshold = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

export default function ProjectCard({ project, index, onOpen }) {
  const cover = project.images?.[0];
  const videoRef = useAutoplayInView();

  return (
    <Reveal
      as="button"
      type="button"
      delay={index * 80}
      onClick={() => onOpen(index)}
      className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-line bg-paper text-left transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-accent/10 opacity-0 scan-sweep" />
      <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />

      <div className="relative aspect-video overflow-hidden bg-paper-2">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : cover ? (
          <img
            src={cover.src}
            alt=""
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <FallbackCover tag={project.tag} variant={project.coverVariant} />
        )}

        {project.video ? (
          <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper/90 text-ink backdrop-blur">
            <PlayIcon />
          </span>
        ) : null}

        <span className="absolute right-3 top-3 rounded-full border border-line bg-paper/90 px-2.5 py-1 font-mono text-xs text-ink-soft backdrop-blur">
          {project.tag}
        </span>

        <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
          <ArrowIcon />
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="truncate font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-0.5 truncate font-mono text-xs uppercase tracking-wider text-ink-soft">
            {project.subtitle}
          </p>
        </div>
        <span className="flex-none font-mono text-xs text-ink-soft">{project.year}</span>
      </div>
    </Reveal>
  );
}
