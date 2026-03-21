"use client";
import { useEffect, useRef } from "react";
import {
  Layers,
  Zap,
  Monitor,
  Rocket,
  Code2,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    number: "01",
    title: "End-to-End Digital Products",
    description:
      "From product strategy and discovery all the way to launch and iteration. We own the entire product lifecycle so you don't have to juggle vendors.",
    tags: ["Strategy", "Architecture", "Development", "Launch"],
    highlight: true,
  },
  {
    icon: Palette,
    number: "02",
    title: "UI / UX Design",
    description:
      "Interfaces that convert, delight, and retain. Research-backed design systems that scale across your entire product surface.",
    tags: ["Research", "Wireframes", "Prototypes", "Design Systems"],
    highlight: false,
  },
  {
    icon: Monitor,
    number: "03",
    title: "Landing Pages",
    description:
      "High-converting landing pages built for speed, SEO, and impact. From hero to CTA, every pixel earns its place.",
    tags: ["Conversion-focused", "SEO", "Performance", "A/B Ready"],
    highlight: false,
  },
  {
    icon: Zap,
    number: "04",
    title: "SaaS Platforms",
    description:
      "Full-stack SaaS products — auth, billing, dashboards, roles, and all the plumbing that separates a prototype from a real business.",
    tags: ["Auth", "Billing", "Dashboards", "Multi-tenant"],
    highlight: false,
  },
  {
    icon: Rocket,
    number: "05",
    title: "Scalable Platforms",
    description:
      "Infrastructure that grows with you. We architect systems that handle 10 users and 10 million without breaking a sweat.",
    tags: ["Cloud", "Microservices", "DevOps", "Monitoring"],
    highlight: false,
  },
  {
    icon: Code2,
    number: "06",
    title: "Technical Consulting",
    description:
      "Stuck on architecture decisions, tech debt, or vendor lock-in? We come in, assess, and give you an honest roadmap.",
    tags: ["Audit", "Roadmap", "Migration", "Optimization"],
    highlight: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 animate-on-scroll">
          <div>
            <span className="font-mono text-xs text-volt tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-800 text-cream mt-3 leading-none tracking-tight">
              Services that
              <br />
              <span className="text-gradient-volt">ship results</span>
            </h2>
          </div>
          <p className="text-mist font-300 text-base max-w-xs leading-relaxed">
            We don&apos;t do everything. We do these things extraordinarily well.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className={`animate-on-scroll card-hover group relative p-8 ${
                  service.highlight
                    ? "bg-volt col-span-1"
                    : "bg-ink-2 hover:bg-ink-3"
                } transition-all duration-300`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Number */}
                <span
                  className={`font-mono text-xs tracking-widest ${
                    service.highlight ? "text-ink/50" : "text-mist-2"
                  }`}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className={`mt-6 mb-5 w-10 h-10 rounded-sm flex items-center justify-center ${
                    service.highlight ? "bg-ink/10" : "bg-white/5"
                  }`}
                >
                  <Icon
                    size={20}
                    className={service.highlight ? "text-ink" : "text-volt"}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`font-display text-xl font-700 leading-tight mb-3 ${
                    service.highlight ? "text-ink" : "text-cream"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed font-300 mb-6 ${
                    service.highlight ? "text-ink/70" : "text-mist"
                  }`}
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-sm font-mono ${
                        service.highlight
                          ? "bg-ink/10 text-ink"
                          : "bg-white/5 text-mist"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div
                  className={`absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2 ${
                    service.highlight ? "text-ink" : "text-volt"
                  }`}
                >
                  →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
