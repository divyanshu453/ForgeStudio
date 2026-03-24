"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Forge Studio didn't just build our product — they fundamentally improved how we thought about it. The result was a platform 10x better than our original spec.",
    author: "Sarah Chen",
    role: "CEO, NovaPay",
    initial: "S",
    color: "#C8FF00",
  },
  {
    quote:
      "We'd tried two agencies before Forge. The difference was night and day. These people genuinely care about the outcome, not just the invoice.",
    author: "Marcus Williams",
    role: "CTO, Arclight",
    initial: "M",
    color: "#7C6DFA",
  },
  {
    quote:
      "They rebuilt our entire UI/UX in 8 weeks and drop-off fell by 60%. That number alone paid for the engagement 20 times over.",
    author: "Priya Sharma",
    role: "VP Product, Bloom Health",
    initial: "P",
    color: "#00D9FF",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="font-mono text-xs text-volt tracking-widest uppercase">
            Client Love
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-800 text-cream mt-3 leading-none tracking-tight">
            Don&apos;t take our word for it
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="animate-on-scroll bg-ink-2 hover:bg-ink-3 transition-all duration-300 p-8 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote mark */}
              <div className="font-display text-6xl font-800 text-volt/10 group-hover:text-volt/20 transition-colors leading-none mb-4">
                &quot;
              </div>

              <p className="text-cream text-base font-300 leading-relaxed mb-8 italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center font-display font-700 text-ink text-sm"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-600 text-cream text-sm">
                    {t.author}
                  </div>
                  <div className="font-mono text-xs text-mist-2">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
