import { useState } from "react";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { MapPinIcon, FileTextIcon, DownloadIcon } from "./icons";

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 10.5V3.5C3 2.94772 3.44772 2.5 4 2.5H10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the mailto button next to it still works
    }
  };

  return (
    <section id="contact" className="px-6 py-16 md:px-16 md:py-20">
      <SectionHeading
        num="06"
        title="Contact"
        note={
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon />
            North Carolina, US
          </span>
        }
      />

      <Reveal>
        <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
          Need a senior full-stack AI engineer to build reliable applications across frontend, backend, and LLM integrations?
        </h3>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="rounded-md bg-ink px-5 py-2.5 font-mono text-sm text-paper transition-colors hover:bg-accent"
          >
            {profile.email}
          </MagneticButton>

          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center gap-2 rounded-md border border-line px-3.5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-8 border-t border-line pt-6">
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-ink-soft">
            Resume
          </p>
          <div className="flex flex-wrap gap-3">
            {profile.resumes.map((resume) => (
              <MagneticButton
                key={resume.href}
                href={resume.href}
                download
                className="group flex items-center gap-3 rounded-md border border-line bg-paper px-4 py-3 transition-colors hover:border-accent"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded border border-line text-ink-soft transition-colors group-hover:border-accent group-hover:text-accent">
                  <FileTextIcon />
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-sm text-ink">{resume.label}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    PDF · Download
                  </span>
                </span>
                <DownloadIcon
                  size={15}
                  className="ml-3 flex-none text-ink-muted transition-colors group-hover:text-accent"
                />
              </MagneticButton>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
