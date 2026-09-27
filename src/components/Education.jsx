import { useEffect, useRef, useState } from "react";
import { education } from "../data/content";
import SectionHeading from "./SectionHeading";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function BgVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) v.play().catch(() => { });
    else v.pause();
  }, []);

  return (
    <div className="edu-video-wrap">
      <video
        ref={ref}
        src="/video/about-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="edu-video-el"
      />
      <div className="edu-video-scrim" />
    </div>
  );
}

function EduCard({ entry, index }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="edu-card"
      style={{
        transitionDelay: `${index * 130}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div className="edu-card-top-line" />
      <div className="edu-card-inner">
        <span className="edu-card-period">{entry.period}</span>
        <h3 className="edu-card-title">{entry.title}</h3>
        {entry.org && <p className="edu-card-org">{entry.org}</p>}
        {entry.detail && (
          <span className="edu-card-badge">{entry.detail.replace(/\.$/, "")}</span>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="edu-section">

      {/* ── normal paper heading — exactly like other sections ── */}
      <div className="edu-heading-area">
        <SectionHeading num="05" title="Education" note={`${education.length} entries`} />
      </div>

      {/* ── cinematic video zone with cards ── */}
      <div className="edu-video-zone">
        <BgVideo />
        <div className="edu-cards-layer">
          <div className="edu-grid">
            {education.map((entry, i) => (
              <EduCard key={entry.title} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── outer section ── */
        .edu-section {
          border-bottom: 1px solid var(--color-line);
        }

        /* ── paper heading strip (matches other sections) ── */
        .edu-heading-area {
          padding: 3.5rem 1.5rem 0;
          background: var(--color-paper);
        }
        @media (min-width: 768px) {
          .edu-heading-area { padding: 4rem 4rem 0; }
        }

        /* ── video zone ── */
        .edu-video-zone {
          position: relative;
          min-height: 320px;
          overflow: hidden;
        }
        .edu-video-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .edu-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
        }
        .edu-video-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(8,6,4,0.35) 0%,
            rgba(8,6,4,0.5)  60%,
            rgba(8,6,4,0.72) 100%
          );
        }

        /* ── cards layer ── */
        .edu-cards-layer {
          position: relative;
          z-index: 1;
          padding: 2.5rem 1.5rem 3rem;
          display: flex;
          align-items: flex-end;
          min-height: 320px;
        }
        @media (min-width: 768px) {
          .edu-cards-layer { padding: 2.5rem 4rem 3rem; }
        }

        /* ── 3-col grid ── */
        .edu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          width: 100%;
        }
        @media (min-width: 640px) {
          .edu-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── frosted glass card ── */
        .edu-card {
          position: relative;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          overflow: hidden;
          will-change: opacity, transform;
          transition: border-color 0.25s, transform 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .edu-card:hover {
          border-color: color-mix(in srgb, var(--color-accent) 50%, transparent);
          transform: translateY(-3px);
        }
        .edu-card-top-line {
          height: 2px;
          background: linear-gradient(to right, var(--color-accent) 0%, transparent 80%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .edu-card:hover .edu-card-top-line { opacity: 1; }

        .edu-card-inner {
          padding: 1.25rem 1.3rem 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .edu-card-period {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f5f0e8;
          margin-bottom: 0.2rem;
        }
        .edu-card-title {
          font-family: var(--font-display);
          font-size: clamp(0.9rem, 1.6vw, 1.05rem);
          font-weight: 600;
          color: #f5f0e8;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        .edu-card-org {
          font-size: 0.75rem;
          color: rgba(245,240,232,0.85);
          line-height: 1.4;
          margin-top: 0.1rem;
        }
        .edu-card-badge {
          display: inline-block;
          margin-top: 0.65rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: #f5f0e8;
          background: rgba(184, 51, 15, 0.18);
          border: 1px solid rgba(184, 51, 15, 0.38);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          letter-spacing: 0.03em;
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
}
