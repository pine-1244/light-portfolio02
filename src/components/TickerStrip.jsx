const KEYWORDS = [
  "LLM FINE-TUNING",
  "RAG",
  "FASTAPI",
  "REACT",
  "SCIKIT-LEARN",
  "LANGCHAIN",
  "POSTGRESQL",
  "DOCKER",
  "PYTORCH",
  "TAILWIND",
];

export default function TickerStrip() {
  const items = [...KEYWORDS, ...KEYWORDS];

  return (
    <div className="overflow-hidden border-b border-line bg-ink py-4">
      <div className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-paper"
          >
            {word}
            <span className="text-[#ff5a33]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
