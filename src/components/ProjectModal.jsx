import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FallbackCover from "./FallbackCover";

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction = "left" }) {
  const d = direction === "left" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13";
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M2.5 1.4L10 6L2.5 10.6V1.4Z" />
    </svg>
  );
}

export default function ProjectModal({ project, onClose, onPrev, onNext }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const closeRef = useRef(null);
  const media = project.video
    ? [{ type: "video", src: project.video }]
    : (project.images || []).map((img) => ({ type: "image", ...img }));

  const goToMedia = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-paper"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ type: "spring", stiffness: 340, damping: 32 }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          <CloseIcon />
        </button>

        <div className="flex-1 overflow-y-auto">
          <div className="relative flex w-full items-center justify-center overflow-hidden bg-paper-3 aspect-video">
            {media.length > 0 ? (
              media[activeIndex].type === "video" ? (
                <video
                  key={media[activeIndex].src}
                  src={media[activeIndex].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  key={media[activeIndex].src}
                  src={media[activeIndex].src}
                  alt={media[activeIndex].alt}
                  className="h-full w-full object-cover"
                />
              )
            ) : (
              <FallbackCover tag={project.tag} variant={project.coverVariant} />
            )}

            {media.length > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => goToMedia((activeIndex - 1 + media.length) % media.length)}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm transition-colors hover:border-ink"
                >
                  <ChevronIcon direction="left" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => goToMedia((activeIndex + 1) % media.length)}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm transition-colors hover:border-ink"
                >
                  <ChevronIcon direction="right" />
                </button>
                <span className="absolute bottom-3 right-3 rounded bg-ink/70 px-2 py-1 font-mono text-[10px] text-paper">
                  {activeIndex + 1} / {media.length}
                </span>
              </>
            ) : null}
          </div>

          {media.length > 1 ? (
            <div className="flex gap-2 overflow-x-auto border-b border-line bg-paper-2 p-3">
              {media.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => goToMedia(i)}
                  aria-label={item.type === "video" ? "View preview video" : `View image ${i + 1}`}
                  className={`relative h-12 w-20 flex-none overflow-hidden rounded border-2 transition-colors ${i === activeIndex ? "border-accent" : "border-transparent hover:border-line"
                    }`}
                >
                  {item.type === "video" ? (
                    <>
                      <video src={item.src} muted playsInline preload="metadata" className="h-full w-full object-cover object-top" />
                      <span className="absolute inset-0 flex items-center justify-center bg-ink/30 text-paper">
                        <PlayIcon />
                      </span>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                  )}
                </button>
              ))}
            </div>
          ) : null}

          <div className="p-6 md:p-8">
            <span className="font-mono text-xs text-accent">{project.tag}</span>
            <h3
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl"
            >
              {project.title}
            </h3>
            <div className="project_link">
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
                {project.subtitle}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {project.link}
              </a>
            </div>


            <p className="mt-1 font-mono text-xs text-ink-muted">{project.year}</p>

            <div className="mt-6 space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Problem</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                  {project.problem}
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Approach</p>
                <ul className="mt-2 space-y-2">
                  {project.approach.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-ink-soft md:text-base">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-line pt-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Result</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink md:text-base">
                  {project.result}
                </p>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-line bg-paper-2 px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-none items-center justify-between border-t border-line px-6 py-3">
          <button
            type="button"
            onClick={onPrev}
            className="font-mono text-xs text-ink-muted transition-colors hover:text-accent"
          >
            ← Prev project
          </button>
          <button
            type="button"
            onClick={onNext}
            className="font-mono text-xs text-ink-muted transition-colors hover:text-accent"
          >
            Next project →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
