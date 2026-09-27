import { useEffect, useRef } from "react";
import { profile } from "../data/content";
import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import MagneticButton from "./MagneticButton";
import Stats from "./Stats";

function BgVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) video.play().catch(() => { });
    else video.pause();
  }, []);

  return (
    <div className="hero-video-bg">
      <video
        ref={ref}
        poster="/video/hero-robot-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hero-video-el"
      >
        {/* AV1 @1440p — oversampled so retina screens downscale instead of upscaling.
            codecs level is 12 (5.0) for 1440p; it was 08 at 1080p. Keep in sync with
            the file or browsers skip this source and fall through to the h264 below. */}
        <source src="/video/hero-robot.webm" type="video/webm; codecs=av01.0.12M.08" />
        <source src="/video/hero-robot.mp4" type="video/mp4" />
      </video>
      {/* layered gradient mask — paper color bleeds in from left & bottom so text is readable */}
      <div className="hero-video-mask" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* ── stage: bounds the video to the area above the stats bar, so the
             bottom-anchored frame lands exactly on the stats bar's top line ── */}
      <div className="hero-stage">
        <BgVideo />

        {/* ── content ── */}
        <div className="hero-content">
          <div className="hero-text-col">
            <Reveal>
              <div className="hero-badge">
                <span className="hero-badge-dot">
                  <span className="hero-badge-ping" />
                  <span className="hero-badge-core" />
                </span>
                Open to work
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="hero-title">{profile.title}</p>
            </Reveal>

            <ScrambleText
              as="h1"
              text={profile.name}
              speed={0.75}
              className="hero-name"
            />

            <Reveal delay={260}>
              <p className="hero-description">{profile.pitch}</p>
            </Reveal>

            <Reveal delay={360}>
              <div className="hero-ctas">
                <MagneticButton
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hero-btn-primary"
                >
                  View projects
                </MagneticButton>
                <MagneticButton
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hero-btn-secondary"
                >
                  Get in touch
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── stats bar ── */}
      <div className="hero-stats-bar">
        <Reveal delay={440}>
          <Stats />
        </Reveal>
      </div>

      <style>{`
        /* ── section shell ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-bottom: 1px solid var(--color-line);
          overflow: hidden;
        }

        /* ── stage (video + text), sits above the stats bar ── */
        .hero-stage {
          position: relative;
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        /* ── video layer ── */
        .hero-video-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        /* mobile: the viewport is far taller than 16:9, so fill it — a letterboxed
           frame here would shrink to a thin band */
        .hero-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 45% 30%;
        }
        /* desktop: zoomed out and bottom-anchored, so the whole desk composition
           reads instead of a tight crop. Also cuts the magnification of a
           1080p-native source, which is most of the perceived sharpness win.
           --hero-zoom: 1 = entire frame visible; raise it to crop in. */
        @media (min-width: 768px) {
          .hero-video-bg { --hero-zoom: 1; }
          .hero-video-el {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% * var(--hero-zoom));
            height: auto;
            /* height:auto derives the height from the 16:9 source, so on any stage
               narrower than 16:9 the frame comes up short and — being bottom-anchored
               — leaves a paper band above. These floors clamp it to the stage and let
               object-fit crop instead; cover (not fill) so the floor can't distort it. */
            min-width: 100%;
            min-height: 100%;
            object-fit: cover;
          }
        }
        /* gradient: only fade left edge (behind text) — bottom edge is a crisp line, not a fade */
        .hero-video-mask {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            var(--color-paper) 0%,
            color-mix(in srgb, var(--color-paper) 70%, transparent) 20%,
            color-mix(in srgb, var(--color-paper) 15%, transparent) 38%,
            transparent 55%
          );
        }

        /* ── content layer ── */
        .hero-content {
          position: relative;
          z-index: 1;
          padding: 6rem 1.5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        @media (min-width: 768px) {
          .hero-content { padding: 6rem 4rem 0; }
        }

        .hero-text-col {
          max-width: 640px;
        }

        /* badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 9999px;
          border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
          background: var(--color-accent-soft);
          padding: 0.375rem 0.75rem;
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-accent-ink);
          margin-bottom: 1.5rem;
        }
        .hero-badge-dot {
          position: relative;
          display: flex;
          width: 6px;
          height: 6px;
        }
        .hero-badge-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--color-accent);
          opacity: 0.75;
          animation: ping 1.2s cubic-bezier(0,0,0.2,1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-badge-ping { animation: none; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .hero-badge-core {
          position: relative;
          display: inline-flex;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
        }

        /* label */
        .hero-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-ink-soft);
          margin-bottom: 0.75rem;
        }

        /* name */
        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 10vw, 5.5rem);
          font-weight: 600;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: var(--color-ink);
          margin-bottom: 2rem;
        }

        /* pitch */
        .hero-pitch {
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.7;
          color: var(--color-ink-soft);
          max-width: 46ch;
          margin-bottom: 2.5rem;
        }

        /* ctas */
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }
        .hero-btn-primary {
          border-radius: 6px;
          background: var(--color-ink);
          padding: 0.75rem 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--color-paper);
          transition: background 0.2s;
        }
        .hero-btn-primary:hover { background: var(--color-accent); }
        .hero-btn-secondary {
          border-radius: 6px;
          border: 1px solid var(--color-ink-muted);
          padding: 0.75rem 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--color-ink);
          transition: border-color 0.2s;
        }
        .hero-btn-secondary:hover { border-color: var(--color-ink); }

        /* stats bar */
        .hero-stats-bar {
          position: relative;
          z-index: 1;
          padding: 1.5rem 1.5rem 2rem;
          background: var(--color-paper);
          border-top: 1px solid var(--color-line);
        }
        @media (min-width: 768px) {
          .hero-stats-bar { padding: 2rem 4rem 2.5rem; }
        }
      `}</style>
    </section>
  );
}
