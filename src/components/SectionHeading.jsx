export default function SectionHeading({ num, title, note }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-4 md:mb-14">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{num}</span>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {title}
        </h2>
      </div>
      {note ? (
        <span className="hidden font-mono text-xs uppercase tracking-wider text-ink-soft md:inline">
          {note}
        </span>
      ) : null}
    </div>
  );
}
