"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    duration: "With in 1 Week",
    description:
      "We dig into your business, users, competitors, and goals. No assumptions, just brutal honesty about what the product needs to be.",
    deliverables: ["Product Brief", "User Research", "Competitive Analysis", "Technical Scoping"],
  },
  {
    num: "02",
    title: "Design",
    duration: "Week 2",
    description:
      "From information architecture to high-fidelity prototypes. We design in public, sharing progress every few days, not at the end.",
    deliverables: ["Wireframes", "Design System", "Hi-Fi Prototypes", "Interaction Design"],
  },
  {
    num: "03",
    title: "Build",
    duration: "Week 3-4",
    description:
      "Agile sprints, weekly demos, and daily standups. You always know what we're working on, what's blocked, and what's shipping.",
    deliverables: ["Weekly Demos", "Staging Deploys", "QA Testing", "Performance Audit"],
  },
  {
    num: "04",
    title: "Launch",
    duration: "Week 4-6",
    description:
      "Production deploy with full monitoring, error tracking, and analytics. We stay on-call for the first 2 weeks post-launch.",
    deliverables: ["Production Deploy", "Monitoring Setup", "Analytics", "Documentation"],
  },
];

export default function Process() {
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
    <section id="process" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-on-scroll">
          <span className="font-mono text-xs text-volt tracking-widest uppercase">How We Work</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-800 text-cream mt-3 leading-none tracking-tight">
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="animate-on-scroll group bg-ink-2 hover:bg-ink-3 transition-all duration-300 p-8 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-px h-8 bg-white/10 translate-x-px -translate-y-4" />
              )}

              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-5xl font-800 text-white/5 group-hover:text-volt/10 transition-colors">
                  {step.num}
                </span>
                <span className="font-mono text-xs text-mist-2 tracking-wider">{step.duration}</span>
              </div>

              <h3 className="font-display text-xl font-700 text-cream mb-3">{step.title}</h3>
              <p className="text-mist text-sm font-300 leading-relaxed mb-6">{step.description}</p>

              <div className="space-y-2">
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs font-mono text-mist-2">
                    <span className="text-volt">✓</span>
                    {d}
                  </div>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-volt opacity-0 group-hover:opacity-30 transition-opacity" />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 animate-on-scroll">
          <div className="border border-volt/20 bg-volt/5 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-700 text-cream">
                Ready to start your project?
              </h3>
              <p className="text-mist text-sm mt-2 font-300">
                Most projects kick off within 2 weeks of our first call.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-8 py-4 bg-volt text-ink font-display font-700 text-base rounded-sm hover:bg-cream transition-colors volt-glow whitespace-nowrap"
            >
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
