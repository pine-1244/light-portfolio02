import { profile } from "../data/content";
import MagneticButton from "./MagneticButton";

function ArrowUpIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-10 md:px-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-ink">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-soft">{profile.title}</p>
        </div>

        <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:gap-6">
          <p className="font-mono text-xs text-ink-soft">
            © {year} {profile.name}. Built from scratch with React, Vite &amp; Tailwind.
          </p>
          <MagneticButton
            as="button"
            type="button"
            onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <ArrowUpIcon /> Back to top
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
