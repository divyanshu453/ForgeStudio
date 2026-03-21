const items = [
  "End-to-End Products",
  "UI / UX Design",
  "SaaS Platforms",
  "Landing Pages",
  "Scalable Systems",
  "Mobile Apps",
  "Design Systems",
  "Brand Identity",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-white/5 bg-ink-2 py-5 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="font-display text-sm font-600 text-mist tracking-widest uppercase whitespace-nowrap px-6">
              {item}
            </span>
            <span className="text-volt text-xl leading-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
