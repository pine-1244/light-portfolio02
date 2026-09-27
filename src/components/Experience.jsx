import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Stats from "./Stats";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <SectionHeading num="02" title="Experience" />
      {experience.map((exp, index) => (
        <div key={index}>
          <Reveal>
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
              {exp.role}
              <span className="text-ink-muted" style={{ whiteSpace: "pre" }} >{"    |    "}</span>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {exp.company}
              </a>
            </h3>
            <div className="experience_period">
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                {exp.summary}
              </p>
              <p>
                {exp.period}
              </p>
            </div>

          </Reveal>

          <div className="mt-8 border-t border-line md:mt-10">
            <div>
              {exp.work.map((item, i) => (
                <Reveal
                  key={item.tag}
                  delay={100 + i * 100}
                  as="div"
                  className="group relative grid grid-cols-1 gap-x-6 gap-y-2 border-b border-line py-4 md:grid-cols-[2.5rem_1fr_auto] md:items-baseline md:py-5"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-6 w-[3px] bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:-left-16"
                  />
                  <span className="hidden font-mono text-sm text-ink-muted md:inline">{item.tag}</span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                      <span className="font-mono text-sm text-ink-muted md:hidden">{item.tag}</span>
                      <h4 className="font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent md:text-xl">
                        {item.title}
                      </h4>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                        {item.type}
                      </span>
                    </div>
                    <ul className="mt-1 flex max-w-xl flex-col gap-0.5 text-sm leading-snug text-ink-soft md:text-base">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-ink-muted" aria-hidden="true">—</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul className="flex flex-wrap gap-2 md:justify-end">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-ink-soft transition-colors duration-200 group-hover:border-accent/40"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

          </div>

          <Reveal delay={500} as="div" className="mt-8 md:mt-10">
            <Stats stats={exp.impact} className="grid grid-cols-3 gap-4 md:gap-8" />
          </Reveal>
        </div>

      ))}

    </section>
  );
}
