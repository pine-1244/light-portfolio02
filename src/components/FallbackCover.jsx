function ChartMotif() {
  const bars = [38, 62, 45, 78, 55, 30];
  return (
    <div className="flex items-end gap-3">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`w-5 rounded-t-sm ${i === 3 ? "bg-accent" : "bg-paper-3"}`}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

function LayersMotif() {
  return (
    <div className="relative h-20 w-24">
      <div className="absolute inset-0 rounded-lg border-2 border-paper-3 bg-paper" />
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border-2 border-paper-3 bg-paper" />
      <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-lg border-2 border-accent bg-paper" />
    </div>
  );
}

const MOTIFS = {
  chart: ChartMotif,
  layers: LayersMotif,
};

export default function FallbackCover({ tag, variant }) {
  const Motif = MOTIFS[variant];

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-paper-2"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, var(--color-line) 0px, var(--color-line) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, var(--color-line) 0px, var(--color-line) 1px, transparent 1px, transparent 28px)",
      }}
    >
      {Motif ? (
        <Motif />
      ) : (
        <span className="font-mono text-5xl font-medium tracking-tight text-paper-3">{tag}</span>
      )}
      <span className="absolute bottom-3 left-3 rounded border border-line bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
        Cover coming soon
      </span>
    </div>
  );
}
