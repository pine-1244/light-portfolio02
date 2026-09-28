import { motion } from "framer-motion";
import { navSections, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { MapPinIcon, LinkedInIcon, GithubIcon } from "./icons";

const ids = navSections.map((section) => section.id);

export default function Nav() {
  const activeId = useActiveSection(ids);

  const scrollTo = (id) => (event) => {
    event.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-paper/95 px-5 backdrop-blur md:inset-y-0 md:left-0 md:right-auto md:h-auto md:w-56 md:flex-col md:items-stretch md:justify-between md:border-b-0 md:border-r md:px-0 md:py-10"
    >
      <a
        href="#hero"
        onClick={scrollTo("hero")}
        aria-label="Home"
        className="font-display text-2xl font-bold tracking-tight text-ink transition-opacity hover:opacity-70 md:px-8 md:text-6xl"
      >
        P,G<span className="text-accent">.</span>
      </a>

      <ul className="hidden md:flex md:flex-col md:gap-1 md:px-4">
        {navSections.map((section) => {
          const active = section.id === activeId;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={scrollTo(section.id)}
                aria-current={active ? "location" : undefined}
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${active
                  ? "text-accent"
                  : "text-ink-muted hover:text-ink"
                  }`}
              >
                <span className="relative h-px w-5 flex-none">
                  {active ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  ) : (
                    <span className="absolute inset-y-0 left-0 w-2.5 bg-ink-muted transition-all group-hover:w-4 group-hover:bg-ink" />
                  )}
                </span>

                <span
                  className={`text-[10px] font-bold ${active ? "text-accent" : "text-ink-muted"
                    }`}
                >
                  {section.num}
                </span>

                <span>{section.label}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="hidden font-mono text-sm font-bold leading-relaxed md:block md:px-8">
        <p className="flex items-center gap-1.5 text-ink-soft">
          <MapPinIcon />
          North Carolina, US
        </p>

        <p className="mt-3 flex items-center gap-2 text-ink-soft">
          <span className="relative flex h-2 w-2 flex-none">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to work
        </p>

        <div className="mt-4 flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <LinkedInIcon size={20} />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <GithubIcon size={20} />
          </a>
        </div>
      </div>

      <a
        href="#contact"
        onClick={scrollTo("contact")}
        className="font-mono text-xs font-bold uppercase tracking-wider text-accent md:hidden"
      >
        Contact
      </a>
    </nav>
  );
}